import * as React from "react"

// "Don't show again" persists across visits; otherwise the dialog is shown
// once per browser session so it doesn't reappear on every page load.
const DISMISSED_KEY = "bn-welcome-dismissed"
const SEEN_KEY = "bn-welcome-seen"

function shouldShow(): boolean {
  try {
    return localStorage.getItem(DISMISSED_KEY) !== "1" && sessionStorage.getItem(SEEN_KEY) !== "1"
  } catch {
    // storage unavailable; showing on every load would be noisy, so skip it
    return false
  }
}

export function useWelcome() {
  const [open, setOpen] = React.useState(shouldShow)
  const [dontShowAgain, setDontShowAgain] = React.useState(false)

  const dismiss = React.useCallback(() => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1")
      if (dontShowAgain) localStorage.setItem(DISMISSED_KEY, "1")
    } catch {
      // ignore
    }
    setOpen(false)
  }, [dontShowAgain])

  return { open, dismiss, dontShowAgain, setDontShowAgain }
}
