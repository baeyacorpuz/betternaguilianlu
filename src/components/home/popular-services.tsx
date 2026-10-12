import { Link } from "@tanstack/react-router"
import { ArrowRightIcon, ArrowUpRightIcon, SquaresFourIcon } from "@phosphor-icons/react"

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { charterMeta } from "@/data/charter"
import { serviceCategories, serviceLoading } from "@/data/site"
import { useServices } from "@/hooks/use-services"

export function PopularServices() {
  const { services } = useServices()
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Popular Services"
          description="Open a filtered Services view for published records from Naguilian’s Citizen’s Charter."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.filter((c) => c.highlight).map((category) => {
            const count = services?.filter((s) => s.category === category.id).length
            return (
              <Card key={category.id} className="group relative gap-4 transition-all hover:-translate-y-0.5 hover:border-ring/50 hover:shadow-md">
                <CardHeader>
                  <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <category.icon className="size-5" />
                  </span>
                  <CardAction>
                    <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </CardAction>
                  <CardTitle className="text-base">
                    <Link
                      to="/services"
                      search={{ category: category.id }}
                      className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-[3px] focus-visible:after:ring-ring/50"
                    >
                      {category.name}
                    </Link>
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-2 text-sm">
                  <p className="inline-flex items-center gap-1 font-semibold text-primary">
                    {count === undefined ? serviceLoading.count : `${count} services`} <ArrowRightIcon className="size-3.5" />
                  </p>
                  {category.featured && (
                    <a
                      href={category.featured.href}
                      className="relative z-10 flex w-fit items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:underline"
                    >
                      {category.featured.label}
                      <ArrowUpRightIcon className="size-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            )
          })}

          <Card className="group relative justify-between gap-4 border-transparent bg-primary text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg">
            <CardHeader>
              <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-white/10">
                <SquaresFourIcon className="size-5" />
              </span>
              <CardAction>
                <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </CardAction>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle className="text-xl">
                <Link to="/services" className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-[3px] focus-visible:after:ring-white/50">
                  View all services
                </Link>
              </CardTitle>
              <p className="text-sm text-primary-foreground/75">
                Open unfiltered Services view for published records from Naguilian’s Citizen’s Charter.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="mt-4 text-right text-xs text-muted-foreground">Category source: Naguilian {charterMeta.edition} Citizen’s Charter</p>
      </Container>
    </Section>
  )
}
