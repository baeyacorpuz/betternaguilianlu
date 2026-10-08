import * as React from "react"

type ServiceSearchContextValue = {
  open: (query?: string) => void
}

export const ServiceSearchContext = React.createContext<ServiceSearchContextValue | null>(null)

export function useServiceSearch() {
  const ctx = React.useContext(ServiceSearchContext)
  if (!ctx) throw new Error("useServiceSearch must be used inside <ServiceSearchProvider>")
  return ctx
}
