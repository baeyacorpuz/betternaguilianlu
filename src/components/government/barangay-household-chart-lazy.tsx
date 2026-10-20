import { Suspense, lazy } from "react"
import { government } from "@/data/site"
import { SourceLink } from "@/components/site/section"
import { barangayMeta } from "@/data/government"
import { links } from "@/data/site"

const BarangayHouseholdChartComponent = lazy(() =>
  import("./barangay-household-chart").then((m) => ({ default: m.BarangayHouseholdChart }))
)

function BarangayHouseholdChartSkeleton() {
  const copy = government.barangays.chart
  return (
    <figure className="mb-8 flex flex-col gap-4">
      <figcaption className="text-sm text-muted-foreground">
        {copy.caption}
      </figcaption>
      <div className="h-[360px] w-full rounded-xl border border-border bg-muted sm:h-[440px]" />
      <p className="text-xs text-muted-foreground">
        <SourceLink href={links.demographics} label={barangayMeta.census} />
      </p>
    </figure>
  )
}

export function BarangayHouseholdChartLazy() {
  return (
    <Suspense fallback={<BarangayHouseholdChartSkeleton />}>
      <BarangayHouseholdChartComponent />
    </Suspense>
  )
}
