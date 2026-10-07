import { BuildingsIcon, MapTrifoldIcon, MedalIcon, UsersThreeIcon } from "@phosphor-icons/react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Container, Section, SectionHeading, SourceLink } from "@/components/site/section"
import { stats } from "@/data/site"

const icons = [UsersThreeIcon, BuildingsIcon, MedalIcon, MapTrifoldIcon]

export function AtAGlance() {
  return (
    <Section id="glance" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="Statistics"
          title="Naguilian at a glance"
          description="Key figures from the municipality’s official demographic, economic, and physical environment pages."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = icons[i]
            return (
              <Card key={stat.label} className="gap-3">
                <CardHeader className="flex flex-row items-center gap-2 text-muted-foreground">
                  <Icon className="size-4 text-primary" />
                  <span className="text-xs font-medium">{stat.label}</span>
                </CardHeader>
                <CardContent className="space-y-1">
                  <p className="text-3xl font-extrabold tracking-tight tabular-nums">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.note}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <SourceLink href={stat.source} />
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
