import { Link } from "@tanstack/react-router"
import { ArrowRightIcon, CrownSimpleIcon, ShieldStarIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { PersonCard } from "@/components/government/person-card"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { government, leadership } from "@/data/site"

export function Leadership() {
  return (
    <Section id="leadership">
      <Container>
        <SectionHeading
          eyebrow="Municipal leadership"
          title="Municipal Leadership"
          description="The mayor and vice mayor as listed on the official municipal website. The full page also lists the Sangguniang Bayan."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {leadership.map(({ role, person }, i) => (
            <PersonCard key={person.name} person={person} role={role} icon={i === 0 ? CrownSimpleIcon : ShieldStarIcon} />
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="outline">
            <Link to="/government/leadership">
              {government.teasers.leadership}
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
