import { ArrowUpRightIcon, CalendarBlankIcon, CloudRainIcon, MapPinIcon, MapTrifoldIcon, NavigationArrowIcon, SunIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Container, Section, SectionHeading, SourceLink } from "@/components/site/section"
import { WeatherToday } from "@/components/home/weather-today"
import { climate, climateCopy as copy, contact, links, mapLinks, municipality } from "@/data/site"

const monthFormat = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Manila", month: "numeric" })

// 0 = dry, 1 = wet, 2 = peak rainfall
const BAR_HEIGHT = [28, 48, 64] as const
const BAR_TONE = ["bg-chart-4/50", "bg-chart-2/60", "bg-chart-1"] as const
const SEASON_ICON = [SunIcon, CloudRainIcon, CloudRainIcon] as const

/** Groups the months of one season into runs such as "Nov–Apr", wrapping around the new year. */
function monthRanges(season: number) {
  const months = climate.months
  const n = months.length
  const inSeason = (i: number) => months[(i + n) % n] === season
  if (months.every((m) => m === season)) return copy.allYear

  const runs: string[] = []
  for (let i = 0; i < n; i++) {
    if (!inSeason(i) || inSeason(i - 1)) continue
    let end = i
    while (inSeason(end + 1)) end++
    const first = copy.monthsShort[i]
    const last = copy.monthsShort[end % n]
    runs.push(first === last ? first : `${first}–${last}`)
  }
  return runs.join(", ")
}

function ClimateCard() {
  const current = Number(monthFormat.format(new Date())) - 1
  const season = climate.months[current]
  const SeasonIcon = SEASON_ICON[season]

  return (
    <Card>
      <CardHeader>
        <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <CalendarBlankIcon className="size-5" aria-hidden="true" />
        </span>
        <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">{copy.cardKicker}</p>
        <CardTitle className="text-xl">{climate.type}</CardTitle>
        <CardDescription className="leading-relaxed">{climate.summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2.5 text-sm text-accent-foreground">
          <SeasonIcon className="size-4 shrink-0" aria-hidden="true" />
          <span>
            {copy.today}: <strong className="font-semibold">{copy.seasons[season].label}</strong> in {copy.monthsLong[current]}
          </span>
        </p>

        <ul aria-label={copy.stripLabel} className="grid grid-cols-12 gap-1 sm:gap-1.5">
          {climate.months.map((m, i) => {
            const isCurrent = i === current
            return (
              <li key={copy.monthsShort[i]} className="min-w-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      tabIndex={0}
                      role="img"
                      aria-label={`${copy.monthsLong[i]}: ${copy.seasons[m].label}${isCurrent ? ` (${copy.today.toLowerCase()})` : ""}`}
                      className="flex h-24 cursor-default flex-col items-center justify-end gap-1.5 rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      <div className={cn("w-full rounded-sm", BAR_TONE[m])} style={{ height: `${BAR_HEIGHT[m]}px` }} />
                      <span
                        className={cn(
                          "flex h-5 w-full items-center justify-center rounded-full text-xs",
                          isCurrent ? "bg-primary font-bold text-primary-foreground" : "font-medium text-muted-foreground"
                        )}
                      >
                        <span className="sm:hidden">{copy.monthsShort[i][0]}</span>
                        <span className="hidden sm:inline">{copy.monthsShort[i]}</span>
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {copy.monthsLong[i]} · {copy.seasons[m].label}
                  </TooltipContent>
                </Tooltip>
              </li>
            )
          })}
        </ul>

        <dl className="space-y-2 border-t pt-4 text-sm">
          {copy.seasons.map((s, i) => (
            <div key={s.label} className="flex items-center justify-between gap-3">
              <dt className="flex items-center gap-2 text-muted-foreground">
                <span aria-hidden="true" className={cn("size-3 shrink-0 rounded-sm", BAR_TONE[i])} />
                {s.label}
              </dt>
              <dd className="text-right font-semibold tabular-nums">{monthRanges(i)}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
      <CardFooter className="mt-auto border-t [.border-t]:pt-4">
        <SourceLink href={links.climate} label={copy.sourceLabel} />
      </CardFooter>
    </Card>
  )
}

function MapCard() {
  const { lat, lng } = municipality.coordinates
  const urls = mapLinks({ lat, lng })

  return (
    <Card className="gap-4">
      <CardHeader>
        <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <MapTrifoldIcon className="size-5" aria-hidden="true" />
        </span>
        <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">{copy.mapKicker}</p>
        <CardTitle className="text-xl">{copy.mapTitle}</CardTitle>
        <CardDescription className="flex items-start gap-1.5 leading-relaxed">
          <MapPinIcon weight="fill" className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          {contact.address}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <div className="min-h-64 flex-1 overflow-hidden rounded-lg border">
          <iframe
            title={copy.mapFrameTitle}
            src={urls.embed}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="block aspect-[4/3] h-full w-full sm:aspect-[16/9] lg:aspect-auto"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline" className="gap-1 font-mono">
            {lat.toFixed(4)}° N, {lng.toFixed(4)}° E
          </Badge>
          <span>{copy.mapNote}</span>
        </div>
      </CardContent>
      <CardFooter className="flex-wrap justify-between gap-3 border-t [.border-t]:pt-4">
        <SourceLink href={links.officialSite} />
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={urls.openStreetMap} target="_blank" rel="noreferrer">
              {copy.openMap}
              <ArrowUpRightIcon />
            </a>
          </Button>
          <Button asChild size="sm">
            <a href={urls.directions} target="_blank" rel="noreferrer">
              <NavigationArrowIcon weight="fill" />
              {copy.directions}
              <ArrowUpRightIcon />
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export function ClimateMap() {
  return (
    <Section id="climate" className="py-10 sm:py-12">
      <Container>
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} className="mb-6" />
        <div className="space-y-3">
          <WeatherToday />
          <div className="grid gap-4 lg:grid-cols-[1fr_1.7fr]">
            <ClimateCard />
            <MapCard />
          </div>
        </div>
      </Container>
    </Section>
  )
}
