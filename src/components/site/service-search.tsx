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
import { serviceCategories, serviceLoading, type Service, type ServiceCategoryId } from "@/data/site"
import { ServiceSearchContext } from "@/hooks/use-service-search"
import { useServices } from "@/hooks/use-services"
import { searchServices } from "@/lib/service-search"

export function ServiceSearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const navigate = useNavigate()
  const [idle, setIdle] = React.useState(false)
  const { services, failed } = useServices(open || idle)

  // Prefetch the service records once the app is idle so the dialog is usually instant.
  React.useEffect(() => {
    const ric = window.requestIdleCallback
    if (ric) {
      const id = ric(() => setIdle(true))
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(() => setIdle(true), 2000)
    return () => window.clearTimeout(id)
  }, [])

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
  const matches = services ? searchServices(query, services) : []
  const searching = query.trim() !== ""

  const go = (search: { category?: ServiceCategoryId; q?: string }) => {
    setOpen(false)
    void navigate({ to: "/services", search })
  }

  const goService = (id: string) => {
    setOpen(false)
    void navigate({ to: "/services/$serviceId", params: { serviceId: id } })
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
          {!services ? (
            <p className="py-6 text-center text-sm text-muted-foreground" role="status">
              {failed ? serviceLoading.failed : serviceLoading.search}
            </p>
          ) : searching ? (
            matches.length > 0 ? (
              <CommandGroup heading="Best matches">
                {matches.map((service) => (
                  <ServiceItem key={service.id} service={service} onSelect={goService} />
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
                    <ServiceItem key={service.id} service={service} onSelect={goService} />
                  ))}
              </CommandGroup>
            ))
          )}
          {services && !searching && <CommandSeparator />}
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
  onSelect: (id: string) => void
}) {
  const Icon = serviceCategories.find((c) => c.id === service.category)!.icon
  return (
    <CommandItem value={service.id} keywords={[service.name]} onSelect={() => onSelect(service.id)}>
      <Icon />
      <span className="min-w-0 truncate">{service.name}</span>
      <CommandShortcut className="max-w-[40%] truncate tracking-normal">{service.office}</CommandShortcut>
    </CommandItem>
  )
}
