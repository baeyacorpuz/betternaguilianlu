import { SourceNotice } from "@/components/government/source-notice"
import { BarangayCard } from "@/components/government/barangay-card"
import { Card, CardContent } from "@/components/ui/card"
import { Container, Section } from "@/components/site/section"
import { barangayMeta, barangays } from "@/data/government"
import { government } from "@/data/site"
import { GovernmentIntro } from "@/pages/government/layout"

const sum = (key: "population" | "households") => barangays.reduce((total, b) => total + b[key], 0)

export function BarangaysPage() {
  const copy = government.barangays
  const summary = [
    { label: copy.summary.barangays, value: barangays.length },
    { label: copy.summary.population, value: sum("population") },
    { label: copy.summary.households, value: sum("households") },
  ]

  return (
    <>
      <GovernmentIntro title={copy.title} description={copy.description}>
        <SourceNotice page="barangays" />
      </GovernmentIntro>

      <Section className="pt-10 sm:pt-12">
        <Container>
          <dl className="mb-8 grid gap-4 sm:grid-cols-3">
            {summary.map((item) => (
              <Card key={item.label} className="py-5">
                <CardContent className="px-5">
                  <dt className="text-xs font-medium text-muted-foreground">{item.label}</dt>
                  <dd className="mt-1 text-3xl font-extrabold tracking-tight tabular-nums">{item.value.toLocaleString("en-PH")}</dd>
                </CardContent>
              </Card>
            ))}
          </dl>
          <p className="mb-4 text-xs text-muted-foreground">{barangayMeta.census}</p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {barangays.map((barangay) => (
              <li key={barangay.id}>
                <BarangayCard barangay={barangay} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  )
}
