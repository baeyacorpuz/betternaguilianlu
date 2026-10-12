import { CrownSimpleIcon, GavelIcon, MapPinIcon, PhoneIcon, ShieldStarIcon, UsersThreeIcon } from "@phosphor-icons/react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, PageHero, Section, SectionHeading, SourceLink, SourcesNote } from "@/components/site/section"
import { offices } from "@/data/charter"
import { government, termLabel } from "@/data/civic"
import { links } from "@/data/site"
import { useDocumentTitle } from "@/hooks/use-document-title"

function initials(name: string) {
  return name
    .replace(/^Hon\.\s*/, "")
    .replace(/,.*$/, "")
    .split(" ")
    .filter((p) => p.length > 2 && !/^I+$/.test(p))
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
}

function PersonCard({ name, role, note, icon: Icon }: { name: string; role: string; note?: string; icon: typeof CrownSimpleIcon }) {
  return (
    <Card className="h-full gap-3">
      <CardHeader className="grid-cols-[auto_1fr] items-center gap-x-4">
        <Avatar className="row-span-2 size-12 border-2 border-accent">
          <AvatarFallback className="bg-primary font-bold text-primary-foreground">{initials(name)}</AvatarFallback>
        </Avatar>
        <Badge variant="secondary" className="gap-1 text-[10px] font-semibold tracking-wider uppercase">
          <Icon weight="fill" aria-hidden />
          {role}
        </Badge>
        <CardTitle className="text-lg [overflow-wrap:anywhere]">{name}</CardTitle>
      </CardHeader>
      {note && (
        <CardContent>
          <CardDescription className="text-pretty">{note}</CardDescription>
        </CardContent>
      )}
    </Card>
  )
}

export function GovernmentPage() {
  useDocumentTitle(government.title)
  const g = government
  return (
    <>
      <PageHero eyebrow={g.eyebrow} title={g.title} description={g.description} />

      <Section className="pt-8 sm:pt-10">
        <Container className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{termLabel}</Badge>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {g.executive.map((o, i) => (
              <li key={o.name}>
                <PersonCard {...o} icon={i === 0 ? CrownSimpleIcon : ShieldStarIcon} />
              </li>
            ))}
            <li>
              <PersonCard name={g.congress.name} role={g.congress.role} note={g.congress.note} icon={GavelIcon} />
            </li>
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow={g.councilTitle} title={g.councilHeading} description={g.councilDescription} />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {g.councilors.map((name) => (
              <li key={name}>
                <Card className="h-full flex-row items-center gap-3 px-4 py-4">
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-accent text-sm font-bold text-accent-foreground">{initials(name)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold [overflow-wrap:anywhere]">{name}</p>
                    <p className="text-xs text-muted-foreground">{g.councilorRole}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 mb-4 text-xl font-bold">{g.exOfficioTitle}</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {g.exOfficio.map((o) => (
              <li key={o.name}>
                <Card className="h-full flex-row items-center gap-3 px-4 py-4">
                  <UsersThreeIcon className="size-6 shrink-0 text-primary" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold [overflow-wrap:anywhere]">{o.name}</p>
                    <p className="text-xs text-muted-foreground">{o.role}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">{g.exOfficioNote}</p>
          <div className="mt-6">
            <SourceLink href={links.officials} label={g.rosterLink} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow={g.rolesEyebrow} title={g.rolesTitle} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {g.roles.map((r) => (
              <li key={r.title}>
                <Card className="h-full gap-2">
                  <CardHeader>
                    <CardTitle className="text-base">{r.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{r.body}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <SourceLink href={g.rolesSource.href} label={g.rolesSource.label} className="text-left" />
          </div>
        </Container>
      </Section>

      <Section tone="muted" id="offices">
        <Container>
          <SectionHeading eyebrow={g.officesEyebrow} title={g.officesTitle} description={g.officesDescription} />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
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
        </Container>
      </Section>

      <Section>
        <Container>
          <SourcesNote note={g.checkedNote} sources={g.sources} />
        </Container>
      </Section>
    </>
  )
}
