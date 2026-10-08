import { getRouteApi } from "@tanstack/react-router"
import { ArrowUpRightIcon, BuildingOfficeIcon, MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Container, Section, SourceLink } from "@/components/site/section"
import { links, serviceCategories, services, type ServiceCategoryId } from "@/data/site"

const route = getRouteApi("/services")

export function ServicesPage() {
  const { category, q = "" } = route.useSearch()
  const navigate = route.useNavigate()
  const query = q

  const setSearch = (next: { category?: ServiceCategoryId; q?: string }) =>
    void navigate({ search: (prev) => ({ ...prev, ...next }), replace: true })

  const needle = query.trim().toLowerCase()
  const results = services.filter((s) => {
    if (category && s.category !== category) return false
    if (!needle) return true
    const cat = serviceCategories.find((c) => c.id === s.category)!
    return [s.name, s.office, cat.name, ...(s.keywords ?? [])].join(" ").toLowerCase().includes(needle)
  })

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
            {needle && ` matching “${query.trim()}”`}
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
                  <Card key={s.name} className="gap-4">
                    <CardHeader>
                      <Badge variant="secondary" className="mb-1 gap-1">
                        <cat.icon />
                        {cat.name}
                      </Badge>
                      <CardAction>
                        <ArrowUpRightIcon className="size-4 text-muted-foreground" />
                      </CardAction>
                      <CardTitle className="text-base">{s.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1.5">
                        <BuildingOfficeIcon className="size-3.5" />
                        {s.office}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto justify-between border-t [.border-t]:pt-4">
                      <SourceLink href={links.citizensCharter} label="Citizen’s Charter" />
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
