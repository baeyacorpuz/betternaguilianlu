import { Link } from "@tanstack/react-router"
import { ArrowRightIcon, ArrowUpRightIcon, BookOpenTextIcon, GavelIcon, PhoneIcon, ScrollIcon, UsersThreeIcon } from "@phosphor-icons/react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, PageHero, Section, SectionHeading, SourceLink, SourcesNote } from "@/components/site/section"
import { offices } from "@/data/charter"
import { legislative } from "@/data/civic"
import { useServices } from "@/hooks/use-services"
import { useDocumentTitle } from "@/hooks/use-document-title"

const recordIcons = [ScrollIcon, UsersThreeIcon, BookOpenTextIcon]
const linkClass =
  "inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-primary underline-offset-4 outline-none after:absolute after:inset-0 after:rounded-xl hover:underline focus-visible:after:ring-[3px] focus-visible:after:ring-ring/50"

export function LegislativePage() {
  useDocumentTitle(legislative.title)
  const l = legislative
  const secretariat = offices.find((o) => o.id === "sb-secretariat")
  const { services } = useServices()
  const councilServices = (services ?? []).filter((s) => s.department === "sb" || s.department === "sb-secretariat")

  return (
    <>
      <PageHero eyebrow={l.eyebrow} title={l.title} description={l.description} />

      <Section className="pt-8 sm:pt-10">
        <Container className="space-y-6">
          <ul className="grid gap-4 md:grid-cols-3">
            {l.records.map((r, i) => {
              const Icon = recordIcons[i]
              return (
                <li key={r.title}>
                  <Card className="relative h-full gap-4 transition-shadow hover:shadow-md">
                    <CardHeader>
                      <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <CardTitle className="text-base">{r.title}</CardTitle>
                      <CardDescription className="text-pretty">{r.body}</CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      {"to" in r && r.to ? (
                        <Link to={r.to} className={linkClass}>
                          {r.cta}
                          <ArrowRightIcon className="size-3.5" />
                        </Link>
                      ) : (
                        <a href={r.href} target="_blank" rel="noreferrer" className={linkClass}>
                          {r.cta}
                          <ArrowUpRightIcon className="size-3.5" />
                        </a>
                      )}
                    </CardFooter>
                  </Card>
                </li>
              )
            })}
          </ul>
          <Alert>
            <GavelIcon aria-hidden />
            <AlertDescription>{l.exactWording}</AlertDescription>
          </Alert>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow={l.processEyebrow} title={l.processTitle} description={l.processDescription} />
          <ol className="grid gap-4 md:grid-cols-5">
            {l.process.map((step, i) => (
              <li key={step.title}>
                <Card className="h-full gap-3 py-5">
                  <CardHeader className="px-5">
                    <span className="mb-1 flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground tabular-nums">
                      {i + 1}
                    </span>
                    <CardTitle className="text-sm">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-5">
                    <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{step.body}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mt-4">
            <SourceLink href={l.processSource.href} label={l.processSource.label} className="text-left" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-6 lg:grid-cols-2">
          {secretariat && (
            <Card className="gap-4">
              <CardHeader>
                <CardTitle>{l.contactTitle}</CardTitle>
                <CardDescription className="text-pretty">{l.contactDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-semibold">{secretariat.name}</p>
                <p className="text-muted-foreground">{secretariat.address}</p>
                <p className="flex items-start gap-1.5">
                  <PhoneIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                  {secretariat.phone}
                </p>
              </CardContent>
            </Card>
          )}
          {councilServices.length > 0 && (
            <Card className="gap-4">
              <CardHeader>
                <CardTitle>{l.servicesTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {councilServices.map((s) => (
                    <li key={s.id}>
                      <Link
                        to="/services/$serviceId"
                        params={{ serviceId: s.id }}
                        className="inline-flex items-start gap-1.5 rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      >
                        <ArrowRightIcon className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </Container>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <Container>
          <SourcesNote note={l.checkedNote} sources={l.sources} />
        </Container>
      </Section>
    </>
  )
}
