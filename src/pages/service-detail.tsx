import { getRouteApi, Link } from "@tanstack/react-router"
import { ArrowLeftIcon, ArrowRightIcon, BuildingOfficeIcon, ClockIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"

import { RequirementsCard, StepsCard } from "@/components/services/service-process"
import { ServiceSidebar } from "@/components/services/service-sidebar"
import { Container, Section } from "@/components/site/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { serviceCategories, serviceDetail } from "@/data/site"

const route = getRouteApi("/services/$serviceId")

export function ServiceDetailPage() {
  const service = route.useLoaderData()
  const category = serviceCategories.find((c) => c.id === service.category)
  const { facts, notes } = serviceDetail

  const factItems = [
    { label: facts.classification, value: service.classification },
    { label: facts.transactionTypes, value: service.transactionTypes.join(", ") },
    { label: facts.whoMayAvail, value: service.whoMayAvail },
  ].filter((f) => f.value)

  return (
    <>
      <section className="bg-muted/60">
        <Container className="space-y-5 py-10 sm:py-14">
          <Button asChild variant="ghost" size="sm" className="-ml-3">
            <Link to="/services" search={category ? { category: category.id } : undefined}>
              <ArrowLeftIcon />
              {serviceDetail.back}
            </Link>
          </Button>
          <div className="space-y-3">
            {category && (
              <Badge variant="secondary" className="gap-1 rounded-full px-2.5 text-[11px] font-semibold tracking-wider uppercase">
                <category.icon />
                {category.name}
              </Badge>
            )}
            <h1 className="text-3xl font-extrabold tracking-tight text-balance [overflow-wrap:anywhere] sm:text-5xl">
              {service.name}
            </h1>
            <p className="flex items-start gap-2 text-base text-muted-foreground">
              <BuildingOfficeIcon className="mt-1 size-4 shrink-0" aria-hidden />
              <span className="min-w-0 [overflow-wrap:anywhere]">{service.office}</span>
            </p>
          </div>
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {factItems.map((f) => (
              <div key={f.label} className="min-w-0">
                <dt className="text-xs font-medium text-muted-foreground">{f.label}</dt>
                <dd className="text-sm font-medium [overflow-wrap:anywhere]">{f.value}</dd>
              </div>
            ))}
            {service.totalTime && (
              <div className="min-w-0">
                <dt className="text-xs font-medium text-muted-foreground">{facts.totalTime}</dt>
                <dd className="flex items-start gap-1.5 text-sm font-medium">
                  <ClockIcon className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span className="min-w-0 [overflow-wrap:anywhere]">{service.totalTime}</span>
                </dd>
              </div>
            )}
          </dl>
        </Container>
      </section>

      <Section className="pt-8 sm:pt-10">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10">
          <div className="min-w-0 space-y-6">
            <RequirementsCard requirements={service.requirements} />
            <StepsCard steps={service.steps} />
            {service.notes && service.notes.length > 0 && (
              <Card className="gap-4">
                <CardHeader>
                  <h2 className="text-xl leading-none font-semibold">{notes.title}</h2>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-pretty text-muted-foreground">
                    {service.notes.map((n, i) => (
                      <li key={i} className="[overflow-wrap:anywhere]">
                        {n}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
          <ServiceSidebar service={service} />
        </Container>
      </Section>
    </>
  )
}

export function ServiceNotFound() {
  const { notFound } = serviceDetail
  return (
    <Section>
      <Container>
        <Card className="items-center py-14 text-center">
          <MagnifyingGlassIcon className="size-10 text-muted-foreground" aria-hidden />
          <CardHeader className="w-full">
            <h1 className="text-2xl leading-none font-semibold">{notFound.title}</h1>
            <CardDescription>{notFound.description}</CardDescription>
          </CardHeader>
          <Button asChild>
            <Link to="/services">
              {notFound.action}
              <ArrowRightIcon />
            </Link>
          </Button>
        </Card>
      </Container>
    </Section>
  )
}
