import * as React from "react"
import { useNavigate } from "@tanstack/react-router"
import { ArrowRightIcon, SquaresFourIcon } from "@phosphor-icons/react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { serviceCategories, services, type ServiceCategoryId } from "@/data/site"
import { ServiceSearchContext } from "@/hooks/use-service-search"

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
        title="Find a service"
        description="Search Naguilian municipal services by name, office, or category."
      >
        <CommandInput
          placeholder="What do you need help with?"
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No matching service. Try a broader word like “permit”.</CommandEmpty>
          {serviceCategories.map((category) => {
            const items = services.filter((s) => s.category === category.id)
            const Icon = category.icon
            return (
              <CommandGroup key={category.id} heading={category.name}>
                {items.map((service) => (
                  <CommandItem
                    key={service.name}
                    value={`${service.name} ${service.office} ${category.name}`}
                    keywords={service.keywords}
                    onSelect={() => go({ category: category.id, q: service.name })}
                  >
                    <Icon />
                    <span>{service.name}</span>
                    <CommandShortcut className="tracking-normal">{service.office}</CommandShortcut>
                  </CommandItem>
                ))}
              </CommandGroup>
            )
          })}
          <CommandSeparator />
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
