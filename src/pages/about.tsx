import { Link } from "@tanstack/react-router"
import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon, EnvelopeSimpleIcon, HandshakeIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, Section, SectionHeading, SourceLink } from "@/components/site/section"
import { about, links, volunteerEmail } from "@/data/site"

export function AboutPage() {
  const { intro, independence, sources, principles, involve } = about

  return (
    <>
      <section className="bg-muted/60">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="space-y-5">
            <Badge variant="secondary" className="rounded-full px-2.5 text-[11px] font-semibold tracking-wider uppercase">
              {intro.eyebrow}
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">{intro.title}</h1>
            <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {intro.mission}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/services">
                  {intro.primaryLabel}
                  <ArrowRightIcon />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about" hash="get-involved">
                  {intro.secondaryLabel}
                  <ArrowDownIcon />
                </Link>
              </Button>
            </div>
          </div>

          <Card role="note" aria-labelledby="independence-title" className="gap-4">
            <CardHeader className="grid-cols-[auto_1fr] gap-x-3">
              <span className="row-span-2 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <HandshakeIcon className="size-5" />
              </span>
              <CardTitle id="independence-title" className="text-lg">
                {independence.title}
              </CardTitle>
              <CardDescription className="text-xs font-medium">{independence.tagline}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{independence.body}</p>
            </CardContent>
            <CardFooter className="border-t [.border-t]:pt-4">
              <a
                href={links.officialSite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                {independence.officialLabel}
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            </CardFooter>
          </Card>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading eyebrow={sources.eyebrow} title={sources.title} description={sources.description} />
          <ol className="grid gap-4 lg:grid-cols-3">
            {sources.steps.map((step, i) => (
              <li key={step.title}>
                <Card className="h-full gap-4">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                        <step.icon className="size-5" />
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">Step {i + 1}</span>
                    </div>
                    <CardTitle className="text-base">
                      <h3>{step.title}</h3>
                    </CardTitle>
                    <CardDescription className="leading-relaxed">{step.description}</CardDescription>
                  </CardHeader>
                  {step.sources && (
                    <CardFooter className="mt-auto flex-wrap gap-x-4 gap-y-2 border-t [.border-t]:pt-4">
                      {step.sources.map((source) => (
                        <SourceLink key={source.label} href={source.href} label={source.label} />
                      ))}
                    </CardFooter>
                  )}
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow={principles.eyebrow} title={principles.title} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.items.map((item) => (
              <li key={item.title}>
                <Card className="h-full gap-4">
                  <CardHeader>
                    <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <item.icon className="size-5" />
                    </span>
                    <CardTitle className="text-base">
                      <h3>{item.title}</h3>
                    </CardTitle>
                    <CardDescription className="leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="get-involved">
        <Container>
          <div className="relative overflow-hidden rounded-xl bg-brand p-6 text-brand-foreground sm:p-10">
            <svg
              aria-hidden
              className="pointer-events-none absolute -right-32 -bottom-48 size-[480px] text-brand-muted/15"
              viewBox="0 0 400 400"
              fill="none"
              stroke="currentColor"
            >
              {Array.from({ length: 7 }, (_, i) => (
                <circle key={i} cx="200" cy="200" r={60 + i * 20} strokeWidth="1" />
              ))}
            </svg>
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
              <div>
                <SectionHeading invert eyebrow={involve.eyebrow} title={involve.title} className="mb-4 md:block" />
                <p className="max-w-md text-sm leading-relaxed text-pretty text-brand-foreground/80">
                  {involve.description}
                </p>
                <p className="mt-3 max-w-md text-xs text-brand-foreground/70">
                  {involve.emailNote}{" "}
                  <a
                    href={`mailto:${volunteerEmail}`}
                    className="rounded-sm font-semibold wrap-break-word text-brand-foreground underline underline-offset-4 outline-none focus-visible:ring-[3px] focus-visible:ring-white/50"
                  >
                    {volunteerEmail}
                  </a>
                  .
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {involve.actions.map((action) => {
                  const isEmail = action.href.startsWith("mailto:")
                  const TrailingIcon = isEmail ? EnvelopeSimpleIcon : ArrowUpRightIcon
                  return (
                    <li key={action.title}>
                      <a
                        href={action.href}
                        target={isEmail ? undefined : "_blank"}
                        rel="noreferrer"
                        className="group flex h-full flex-col gap-3 rounded-md border border-white/15 bg-white/5 p-5 transition-colors outline-none hover:bg-white/10 focus-visible:ring-[3px] focus-visible:ring-white/50"
                      >
                        <span className="flex items-center justify-between">
                          <span className="flex size-10 items-center justify-center rounded-lg bg-white/10">
                            <action.icon className="size-5" />
                          </span>
                          <TrailingIcon className="size-4 text-brand-foreground/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-foreground" />
                        </span>
                        <span className="text-base font-semibold">{action.title}</span>
                        <span className="text-sm leading-relaxed text-brand-foreground/80">{action.description}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
