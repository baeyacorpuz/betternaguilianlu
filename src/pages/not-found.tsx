import { Link } from "@tanstack/react-router"
import { ArrowRightIcon, EnvelopeSimpleIcon, HouseIcon, MagnifyingGlassIcon, SignpostIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { Container, Section } from "@/components/site/section"
import { notFoundPage } from "@/data/civic"
import { mailto } from "@/data/site"
import { useServiceSearch } from "@/hooks/use-service-search"
import { useDocumentTitle } from "@/hooks/use-document-title"

export function NotFoundPage() {
  useDocumentTitle(notFoundPage.title)
  const search = useServiceSearch()
  const report = mailto(
    "Report: broken link on Better Naguilian",
    `Broken address: ${typeof window === "undefined" ? "" : window.location.href}\n\nWhere I found the link:\n`
  )

  return (
    <Section>
      <Container className="flex flex-col items-center py-8 text-center">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
          <SignpostIcon className="size-8" aria-hidden />
        </span>
        <p className="mt-6 text-sm font-semibold tracking-wider text-primary uppercase">{notFoundPage.code}</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">{notFoundPage.title}</h1>
        <p className="mt-4 max-w-md text-base text-pretty text-muted-foreground">{notFoundPage.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" onClick={() => search.open()}>
            <MagnifyingGlassIcon />
            {notFoundPage.search}
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/">
              <HouseIcon />
              {notFoundPage.home}
            </Link>
          </Button>
        </div>
        <ul className="mt-10 grid w-full max-w-2xl gap-2 sm:grid-cols-2">
          {notFoundPage.shortcuts.map((s) => (
            <li key={s.to}>
              <Link
                to={s.to}
                className="flex items-center justify-between rounded-xl border bg-card px-4 py-3 text-left text-sm font-semibold outline-none transition-colors hover:border-ring/50 hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                {s.label}
                <ArrowRightIcon className="size-4 text-muted-foreground" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={report}
          className="mt-8 inline-flex items-center gap-1.5 rounded-sm text-sm text-muted-foreground underline-offset-4 outline-none hover:text-foreground hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <EnvelopeSimpleIcon className="size-4" aria-hidden />
          {notFoundPage.report}
        </a>
      </Container>
    </Section>
  )
}
