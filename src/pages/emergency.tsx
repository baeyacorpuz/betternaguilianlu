import { EnvelopeSimpleIcon, WifiSlashIcon } from "@phosphor-icons/react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { HotlineCard } from "@/components/civic/hotline-card"
import { Container, PageHero, Section, SourcesNote } from "@/components/site/section"
import { emergencyPage, hotlines } from "@/data/civic"
import { mailto } from "@/data/site"
import { useDocumentTitle } from "@/hooks/use-document-title"

export function EmergencyPage() {
  useDocumentTitle(emergencyPage.title)
  const [primary, ...local] = hotlines
  const report = mailto(
    "Report: wrong emergency hotline on Better Naguilian",
    "Hotline name:\n\nNumber shown:\n\nCorrect number and where you found it:\n"
  )

  return (
    <>
      <PageHero eyebrow={emergencyPage.eyebrow} title={emergencyPage.title} description={emergencyPage.description} />
      <Section className="pt-8 sm:pt-10">
        <Container className="space-y-6">
          <div className="max-w-xl">
            <HotlineCard hotline={primary} featured />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Local hotlines">
            {local.map((h) => (
              <li key={h.id}>
                <HotlineCard hotline={h} />
              </li>
            ))}
          </ul>
          <Alert>
            <WifiSlashIcon aria-hidden />
            <AlertDescription>{emergencyPage.offlineNote}</AlertDescription>
          </Alert>
          <SourcesNote note={emergencyPage.checkedNote} sources={[...new Map(hotlines.map((h) => [h.source.href, h.source])).values()]}
            title={emergencyPage.checkedTitle} />
          <Button asChild variant="outline">
            <a href={report}>
              <EnvelopeSimpleIcon />
              {emergencyPage.report}
            </a>
          </Button>
        </Container>
      </Section>
    </>
  )
}
