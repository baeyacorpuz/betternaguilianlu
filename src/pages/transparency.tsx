import { ArrowUpRightIcon, CheckCircleIcon, InfoIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, PageHero, Section, SectionHeading, SourceLink, SourcesNote } from "@/components/site/section"
import { offices } from "@/data/charter"
import { transparency } from "@/data/civic"
import { useDocumentTitle } from "@/hooks/use-document-title"

export function TransparencyPage() {
  useDocumentTitle(transparency.title)
  const t = transparency
  const recordOffices = t.officeIds.map((id) => offices.find((o) => o.id === id)).filter((o) => o !== undefined)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <Section className="pt-8 sm:pt-10">
        <Container className="space-y-6">
          <Card className="gap-5 lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-8">
            <CardHeader>
              <CardTitle className="text-xl">{t.disclosureTitle}</CardTitle>
              <CardDescription className="text-pretty">{t.disclosureDescription}</CardDescription>
              <ul className="mt-3 space-y-2">
                {t.disclosureItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircleIcon weight="fill" className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </CardHeader>
            <CardContent className="space-y-3 lg:pt-0">
              <p className="text-sm font-semibold">{t.postedAtLabel}</p>
              <ul className="space-y-2">
                {t.postedAt.map((place) => (
                  <li key={place} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPinIcon className="mt-0.5 size-4 shrink-0" aria-hidden />
                    {place}
                  </li>
                ))}
              </ul>
              <SourceLink href={t.disclosureSource.href} label={t.disclosureSource.label} className="text-left" />
            </CardContent>
          </Card>
          <Alert>
            <InfoIcon aria-hidden />
            <AlertDescription>{t.pending}</AlertDescription>
          </Alert>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow={t.recordsEyebrow} title={t.recordsTitle} description={t.recordsDescription} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.records.map((r) => (
              <li key={r.title}>
                <Card className="relative h-full gap-4 transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-base">{r.title}</CardTitle>
                    <CardDescription className="text-pretty">{r.body}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-primary underline-offset-4 outline-none after:absolute after:inset-0 after:rounded-xl hover:underline focus-visible:after:ring-[3px] focus-visible:after:ring-ring/50"
                    >
                      {r.cta}
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-6">
          <SectionHeading eyebrow={t.officesEyebrow} title={t.officesTitle} />
          <ul className="grid gap-4 md:grid-cols-3">
            {recordOffices.map((o) => (
              <li key={o.id}>
                <Card className="h-full gap-2 py-5">
                  <CardHeader className="px-5">
                    <CardTitle className="text-sm">{o.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1.5 px-5 text-xs text-muted-foreground">
                    <p className="flex items-start gap-1.5">
                      <MapPinIcon className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                      <span className="[overflow-wrap:anywhere]">{o.address}</span>
                    </p>
                    <p className="flex items-start gap-1.5">
                      <PhoneIcon className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                      <span className="[overflow-wrap:anywhere]">{o.phone}</span>
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
          <SourcesNote note={t.checkedNote} sources={t.sources} />
        </Container>
      </Section>
    </>
  )
}
