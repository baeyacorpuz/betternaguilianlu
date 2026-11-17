import { Badge } from "@/components/ui/badge"
import { Container, PageHero, Section, SourceLink } from "@/components/site/section"
import { updateKindLabels, updates, updatesPage, type UpdateEntry, type UpdateKind } from "@/data/updates"
import { appBuild } from "@/lib/app-build"
import { formatIsoDate, formatIsoMonth } from "@/lib/dates"
import { useDocumentTitle } from "@/hooks/use-document-title"

const kindVariant: Record<UpdateKind, "default" | "secondary" | "outline"> = {
  data: "secondary",
  feature: "default",
  fix: "outline",
}

type MonthGroup = { key: string; label: string; entries: UpdateEntry[] }

// entries arrive newest first, so each month is a run of neighbouring entries
function groupByMonth(entries: UpdateEntry[]): MonthGroup[] {
  const groups: MonthGroup[] = []
  for (const entry of entries) {
    const key = entry.date.slice(0, 7)
    const last = groups[groups.length - 1]
    if (last?.key === key) last.entries.push(entry)
    else groups.push({ key, label: formatIsoMonth(entry.date), entries: [entry] })
  }
  return groups
}

export function UpdatesPage() {
  useDocumentTitle(updatesPage.title)
  const sorted = [...updates].sort((a, b) => b.date.localeCompare(a.date))
  const groups = groupByMonth(sorted)

  return (
    <>
      <PageHero eyebrow={updatesPage.eyebrow} title={updatesPage.title} description={updatesPage.description}>
        <p className="text-sm text-muted-foreground">
          {updatesPage.current}:{" "}
          <span className="font-semibold text-foreground">
            v{appBuild.version}
          </span>{" "}
          · {updatesPage.updated} {formatIsoDate(appBuild.date)}
        </p>
      </PageHero>

      <Section>
        <Container className="max-w-3xl">
          {groups.map((group) => (
            <section key={group.key} aria-labelledby={`month-${group.key}`} className="mb-12 last:mb-0">
              <h2 id={`month-${group.key}`} className="mb-5 text-xl font-bold tracking-tight">
                {group.label}
              </h2>
              <ol className="space-y-4">
                {group.entries.map((entry) => (
                  <li key={`${entry.date}-${entry.title}`} className="rounded-xl border bg-card p-5 shadow-xs">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <time dateTime={entry.date} className="font-medium">
                        {formatIsoDate(entry.date)}
                      </time>
                      <Badge variant={kindVariant[entry.kind]} className="rounded-full px-2.5 text-[11px] font-semibold tracking-wider uppercase">
                        {updateKindLabels[entry.kind]}
                      </Badge>
                      <span>{entry.area}</span>
                      {entry.version && <span>v{entry.version}</span>}
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-pretty">{entry.title}</h3>
                    {entry.details && (
                      <p className="mt-1 text-sm leading-relaxed text-pretty text-muted-foreground">{entry.details}</p>
                    )}
                    {entry.source && (
                      <div className="mt-3">
                        <SourceLink href={entry.source.href} label={entry.source.label} />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </Container>
      </Section>
    </>
  )
}
