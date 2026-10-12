import { Link } from "@tanstack/react-router"
import { ArrowRightIcon, MagnifyingGlassIcon, ShieldCheckIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/site/section"
import { popularSearches } from "@/data/site"
import { useServiceSearch } from "@/hooks/use-service-search"

export function Hero() {
  const search = useServiceSearch()

  return (
    <section className="relative overflow-hidden bg-brand text-brand-foreground">
      {/* soft contour rings evoke the river fork the town grew from */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[640px] text-brand-muted/15"
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <circle key={i} cx="200" cy="200" r={40 + i * 20} strokeWidth="1" />
        ))}
      </svg>

      <Container className="relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="space-y-6">
          <Badge className="rounded-full border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-brand-foreground uppercase">
            Start with what you need
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Better Naguilian, <span className="text-brand-muted">La Union</span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-brand-foreground/80 sm:text-lg">
            Find verified municipal service information, organized around the task you need to complete.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="inverse" size="lg">
              <Link to="/services">
                Browse services
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button variant="inverse-outline" size="lg" onClick={() => search.open()}>
              <MagnifyingGlassIcon />
              Find a service
            </Button>
          </div>
          <p className="inline-flex items-center gap-2 text-xs text-brand-foreground/70">
            <ShieldCheckIcon weight="fill" className="size-4 text-brand-muted" />
            Drawn from official municipal sources.
          </p>
        </div>

        <Card className="gap-5 border-0 shadow-2xl shadow-black/30">
          <CardHeader className="grid-cols-[auto_1fr] gap-x-3">
            <span className="row-span-2 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <MagnifyingGlassIcon className="size-5" />
            </span>
            <CardTitle className="text-lg">Find a service</CardTitle>
            <CardDescription>Search verified Naguilian service records by name, office, category, or description.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <button
              type="button"
              onClick={() => search.open()}
              className="flex h-12 w-full items-center gap-3 rounded-lg border border-input bg-background px-4 text-left text-sm text-muted-foreground shadow-xs transition-colors outline-none hover:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <span className="flex-1">What do you need help with?</span>
              <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <ArrowRightIcon className="size-4" />
              </span>
            </button>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">Popular:</span>
              {popularSearches.map((p) => (
                <Badge key={p.label} asChild variant="secondary" className="cursor-pointer rounded-full px-3 py-1">
                  <button type="button" onClick={() => search.open(p.query)}>
                    {p.label}
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  )
}
