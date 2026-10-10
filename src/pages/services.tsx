import { getRouteApi, Link } from "@tanstack/react-router"
import { ArrowRightIcon, BuildingOfficeIcon, ChatCenteredTextIcon, HandshakeIcon, MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { feedbackMechanism, pledge } from "@/data/charter"
import { serviceCategories, serviceStandards, type ServiceCategoryId } from "@/data/site"
import { searchServices } from "@/lib/service-search"

const route = getRouteApi("/services")

export function ServicesPage() {
  const services = route.useLoaderData()
  const { category, q = "" } = route.useSearch()
  const navigate = route.useNavigate()
  const query = q

  const setSearch = (next: { category?: ServiceCategoryId; q?: string }) =>
    void navigate({ search: (prev) => ({ ...prev, ...next }), replace: true })

  const needle = query.trim()
  const results = searchServices(query, services).filter((s) => !category || s.category === category)

  return (
    <>
      <section className="bg-brand text-brand-foreground">
        <Container className="space-y-4 py-12 sm:py-16">
          <Badge className="rounded-full border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-brand-foreground uppercase">
            Services
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Municipal services</h1>
          <p className="max-w-xl text-brand-foreground/75">
            Published service records from Naguilian’s Citizen’s Charter. Filter by category or search by name,
            office, or keyword.
          </p>
        </Container>
      </section>

      <Section className="pt-8 sm:pt-10">
        <Container className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <MagnifyingGlassIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setSearch({ q: e.target.value || undefined })}
                placeholder="Search services…"
                className="h-10 bg-card pl-9"
                aria-label="Search services"
              />
            </div>
            {/* one row that scrolls sideways on narrow screens instead of wrapping */}
            <div className="-mx-4 min-w-0 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
              <ToggleGroup
                type="single"
                variant="outline"
                size="sm"
                value={category ?? "all"}
                onValueChange={(v) => v && setSearch({ category: v === "all" ? undefined : (v as ServiceCategoryId) })}
                className="w-max bg-card"
                aria-label="Filter by category"
              >
                <ToggleGroupItem value="all" className="flex-none px-4">All</ToggleGroupItem>
                {serviceCategories.map((c) => (
                  <ToggleGroupItem key={c.id} value={c.id} className="flex-none gap-1.5 px-3">
                    <c.icon />
                    {c.name}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>

          <p className="text-sm text-muted-foreground" aria-live="polite">
            {results.length} {results.length === 1 ? "service" : "services"}
            {category && ` in ${serviceCategories.find((c) => c.id === category)?.name}`}
            {needle && ` matching “${needle}”`}
          </p>

          {results.length === 0 ? (
            <Card className="items-center py-14 text-center">
              <MagnifyingGlassIcon className="size-10 text-muted-foreground" />
              <CardHeader className="w-full">
                <CardTitle>No matching services</CardTitle>
                <CardDescription>Try a broader word, or clear the filters.</CardDescription>
              </CardHeader>
              <Button variant="outline" onClick={() => setSearch({ q: undefined, category: undefined })}>
                <XIcon />
                Clear filters
              </Button>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((s) => {
                const cat = serviceCategories.find((c) => c.id === s.category)!
                return (
                  <Card key={s.id} className="group relative gap-4 transition-all hover:-translate-y-0.5 hover:border-ring/50 hover:shadow-md">
                    <CardHeader>
                      <Badge variant="secondary" className="mb-1 gap-1">
                        <cat.icon />
                        {cat.name}
                      </Badge>
                      <CardAction>
                        <ArrowRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </CardAction>
                      <CardTitle className="text-base leading-snug">
                        <Link
                          to="/services/$serviceId"
                          params={{ serviceId: s.id }}
                          className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-[3px] focus-visible:after:ring-ring/50"
                        >
                          {s.name}
                        </Link>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1.5">
                        <BuildingOfficeIcon className="size-3.5" />
                        {s.office}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          )}
        </Container>
      </Section>

      <Section tone="muted" id="service-standards">
        <Container>
          <SectionHeading
            eyebrow={serviceStandards.eyebrow}
            title={serviceStandards.title}
            description={serviceStandards.description}
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="gap-4">
              <CardHeader className="grid-cols-[auto_1fr] gap-x-3">
                <span className="row-span-2 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <HandshakeIcon className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg leading-none font-semibold">{serviceStandards.pledgeTitle}</h3>
                <CardDescription>{pledge.intro}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-x-8 gap-y-2 text-sm leading-relaxed text-pretty sm:grid-cols-2">
                  {pledge.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span className="min-w-0 [overflow-wrap:anywhere]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="gap-4">
              <CardHeader className="grid-cols-[auto_1fr] gap-x-3">
                <span className="row-span-2 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <ChatCenteredTextIcon className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg leading-none font-semibold">{serviceStandards.feedbackTitle}</h3>
                <CardDescription>{feedbackMechanism.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-pretty">
                <p className="font-semibold">{serviceStandards.slipLabel}</p>
                <ul className="list-disc space-y-1.5 pl-5">
                  {feedbackMechanism.slipAsks.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground">{feedbackMechanism.confidentiality}</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}
