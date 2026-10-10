import * as React from "react"
import { ArrowDownIcon, ArrowUpIcon, MoonIcon, SunHorizonIcon, SunIcon } from "@phosphor-icons/react"
import * as SunCalc from "suncalc"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, Section, SectionHeading, SourceLink } from "@/components/site/section"
import { links, municipality, sunTimes as copy } from "@/data/site"

const TIME_ZONE = "Asia/Manila"
const UTC_OFFSET_MINUTES = 480 // Asia/Manila is UTC+8 with no daylight saving
const MINUTE = 60_000

const timeFormat = new Intl.DateTimeFormat("en-PH", { timeZone: TIME_ZONE, hour: "2-digit", minute: "2-digit", hour12: true })
const dayFormat = new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit" })

function isValid(date: Date | null | undefined): date is Date {
  return date instanceof Date && !Number.isNaN(date.getTime())
}

function formatTime(date: Date | null | undefined) {
  return isValid(date) ? timeFormat.format(date) : copy.empty
}

// Splits "05:42 am" into a large clock and a small day period for display
function timeParts(date: Date | null | undefined) {
  if (!isValid(date)) return { clock: copy.empty, period: "" }
  const parts = timeFormat.formatToParts(date)
  const period = parts.find((part) => part.type === "dayPeriod")?.value ?? ""
  const clock = parts
    .filter((part) => part.type !== "dayPeriod")
    .map((part) => part.value)
    .join("")
    .trim()
  return { clock, period }
}

function formatDuration(ms: number) {
  if (!Number.isFinite(ms) || ms <= 0) return copy.empty
  const minutes = Math.round(ms / MINUTE)
  return `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, "0")} min`
}

function moonPhaseName(phase: number) {
  return copy.moonPhases[Math.round(phase * 8) % 8]
}

function compass(azimuth: number) {
  return copy.compass[Math.round(azimuth / 45) % 8]
}

function compute(now: Date) {
  const { lat, lng } = municipality.coordinates
  // "today" is the calendar date in Manila, regardless of the visitor's timezone
  const ymd = dayFormat.format(now)
  const dayStart = new Date(`${ymd}T00:00:00+08:00`)
  const dayEnd = new Date(dayStart.getTime() + 24 * 60 * MINUTE)
  const noon = new Date(dayStart.getTime() + 12 * 60 * MINUTE)

  const times = SunCalc.getTimes(noon, lat, lng, 0, UTC_OFFSET_MINUTES)
  const position = SunCalc.getPosition(now, lat, lng)
  const moon = SunCalc.getMoonIllumination(now)
  const moonTimes = SunCalc.getMoonTimes(noon, lat, lng, UTC_OFFSET_MINUTES)

  const inDay = (d: Date | null | undefined) => (isValid(d) && d >= dayStart && d < dayEnd ? d : undefined)

  return { times, position, moon, moonrise: inDay(moonTimes.rise), moonset: inDay(moonTimes.set) }
}

/* ---------------------------------------------------------------- Sun arc */

const ARC = { cx: 200, horizon: 150, rx: 170, ry: 120 }
const ARC_PATH = `M ${ARC.cx - ARC.rx} ${ARC.horizon} A ${ARC.rx} ${ARC.ry} 0 0 1 ${ARC.cx + ARC.rx} ${ARC.horizon}`

function SunArc({ progress, isUp, label }: { progress: number; isUp: boolean; label: string }) {
  const angle = Math.PI * progress
  const x = ARC.cx - ARC.rx * Math.cos(angle)
  const y = ARC.horizon - ARC.ry * Math.sin(angle)
  const beforeSunrise = progress <= 0
  const endX = beforeSunrise ? ARC.cx - ARC.rx : ARC.cx + ARC.rx

  return (
    <svg viewBox="0 0 400 170" role="img" aria-label={label} className="h-auto w-full">
      {/* sky under the arc */}
      <path d={`${ARC_PATH} Z`} className="fill-accent/50" />
      {/* the path the sun has yet to travel */}
      <path d={ARC_PATH} fill="none" strokeWidth={2} strokeLinecap="round" strokeDasharray="2 8" className="stroke-muted-foreground/60" />
      {/* the path already travelled */}
      <path
        d={ARC_PATH}
        pathLength={100}
        fill="none"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={`${progress * 100} 100`}
        className="stroke-chart-5"
      />
      {/* horizon */}
      <line x1={12} x2={388} y1={ARC.horizon} y2={ARC.horizon} strokeWidth={1.5} className="stroke-muted-foreground/60" />
      <circle cx={ARC.cx - ARC.rx} cy={ARC.horizon} r={4.5} strokeWidth={2} className="fill-card stroke-muted-foreground" />
      <circle cx={ARC.cx + ARC.rx} cy={ARC.horizon} r={4.5} strokeWidth={2} className="fill-card stroke-muted-foreground" />
      {isUp ? (
        <g>
          <circle cx={x} cy={y} r={22} className="fill-chart-5/15" />
          <circle cx={x} cy={y} r={11} strokeWidth={3} className="fill-chart-5 stroke-card" />
        </g>
      ) : (
        // Night: a hollow marker waits at the horizon where the sun last set or will next rise
        <circle cx={endX} cy={ARC.horizon} r={9} strokeWidth={2.5} className="fill-card stroke-muted-foreground" />
      )}
    </svg>
  )
}

function TimeBlock({ label, date, align, icon: Icon }: { label: string; date: Date | null | undefined; align: "left" | "right"; icon: typeof ArrowUpIcon }) {
  const { clock, period } = timeParts(date)
  return (
    <div className={cn("min-w-0", align === "right" && "text-right")}>
      <p className={cn("flex items-center gap-1.5 text-xs font-medium text-muted-foreground", align === "right" && "justify-end")}>
        <Icon className="size-3.5 text-chart-5" aria-hidden="true" />
        {label}
      </p>
      <p className="mt-1 text-2xl font-extrabold tracking-tight tabular-nums sm:text-3xl">
        {clock}
        {period && <span className="ml-1 text-sm font-semibold text-muted-foreground uppercase">{period}</span>}
      </p>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 px-3 first:pl-0 last:pr-0">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 text-sm font-semibold tabular-nums">{value}</dd>
    </div>
  )
}

type TimelineItem = { label: string; value: string; dot: string }

function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">{title}</h4>
      <ol className="relative ml-1.5 space-y-3 border-l border-border pl-5">
        {items.map((item) => (
          <li key={item.label} className="relative flex items-baseline justify-between gap-3">
            <span aria-hidden="true" className={cn("absolute top-1.5 -left-[25px] size-2.5 rounded-full ring-4 ring-card", item.dot)} />
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <span className="shrink-0 text-sm font-semibold whitespace-nowrap tabular-nums">{item.value}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* -------------------------------------------------------------- Moon phase */

const MOON = { c: 80, r: 58 }
const STARS = [
  { x: 18, y: 26, r: 1.6 },
  { x: 140, y: 20, r: 1.2 },
  { x: 148, y: 98, r: 1.8 },
  { x: 24, y: 120, r: 1.2 },
  { x: 120, y: 144, r: 1.4 },
  { x: 52, y: 10, r: 1 },
]

// Lit area as one path: the limb on the lit side plus the terminator ellipse.
// Northern-hemisphere view: the right side is lit while waxing, the left while waning.
function moonLitPath(phase: number) {
  const { c, r } = MOON
  const waxing = phase < 0.5
  const k = Math.cos(phase * 2 * Math.PI) // +1 new, -1 full
  const rx = r * Math.abs(k)
  const limbSweep = waxing ? 1 : 0
  const terminatorSweep = waxing ? (k > 0 ? 0 : 1) : k > 0 ? 1 : 0
  return `M ${c} ${c - r} A ${r} ${r} 0 0 ${limbSweep} ${c} ${c + r} A ${rx} ${r} 0 0 ${terminatorSweep} ${c} ${c - r} Z`
}

function MoonPhase({ phase, label }: { phase: number; label: string }) {
  return (
    <svg viewBox="0 0 160 160" role="img" aria-label={label} className="size-36 sm:size-40">
      {STARS.map((star) => (
        <circle key={`${star.x}-${star.y}`} cx={star.x} cy={star.y} r={star.r} className="fill-brand-foreground/50" />
      ))}
      <circle cx={MOON.c} cy={MOON.c} r={MOON.r + 10} className="fill-brand-muted/15" />
      <circle cx={MOON.c} cy={MOON.c} r={MOON.r} className="fill-white/10 stroke-white/30" strokeWidth={1} />
      <path d={moonLitPath(phase)} className="fill-brand-foreground" />
    </svg>
  )
}

function RiseSet({ label, date, icon: Icon }: { label: string; date: Date | null | undefined; icon: typeof ArrowUpIcon }) {
  const { clock, period } = timeParts(date)
  return (
    <div className="rounded-lg border bg-background p-3">
      <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <Icon className="size-3.5 text-primary" aria-hidden="true" />
        {label}
      </p>
      <p className="mt-1 text-xl font-extrabold tracking-tight tabular-nums">
        {clock}
        {period && <span className="ml-1 text-xs font-semibold text-muted-foreground uppercase">{period}</span>}
      </p>
    </div>
  )
}

/* -------------------------------------------------------------------- Page */

export function SunTimes() {
  const [now, setNow] = React.useState(() => new Date())

  React.useEffect(() => {
    const refresh = () => setNow(new Date())
    const onVisible = () => {
      if (document.visibilityState === "visible") refresh()
    }
    const id = window.setInterval(refresh, MINUTE)
    document.addEventListener("visibilitychange", onVisible)
    return () => {
      window.clearInterval(id)
      document.removeEventListener("visibilitychange", onVisible)
    }
  }, [])

  const { times, position, moon, moonrise, moonset } = compute(now)
  const { sunrise, sunset } = times
  const daylight = isValid(sunrise) && isValid(sunset) ? sunset.getTime() - sunrise.getTime() : NaN

  let progress = 0
  let isUp = false
  let status: string = copy.progressBefore
  if (Number.isFinite(daylight) && isValid(sunrise)) {
    const raw = (now.getTime() - sunrise.getTime()) / daylight
    progress = Math.min(1, Math.max(0, raw))
    isUp = raw >= 0 && raw <= 1
    status = raw < 0 ? copy.progressBefore : raw > 1 ? copy.progressAfter : copy.progressDay
  }
  const percent = Math.round(progress * 100)
  const altitude = Number.isFinite(position.altitude) ? `${position.altitude.toFixed(1)}°` : copy.empty
  const azimuth = Number.isFinite(position.azimuth) ? `${Math.round(position.azimuth)}° ${compass(position.azimuth)}` : copy.empty
  const illumination = Number.isFinite(moon.fraction) ? `${Math.round(moon.fraction * 100)}%` : copy.empty
  const phaseName = moonPhaseName(moon.phase)

  const morning: TimelineItem[] = [
    { label: copy.items.nightEnd, value: formatTime(times.nightEnd), dot: "bg-chart-3" },
    { label: copy.items.nauticalDawn, value: formatTime(times.nauticalDawn), dot: "bg-chart-2" },
    { label: copy.items.dawn, value: formatTime(times.dawn), dot: "bg-primary" },
    { label: copy.items.goldenHourEnd, value: formatTime(times.goldenHourEnd), dot: "bg-chart-5" },
  ]
  const evening: TimelineItem[] = [
    { label: copy.items.goldenHour, value: formatTime(times.goldenHour), dot: "bg-chart-5" },
    { label: copy.items.dusk, value: formatTime(times.dusk), dot: "bg-primary" },
    { label: copy.items.nauticalDusk, value: formatTime(times.nauticalDusk), dot: "bg-chart-2" },
    { label: copy.items.night, value: formatTime(times.night), dot: "bg-chart-3" },
  ]

  return (
    <Section id="sun" tone="muted">
      <Container>
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <Card>
            <CardHeader>
              <div className="mb-2 flex items-start justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <SunIcon className="size-5" />
                </span>
                <Badge variant={isUp ? "default" : "secondary"} className="gap-1">
                  <SunHorizonIcon />
                  {isUp ? copy.aboveHorizon : copy.belowHorizon}
                </Badge>
              </div>
              <CardTitle className="text-xl">{copy.sunTitle}</CardTitle>
              <CardDescription className="leading-relaxed">{copy.sunDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="relative mx-auto max-w-xl">
                  <SunArc progress={progress} isUp={isUp} label={`${copy.progressLabel}: ${status}, ${percent}% ${copy.progressSuffix}`} />
                  <div className="pointer-events-none absolute inset-x-0 bottom-[16%] text-center">
                    <p className="text-xs font-medium text-muted-foreground">{copy.items.dayLength}</p>
                    <p className="text-base font-bold tabular-nums sm:text-xl">{formatDuration(daylight)}</p>
                  </div>
                </div>
                <div className="mx-auto mt-4 grid max-w-xl grid-cols-2 gap-4">
                  <TimeBlock label={copy.items.sunrise} date={sunrise} align="left" icon={ArrowUpIcon} />
                  <TimeBlock label={copy.items.sunset} date={sunset} align="right" icon={ArrowDownIcon} />
                </div>
              </div>

              <dl className="grid grid-cols-3 divide-x border-t pt-4">
                <Stat label={copy.items.solarNoon} value={formatTime(times.solarNoon)} />
                <Stat label={copy.altitude} value={altitude} />
                <Stat label={copy.azimuth} value={azimuth} />
              </dl>

              <div className="border-t pt-5">
                <h3 className="mb-4 text-sm font-semibold">{copy.timesTitle}</h3>
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
                  <Timeline title={copy.morning} items={morning} />
                  <Timeline title={copy.evening} items={evening} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:self-start">
            <CardHeader>
              <span className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <MoonIcon className="size-5" />
              </span>
              <CardTitle className="text-xl">{copy.moonTitle}</CardTitle>
              <CardDescription className="leading-relaxed">{copy.moonDescription}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-brand px-4 py-6 text-center text-brand-foreground">
                <MoonPhase phase={moon.phase} label={`${copy.moonArt}: ${phaseName}, ${illumination} ${copy.illumination.toLowerCase()}`} />
                <div>
                  <p className="text-xs font-medium text-brand-foreground/70">{copy.phase}</p>
                  <p className="text-xl font-bold text-balance">{phaseName}</p>
                </div>
                <p className="text-sm text-brand-foreground/80 tabular-nums">
                  <span className="text-2xl font-extrabold tracking-tight text-brand-foreground">{illumination}</span> {copy.illumination.toLowerCase()}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <RiseSet label={copy.items.moonrise} date={moonrise} icon={ArrowUpIcon} />
                <RiseSet label={copy.items.moonset} date={moonset} icon={ArrowDownIcon} />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex flex-col items-start gap-2">
          <p className="max-w-3xl text-xs leading-relaxed text-pretty text-muted-foreground">{copy.note}</p>
          <SourceLink href={links.pagasa} label={copy.sourceLabel} />
        </div>
      </Container>
    </Section>
  )
}
