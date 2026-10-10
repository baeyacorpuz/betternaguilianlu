import * as React from "react"

import { weatherApi } from "@/data/site"
import { buildForecastUrl, parseForecast, type WeatherData } from "@/lib/weather"

export type WeatherState = {
  status: "loading" | "ready" | "error"
  data: WeatherData | null
  /** True while a manual refresh runs and the last forecast is still on screen. */
  refreshing: boolean
  /** True when the latest refresh failed, or the forecast came back old (for example from the offline cache). */
  stale: boolean
  refetch: () => void
}

type Core = Pick<WeatherState, "status" | "data" | "refreshing" | "stale">
type Action =
  | { type: "start"; hasData: boolean }
  | { type: "success"; data: WeatherData; stale: boolean }
  | { type: "failure"; hasData: boolean }
  | { type: "settled" }

function reduce(state: Core, action: Action): Core {
  switch (action.type) {
    case "start":
      return action.hasData ? { ...state, refreshing: true } : { ...state, status: "loading" }
    case "success":
      return { status: "ready", data: action.data, refreshing: false, stale: action.stale }
    case "failure":
      return action.hasData ? { ...state, stale: true } : { ...state, status: "error" }
    case "settled":
      return state.refreshing ? { ...state, refreshing: false } : state
  }
}

export function useWeather(): WeatherState {
  const [{ status, data, refreshing, stale }, dispatch] = React.useReducer(reduce, {
    status: "loading",
    data: null,
    refreshing: false,
    stale: false,
  })

  const controller = React.useRef<AbortController | null>(null)
  const lastFetch = React.useRef(0)
  const hasData = React.useRef(false)

  // Fetches and stores the forecast. State is only set after the request settles.
  const run = React.useCallback(async () => {
    controller.current?.abort()
    const ctrl = new AbortController()
    controller.current = ctrl
    const timeout = window.setTimeout(() => ctrl.abort(), weatherApi.timeoutMs)
    lastFetch.current = Date.now()

    try {
      const response = await fetch(buildForecastUrl(), { signal: ctrl.signal, headers: { Accept: "application/json" } })
      if (!response.ok) throw new Error(`Forecast request failed (${response.status})`)
      const next = parseForecast(await response.json())
      if (controller.current !== ctrl) return
      hasData.current = true
      dispatch({ type: "success", data: next, stale: Date.now() - next.observedAt > weatherApi.staleDataMs })
    } catch {
      // a newer request replaced this one, or the component unmounted
      if (controller.current !== ctrl) return
      lastFetch.current = 0
      dispatch({ type: "failure", hasData: hasData.current })
    } finally {
      window.clearTimeout(timeout)
      if (controller.current === ctrl) dispatch({ type: "settled" })
    }
  }, [])

  const refetch = React.useCallback(() => {
    dispatch({ type: "start", hasData: hasData.current })
    void run()
  }, [run])

  React.useEffect(() => {
    void run()
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") void run()
    }, weatherApi.refreshMs)
    const onVisible = () => {
      if (document.visibilityState === "visible" && Date.now() - lastFetch.current > weatherApi.staleAfterMs) void run()
    }
    document.addEventListener("visibilitychange", onVisible)
    return () => {
      window.clearInterval(id)
      document.removeEventListener("visibilitychange", onVisible)
      const current = controller.current
      controller.current = null
      current?.abort()
    }
  }, [run])

  return { status, data, refreshing, stale, refetch }
}
