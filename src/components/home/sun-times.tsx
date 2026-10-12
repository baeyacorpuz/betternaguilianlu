import * as React from "react"
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react"
import * as SunCalc from "suncalc"

import { GlanceCard, GlanceFacts, GlanceLead, GlanceLink, GlanceNote } from "@/components/site/glance-card"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { links, municipality, sunTimes as copy } from "@/data/site"

const TIME_ZONE = "Asia/Manila"
const UTC_OFFSET_MINUTES = 480 // Asia/Manila is UTC+8 with no daylight saving
const MINUTE = 60_000

const timeFormat = new Intl.DateTimeFormat("en-PH", { timeZone: TIME_ZONE, hour: "numeric", minute: "2-digit", hour12: true })
const dayFormat = new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit" })

function isValid(date: Date | null | undefined): date is Date {
  return date instanceof Date && !Number.isNaN(date.getTime())
}

function formatTime(date: Date | null | undefined) {
  return isValid(date) ? timeFormat.format(date).toUpperCase() : copy.empty
}

function formatDuration(ms: number) {
  if (!Number.isFinite(ms) || ms <= 0) return copy.empty
  const minutes = Math.round(ms / MINUTE)
  return `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, "0")} min`
}

function formatCountdown(ms: number) {
  const minutes = Math.max(1, Math.round(ms / MINUTE))
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m} min`
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, "0")} min`
}

function moonPhaseName(phase: number) {
  return copy.moonPhases[Math.round(phase * 8) % 8]
}

function compute(now: Date) {
  const { lat, lng } = municipality.coordinates
  // "today" is the calendar date in Manila, regardless of the visitor's timezone
  const ymd = dayFormat.format(now)
  const dayStart = new Date(`${ymd}T00:00:00+08:00`)
  const dayEnd = new Date(dayStart.getTime() + 24 * 60 * MINUTE)
  const noon = new Date(dayStart.getTime() + 12 * 60 * MINUTE)

  const times = SunCalc.getTimes(noon, lat, lng, 0, UTC_OFFSET_MINUTES)
  const moon = SunCalc.getMoonIllumination(now)
  const moonTimes = SunCalc.getMoonTimes(noon, lat, lng, UTC_OFFSET_MINUTES)

  const inDay = (d: Date | null | undefined) => (isValid(d) && d >= dayStart && d < dayEnd ? d : undefined)

  const nextSunrise = SunCalc.getTimes(new Date(noon.getTime() + 24 * 60 * MINUTE), lat, lng, 0, UTC_OFFSET_MINUTES).sunrise

  return { times, nextSunrise, moon, moonrise: inDay(moonTimes.rise), moonset: inDay(moonTimes.set) }
}

/* -------------------------------------------------------------- Moon phase */

const MOON = { c: 80, r: 58 }

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

function MoonPhase({ phase }: { phase: number }) {
  return (
    <svg viewBox="16 16 128 128" aria-hidden="true" className="size-6">
      <circle cx={MOON.c} cy={MOON.c} r={MOON.r} className="fill-accent-foreground/15 stroke-accent-foreground" strokeWidth={6} />
      <path d={moonLitPath(phase)} className="fill-accent-foreground" />
    </svg>
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

  const { times, nextSunrise, moon, moonrise, moonset } = compute(now)
  const { sunrise, sunset } = times
  const daylight = isValid(sunrise) && isValid(sunset) ? sunset.getTime() - sunrise.getTime() : NaN
  const isUp = isValid(sunrise) && isValid(sunset) && now >= sunrise && now <= sunset

  const illumination = Number.isFinite(moon.fraction) ? `${Math.round(moon.fraction * 100)}%` : copy.empty
  const phaseName = moonPhaseName(moon.phase)

  // the next sun event: today's sunrise or sunset, otherwise tomorrow's sunrise
  let sunNext: { label: string; date: Date } | null = null
  if (isValid(sunrise) && now < sunrise) sunNext = { label: copy.nextSunrise, date: sunrise }
  else if (isValid(sunset) && now < sunset) sunNext = { label: copy.nextSunset, date: sunset }
  else if (isValid(nextSunrise)) sunNext = { label: copy.nextSunrise, date: nextSunrise }

  const SunGlyph = isUp ? SunIcon : MoonStarsIcon
  const sunFacts = [
    `${copy.sunrise} ${formatTime(sunrise)}`,
    `${copy.sunset} ${formatTime(sunset)}`,
    `${formatDuration(daylight)} ${copy.daylight}`,
  ]

  return (
    <Section id="sun" tone="muted" className="py-10 sm:py-12">
      <Container>
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} className="mb-6" />
        <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <GlanceCard
            role="region"
            aria-label={copy.sunTitle}
            icon={<SunGlyph />}
            lead={
              <GlanceLead
                value={sunNext ? formatTime(sunNext.date) : copy.empty}
                label={sunNext ? `${sunNext.label} ${formatCountdown(sunNext.date.getTime() - now.getTime())}` : copy.sunTitle}
              />
            }
          >
            <GlanceFacts facts={sunFacts} />
            <GlanceNote>
              {copy.solarNoon} {formatTime(times.solarNoon)} · {copy.goldenHourFrom} {formatTime(times.goldenHour)}
            </GlanceNote>
          </GlanceCard>

          <GlanceCard
            role="region"
            aria-label={copy.moonTitle}
            icon={<MoonPhase phase={moon.phase} />}
            lead={
              <GlanceLead
                value={
                  <>
                    {illumination}
                    <span className="sr-only"> {copy.illuminated}</span>
                  </>
                }
                label={phaseName}
              />
            }
          >
            <GlanceFacts facts={[`${copy.moonrise} ${formatTime(moonrise)}`, `${copy.moonset} ${formatTime(moonset)}`]} />
            <GlanceNote>
              {copy.calculatedWith}{" "}
              <GlanceLink href={links.sunCalc}>{copy.calculatorName}</GlanceLink> · {copy.notForecast}
            </GlanceNote>
          </GlanceCard>
        </div>
      </Container>
    </Section>
  )
}
