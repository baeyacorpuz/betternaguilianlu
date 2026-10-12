import { CrownSimpleIcon, QuotesIcon, ShieldStarIcon } from "@phosphor-icons/react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SourceNotice } from "@/components/government/source-notice"
import { PersonCard } from "@/components/government/person-card"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { executive, messages, sangguniang } from "@/data/government"
import { government } from "@/data/site"
import { GovernmentIntro } from "@/pages/government/layout"

export function LeadershipPage() {
  const copy = government.leadership

  return (
    <>
      <GovernmentIntro title={copy.title} description={copy.description}>
        <SourceNotice page="leadership" />
      </GovernmentIntro>

      <Section className="pt-10 sm:pt-12">
        <Container>
          <h2 className="sr-only">{copy.executive}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <PersonCard person={executive.mayor} role="Mayor" icon={CrownSimpleIcon} />
            <PersonCard person={executive.viceMayor} role="Vice Mayor" icon={ShieldStarIcon} />
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow={copy.sb.eyebrow} title={copy.sb.title} description={copy.sb.description} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sangguniang.members.map((person) => (
              <li key={person.name}>
                <PersonCard person={person} size="sm" />
              </li>
            ))}
          </ul>
          <h3 className="mt-10 mb-4 text-lg font-semibold">{copy.sb.exOfficio}</h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sangguniang.exOfficio.map((person) => (
              <li key={person.name}>
                <PersonCard person={person} size="sm" heading="h4" />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow={copy.messages.eyebrow} title={copy.messages.title} description={copy.messages.description} />
          <div className="grid gap-4 lg:grid-cols-2">
            {messages.map((message) => (
              <Card key={message.author.name} className="gap-4">
                <CardHeader>
                  <QuotesIcon weight="fill" className="size-7 text-accent-foreground" aria-hidden />
                  <CardTitle className="text-lg">
                    <h3>{`${message.author.name}, ${message.author.position}`}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {message.headline && <p className="font-semibold text-foreground">“{message.headline}”</p>}
                  {message.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
