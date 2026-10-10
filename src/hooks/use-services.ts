import * as React from "react"

import { loadServices, type Service } from "@/data/charter"

/**
 * The service records (`undefined` until their chunk has loaded) and whether loading failed.
 * A failed chunk load also triggers a one-time page reload (see main.tsx), because browsers
 * cache failed module imports and an in-page retry can't recover. Pass `enabled: false` to defer loading.
 */
export function useServices(enabled = true): { services: Service[] | undefined; failed: boolean } {
  const [services, setServices] = React.useState<Service[]>()
  const [failed, setFailed] = React.useState(false)

  React.useEffect(() => {
    if (!enabled) return
    let active = true
    loadServices().then(
      (loaded) => active && setServices(loaded),
      () => active && setFailed(true)
    )
    return () => {
      active = false
    }
  }, [enabled])

  return { services, failed }
}
