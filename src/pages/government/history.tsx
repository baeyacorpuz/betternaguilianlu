import { CompassIcon, FlagIcon } from "@phosphor-icons/react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HistoryTimeline } from "@/components/government/history-timeline"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { mission, vision } from "@/data/charter"
import { government } from "@/data/site"
import { GovernmentIntro } from "@/pages/government/layout"

export function HistoryPage() {
  const copy = government.history
  const vm = copy.visionMission

  return (
    <>
      <GovernmentIntro title={copy.title} description={copy.description} />

      <Section className="pt-10 sm:pt-12">
        <Container>
          <h2 className="sr-only">{copy.timeline}</h2>
          <HistoryTimeline />
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow={vm.eyebrow} title={vm.title} />
          <div className="grid gap-4 lg:grid-cols-2">
            {[
              { title: vm.vision, text: vision, icon: CompassIcon },
              { title: vm.mission, text: mission, icon: FlagIcon },
            ].map((item) => (
              <Card key={item.title} className="gap-4">
                <CardHeader>
                  <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <CardTitle className="text-base">
                    <h3>{item.title}</h3>
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-pretty">{item.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
