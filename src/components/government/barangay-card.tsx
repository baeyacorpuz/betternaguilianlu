import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { Barangay } from "@/data/government"
import { government } from "@/data/site"

const fmt = (n: number) => n.toLocaleString("en-PH")

export function BarangayCard({ barangay }: { barangay: Barangay }) {
  const copy = government.barangays
  const o = barangay.officials
  const officials = [
    o?.punongBarangay && { label: copy.officials.punongBarangay, names: [o.punongBarangay] },
    o?.kagawads?.length && { label: copy.officials.kagawads, names: o.kagawads },
    o?.skChairperson && { label: copy.officials.skChairperson, names: [o.skChairperson] },
    o?.secretary && { label: copy.officials.secretary, names: [o.secretary] },
    o?.treasurer && { label: copy.officials.treasurer, names: [o.treasurer] },
  ].filter((x): x is { label: string; names: string[] } => Boolean(x))

  return (
    <Card className="h-full gap-4">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="text-base leading-snug">
            <h2>{barangay.name}</h2>
          </CardTitle>
          {barangay.poblacion && (
            <Badge variant="secondary" className="rounded-full text-[10px] font-semibold tracking-wider uppercase">
              {copy.poblacion}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <dl className="grid grid-cols-3 gap-2 text-sm">
          {[
            [copy.population, barangay.population],
            [copy.households, barangay.households],
            [copy.families, barangay.families],
          ].map(([label, value]) => (
            <div key={label} className="min-w-0">
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="font-semibold tabular-nums">{fmt(value as number)}</dd>
            </div>
          ))}
        </dl>
        <Separator />
        {officials.length ? (
          <dl className="space-y-2 text-sm">
            {officials.map((row) => (
              <div key={row.label}>
                <dt className="text-xs text-muted-foreground">{row.label}</dt>
                {row.names.map((name) => (
                  <dd key={name}>{name}</dd>
                ))}
              </div>
            ))}
          </dl>
        ) : (
          <p className="text-xs text-muted-foreground">{copy.officials.pending}</p>
        )}
      </CardContent>
    </Card>
  )
}
