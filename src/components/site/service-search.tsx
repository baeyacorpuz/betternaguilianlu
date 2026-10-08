import * as React from "react"
import { useNavigate } from "@tanstack/react-router"
import { ArrowRightIcon, SquaresFourIcon } from "@phosphor-icons/react"

import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { serviceCategories, services, type Service, type ServiceCategoryId } from "@/data/site"
import { ServiceSearchContext } from "@/hooks/use-service-search"
import { searchServices } from "@/lib/service-search"

export function ServiceSearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const navigate = useNavigate()

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const value = React.useMemo(
    () => ({
      open: (q?: string) => {
        setQuery(q ?? "")
        setOpen(true)
      },
    }),
    []
  )

  // Ranked matches; with a query, show one flat list best-first instead of category groups.
  const matches = searchServices(query)
  const searching = query.trim() !== ""

  const go = (search: { category?: ServiceCategoryId; q?: string }) => {
    setOpen(false)
    void navigate({ to: "/services", search })
  }

  return (
    <ServiceSearchContext.Provider value={value}>
      {children}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        shouldFilter={false}
        title="Find a service"
        description="Search Naguilian municipal services by name, office, category, or description."
      >
        <CommandInput
          placeholder="What do you need help with?"
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {searching ? (
            matches.length > 0 ? (
              <CommandGroup heading="Best matches">
                {matches.map((service) => (
                  <ServiceItem key={service.name} service={service} onSelect={go} />
                ))}
              </CommandGroup>
            ) : (
              <p className="py-6 text-center text-sm text-muted-foreground">
                No matching service. Try a broader word like “permit”.
              </p>
            )
          ) : (
            serviceCategories.map((category) => (
              <CommandGroup key={category.id} heading={category.name}>
                {services
                  .filter((s) => s.category === category.id)
                  .map((service) => (
                    <ServiceItem key={service.name} service={service} onSelect={go} />
                  ))}
              </CommandGroup>
            ))
          )}
          {!searching && <CommandSeparator />}
          <CommandGroup heading="Browse">
            <CommandItem value="all services browse" onSelect={() => go({})}>
              <SquaresFourIcon />
              <span>View all services</span>
              <ArrowRightIcon className="ml-auto" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </ServiceSearchContext.Provider>
  )
}

function ServiceItem({
  service,
  onSelect,
}: {
  service: Service
  onSelect: (search: { category: ServiceCategoryId; q: string }) => void
}) {
  const Icon = serviceCategories.find((c) => c.id === service.category)!.icon
  return (
    <CommandItem value={service.name} onSelect={() => onSelect({ category: service.category, q: service.name })}>
      <Icon />
      <span>{service.name}</span>
      <CommandShortcut className="tracking-normal">{service.office}</CommandShortcut>
    </CommandItem>
  )
}
