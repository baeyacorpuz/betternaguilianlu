import { CurrencyNotice } from "@/components/government/currency-notice"
import { UnitHeadCard } from "@/components/government/unit-head-card"
import { Container, Section } from "@/components/site/section"
import { unitHeads } from "@/data/government"
import { government } from "@/data/site"
import { GovernmentIntro } from "@/pages/government/layout"

const sorted = [...unitHeads].sort((a, b) => a.unit.localeCompare(b.unit))

export function OfficialsPage() {
  const copy = government.officials

  return (
    <>
      <GovernmentIntro title={copy.title} description={copy.description}>
        <CurrencyNotice />
      </GovernmentIntro>

      <Section className="pt-10 sm:pt-12">
        <Container>
          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sorted.map((entry) => (
              <li key={entry.id}>
                <UnitHeadCard entry={entry} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  )
}
