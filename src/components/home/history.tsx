import { Link } from "@tanstack/react-router"
import { ArrowRightIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { HistoryTimeline } from "@/components/government/history-timeline"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { government } from "@/data/site"

export function History() {
  return (
    <Section id="history" tone="default">
      <Container>
        <SectionHeading
          eyebrow="Heritage"
          title="Brief History"
          description="A short timeline of facts published in the Municipality of Naguilian’s official history account."
        />
        <HistoryTimeline limit={3} />
        <div className="mx-auto mt-6 max-w-3xl">
          <Button asChild variant="outline">
            <Link to="/government/history">
              {government.teasers.history}
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
