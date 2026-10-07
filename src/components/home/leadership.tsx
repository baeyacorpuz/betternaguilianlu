import { ArrowUpRightIcon, CrownSimpleIcon, ShieldStarIcon } from "@phosphor-icons/react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, Section, SectionHeading, SourceLink } from "@/components/site/section"
import { leadership, links } from "@/data/site"

function initials(name: string) {
  return name
    .replace(/^Hon\.\s*/, "")
    .split(" ")
    .filter((p) => p.length > 2)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
}

export function Leadership() {
  return (
    <Section id="leadership">
      <Container>
        <SectionHeading
          eyebrow="Municipal leadership"
          title="Municipal Leadership"
          description="The current summary names the mayor and vice mayor listed on the official officials page."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {leadership.map((person, i) => {
            const RoleIcon = i === 0 ? CrownSimpleIcon : ShieldStarIcon
            return (
              <Card key={person.name}>
                <CardHeader className="grid-cols-[auto_1fr] items-center gap-x-4">
                  <Avatar className="row-span-2 size-14 border-2 border-accent">
                    <AvatarFallback className="bg-primary text-lg font-bold text-primary-foreground">
                      {initials(person.name)}
                    </AvatarFallback>
                  </Avatar>
                  <Badge variant="secondary" className="gap-1 text-[10px] font-semibold tracking-wider uppercase">
                    <RoleIcon weight="fill" />
                    {person.role}
                  </Badge>
                  <div>
                    <CardTitle className="text-lg">{person.name}</CardTitle>
                    <CardDescription>{person.title}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent />
                <CardFooter className="border-t [.border-t]:pt-4">
                  <SourceLink href={links.officials} />
                </CardFooter>
              </Card>
            )
          })}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="outline">
            <a href={links.officials}>
              View full officials listing
              <ArrowUpRightIcon />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">Leadership source: Municipal officials listing</p>
        </div>
      </Container>
    </Section>
  )
}
