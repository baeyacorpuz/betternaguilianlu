import * as React from "react"

type Theme = "light" | "dark"

const STORAGE_KEY = "bn-theme"

function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "light" || stored === "dark") return stored
  } catch {
    // storage unavailable; fall through to system preference
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function useTheme() {
  const [theme, setTheme] = React.useState<Theme>(readTheme)

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggle = React.useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), [])

  return { theme, toggle }
}
