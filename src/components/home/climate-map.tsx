import { ArrowUpRightIcon, CloudRainIcon, CloudSunIcon, MapPinIcon, SunIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Container, Section, SectionHeading, SourceLink } from "@/components/site/section"
import { climate, links, municipality } from "@/data/site"

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const seasonLabel = ["Dry season", "Wet season", "Peak rainfall"]

export function ClimateMap() {
  const { lat, lng } = municipality.coordinates
  const d = 0.012
  const embed = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d * 1.6},${lat - d},${lng + d * 1.6},${lat + d}&layer=mapnik&marker=${lat},${lng}`
  const full = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`

  return (
    <Section id="climate">
      <Container>
        <SectionHeading
          eyebrow="Place"
          title="Climate and map of Naguilian"
          description="Use this static climate summary for general planning and the map panel to locate the Municipal Hall."
        />
        <div className="grid gap-4 lg:grid-cols-[1fr_1.7fr]">
          <Card>
            <CardHeader>
              <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <CloudSunIcon className="size-5" />
              </span>
              <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">Static climate information</p>
              <CardTitle className="text-xl">{climate.type}</CardTitle>
              <CardDescription className="leading-relaxed">{climate.summary}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-12 gap-1">
                {climate.months.map((m, i) => (
                  <Tooltip key={monthNames[i]}>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center gap-1.5" tabIndex={0}>
                        <div
                          className={cn(
                            "w-full rounded-sm",
                            m === 0 && "bg-chart-4/50",
                            m === 1 && "bg-chart-2/60",
                            m === 2 && "bg-chart-1"
                          )}
                          style={{ height: `${[28, 48, 64][m]}px`, marginTop: `${64 - [28, 48, 64][m]}px` }}
                        />
                        <span className="text-[10px] text-muted-foreground">{monthNames[i][0]}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      {monthNames[i]} · {seasonLabel[m]}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><SunIcon className="size-3.5" /> Dry</span>
                <span className="inline-flex items-center gap-1.5"><CloudRainIcon className="size-3.5" /> Wet</span>
                <span className="inline-flex items-center gap-1.5"><span className="size-2.5 rounded-sm bg-chart-1" /> Peak rainfall</span>
              </div>
            </CardContent>
            <CardFooter className="mt-auto border-t [.border-t]:pt-4">
              <SourceLink href={links.climate} />
            </CardFooter>
          </Card>

          <Card className="gap-4">
            <CardHeader>
              <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">Municipal Hall map</p>
              <CardTitle className="text-lg">Municipal Hall map location</CardTitle>
              <CardDescription>The map is centered on the published Municipal Hall location.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="overflow-hidden rounded-lg border">
                <iframe
                  title="Map of Naguilian Municipal Hall"
                  src={embed}
                  loading="lazy"
                  className="block h-72 w-full sm:h-80"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" className="gap-1 font-mono">
                  <MapPinIcon weight="fill" className="text-primary" />
                  {lat.toFixed(4)}° N, {lng.toFixed(4)}° E
                </Badge>
                <span>Coordinates are approximate; verify the destination before traveling.</span>
              </div>
            </CardContent>
            <CardFooter className="justify-between border-t [.border-t]:pt-4">
              <SourceLink href={links.officialSite} />
              <Button asChild variant="outline" size="sm">
                <a href={full} target="_blank" rel="noreferrer">
                  Open map in a new tab
                  <ArrowUpRightIcon />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
