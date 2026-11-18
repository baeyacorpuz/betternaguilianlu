import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import type { ReactNode } from "react"

import { Logo } from "@/components/site/logo"
import { Container } from "@/components/site/section"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { contact, footer } from "@/data/site"
import { updatesPage } from "@/data/updates"
import { appBuild } from "@/lib/app-build"
import { formatIsoDate } from "@/lib/dates"

const linkClass =
  "inline-flex items-center gap-1.5 rounded-sm text-brand-foreground underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-brand-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
const headingClass = "text-xs font-semibold tracking-wider text-brand-foreground/60 uppercase"
const mutedLinkClass =
  "rounded-sm underline-offset-4 outline-none hover:text-brand-foreground hover:underline focus-visible:ring-2 focus-visible:ring-brand-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-brand"

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={linkClass}>
      {children}
      <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
      <span className="sr-only">({footer.newTab})</span>
    </a>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16">
        <div className="md:col-span-2 lg:col-span-1">
          <Link
            to="/"
            className="inline-block rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
          >
            <Logo variant="full" className="block h-12 text-brand-foreground" />
            <span className="sr-only">{footer.homeLabel}</span>
          </Link>
          <p className="mt-2 text-sm font-medium text-brand-foreground/70">{footer.tagline}</p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-foreground/80 text-pretty">
            {footer.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild variant="inverse" size="lg" className="rounded-full px-5">
              <a href={footer.contribute.href} target="_blank" rel="noreferrer">
                <GithubLogoIcon aria-hidden="true" />
                {footer.contribute.label}
                <span className="sr-only">({footer.newTab})</span>
              </a>
            </Button>
          </div>
          <div className="mt-8">
            <p className={headingClass}>{footer.hall.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-foreground/80">{contact.address}</p>
            <p className="text-sm text-brand-foreground/80">{contact.phone}</p>
          </div>
        </div>

        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore" className={headingClass}>
            {footer.explore.title}
          </h2>
          <ul className="mt-5 space-y-3 text-base">
            {footer.explore.items.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ExternalLink href={footer.explore.charter.href}>{footer.explore.charter.label}</ExternalLink>
            </li>
          </ul>
        </nav>

        <div aria-labelledby="footer-community">
          <h2 id="footer-community" className={headingClass}>
            {footer.community.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-brand-foreground/80 text-pretty">
            {footer.community.description}
          </p>
          <ul className="mt-5 space-y-3 text-base">
            {footer.community.links.map((item) => (
              <li key={item.label}>
                <ExternalLink href={item.href}>{item.label}</ExternalLink>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold">{footer.community.sitesTitle}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footer.community.sites.map((site) => (
              <li key={site.href}>
                <ExternalLink href={site.href}>{site.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Separator className="bg-white/10" />

      <Container className="flex flex-col gap-3 pt-6 text-xs text-brand-foreground/60 sm:flex-row sm:items-center">
        <p className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
          <span>
            © {new Date().getFullYear()} {footer.bottom.name}
          </span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <Link to="/about" className={mutedLinkClass}>
            {footer.bottom.disclaimer}
          </Link>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <Link to="/updates" className={mutedLinkClass}>
            v{appBuild.version} · {updatesPage.updated} {formatIsoDate(appBuild.date)}
          </Link>
        </p>
      </Container>
      <Container className="pt-2 pb-6 text-xs text-brand-foreground/60">
        <p>{footer.bottom.credit}</p>
      </Container>
    </footer>
  )
}
