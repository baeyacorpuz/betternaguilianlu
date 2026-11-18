import * as React from "react"
import { Outlet, useLocation } from "@tanstack/react-router"
import { Analytics } from "@vercel/analytics/react"

import { TooltipProvider } from "@/components/ui/tooltip"
import { OfflineBanner } from "@/components/site/offline-banner"
import { ServiceSearchProvider } from "@/components/site/service-search"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader, TopBar } from "@/components/site/site-header"
import { WelcomeDialog } from "@/components/site/welcome-dialog"

// vite dev, vite preview and e2e run on localhost, where /_vercel/insights is not served (404 in the console)
const isLocalHost = typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname)

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
        <div className="flex min-h-dvh flex-col">
          <a
            href="#main"
            className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
          >
            Skip to content
          </a>
          <TopBar />
          <SiteHeader />
          <OfflineBanner />
          <main id="main" className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <ScrollToHash />
        <WelcomeDialog />
        {!isLocalHost && <Analytics />}
      </ServiceSearchProvider>
    </TooltipProvider>
  )
}

export default RootLayout
