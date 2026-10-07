import * as React from "react"
import { Outlet, useLocation } from "@tanstack/react-router"

import { TooltipProvider } from "@/components/ui/tooltip"
import { ServiceSearchProvider } from "@/components/site/service-search"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader, TopBar } from "@/components/site/site-header"

function ScrollToHash() {
  const { hash, pathname } = useLocation()
  React.useEffect(() => {
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [hash, pathname])
  return null
}

function RootLayout() {
  return (
    <TooltipProvider delayDuration={200}>
      <ServiceSearchProvider>
        <div className="flex min-h-svh flex-col">
          <a
            href="#main"
            className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
          >
            Skip to content
          </a>
          <TopBar />
          <SiteHeader />
          <main id="main" className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <ScrollToHash />
      </ServiceSearchProvider>
    </TooltipProvider>
  )
}

export default RootLayout
