import type { ReactNode } from "react"
import { Link, Outlet } from "@tanstack/react-router"

import { Container } from "@/components/site/section"
import { government } from "@/data/site"

export function GovernmentLayout() {
  const { nav } = government
  return (
    <>
      <div className="bg-muted/60">
        <Container className="pt-6">
          <nav aria-label={nav.label}>
            <ul className="flex flex-wrap gap-2">
              {nav.items.map((item) => (
                <li key={item.to}>
                  {/* Link sets aria-current="page" and data-status="active" on the current page */}
                  <Link
                    to={item.to}
                    className="inline-flex items-center rounded-full border bg-background px-3.5 py-1.5 text-sm font-medium transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[status=active]:border-primary data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
      <Outlet />
    </>
  )
}

/** The muted header band each Government page opens with; owns the page's `h1`. */
export function GovernmentIntro({ title, description, children }: { title: string; description: string; children?: ReactNode }) {
  return (
    <section className="bg-muted/60">
      <Container className="space-y-4 pt-8 pb-12 sm:pb-16">
        <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">{government.eyebrow}</p>
        <h1 className="text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">{description}</p>
        {children && <div className="max-w-2xl pt-2">{children}</div>}
      </Container>
    </section>
  )
}
