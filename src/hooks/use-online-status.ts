import * as React from "react"

function subscribe(onChange: () => void) {
  window.addEventListener("online", onChange)
  window.addEventListener("offline", onChange)
  return () => {
    window.removeEventListener("online", onChange)
    window.removeEventListener("offline", onChange)
  }
}

/** `false` while the browser reports no network connection. */
export function useOnlineStatus() {
  return React.useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  )
}
