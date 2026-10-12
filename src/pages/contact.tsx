import { Link } from "@tanstack/react-router"
import { ArrowRightIcon, ArrowUpRightIcon, BuildingsIcon, EnvelopeSimpleIcon, GlobeHemisphereEastIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { contact, contactPage } from "@/data/site"

const linkClass =
  "inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"

export function ContactPage() {
  const { intro, municipalHall, ways, community } = contactPage

  return (
    <>
      <section className="bg-muted/60">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="space-y-5">
            <Badge variant="secondary" className="rounded-full px-2.5 text-[11px] font-semibold tracking-wider uppercase">
              {intro.eyebrow}
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">{intro.title}</h1>
            <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">{intro.body}</p>
          </div>

          <Card role="note" aria-labelledby="municipal-hall-title" className="gap-4">
            <CardHeader className="grid-cols-[auto_1fr] gap-x-3">
              <span className="row-span-2 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <BuildingsIcon className="size-5" />
              </span>
              <CardTitle id="municipal-hall-title" className="text-lg">
                {municipalHall.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">{municipalHall.body}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1.5 text-sm">
              <a href={`tel:${contact.phoneDialable}`} className={linkClass}>
                {contact.phone}
              </a>
              {contact.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className={`${linkClass} flex wrap-break-word`}>
                  {email}
                </a>
              ))}
            </CardContent>
            <CardFooter className="border-t [.border-t]:pt-4">
              <Link to="/" hash="contact" className={linkClass}>
                {municipalHall.linkLabel}
                <ArrowRightIcon className="size-3.5" />
              </Link>
            </CardFooter>
          </Card>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading eyebrow={ways.eyebrow} title={ways.title} description={ways.description} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ways.items.map((item) => {
              const isEmail = item.href.startsWith("mailto:")
              const TrailingIcon = isEmail ? EnvelopeSimpleIcon : ArrowUpRightIcon
              return (
                <li key={item.title}>
                  <a
                    href={item.href}
                    target={isEmail ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group block h-full rounded-xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <Card className="h-full gap-4 transition-all group-hover:border-ring/50 group-hover:shadow-md">
                      <CardHeader>
                        <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                          <item.icon className="size-5" />
                        </span>
                        <CardTitle className="text-base">
                          <h3>{item.title}</h3>
                        </CardTitle>
                        <CardDescription className="leading-relaxed">{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="mt-auto">
                        <span className="inline-flex min-w-0 items-center gap-1 text-sm font-semibold text-primary">
                          <span className="wrap-break-word">{item.cta}</span>
                          <TrailingIcon className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </CardFooter>
                    </Card>
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <Section id="community" tone="muted">
        <Container>
          <SectionHeading eyebrow={community.eyebrow} title={community.title} description={community.description} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {community.sites.map((site) => (
              <li key={site.name}>
                <a
                  href={site.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full rounded-xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <Card className="h-full flex-row items-start gap-4 px-5 py-5 transition-all group-hover:border-ring/50 group-hover:shadow-md">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <GlobeHemisphereEastIcon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1 space-y-1">
                      <p className="flex items-center justify-between gap-2">
                        <span className="text-base font-semibold">{site.name}</span>
                        <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                      </p>
                      <p className="text-xs font-medium text-muted-foreground">{site.place}</p>
                      <p className="pt-1 text-sm leading-relaxed text-muted-foreground">{site.description}</p>
                    </div>
                  </Card>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            {community.suggest}{" "}
            <a href={community.suggestHref} className={linkClass}>
              {community.suggestLabel}
              <EnvelopeSimpleIcon className="size-3.5" />
            </a>
          </p>
        </Container>
      </Section>
    </>
  )
}
