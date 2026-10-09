import * as React from "react"

import { loadServices, type Service } from "@/data/charter"

/** The service records, or `undefined` until their chunk has loaded. Pass `enabled: false` to defer loading. */
export function useServices(enabled = true): Service[] | undefined {
  const [services, setServices] = React.useState<Service[]>()

  React.useEffect(() => {
    if (!enabled) return
    let active = true
    loadServices().then(
      (loaded) => {
        if (active) setServices(loaded)
      },
      () => {}
    )
    return () => {
      active = false
    }
  }, [enabled])

  return services
}
