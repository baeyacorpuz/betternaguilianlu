import * as React from "react"
import {
  CloudFogIcon,
  CloudIcon,
  CloudLightningIcon,
  CloudMoonIcon,
  CloudRainIcon,
  CloudSlashIcon,
  CloudSnowIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  UmbrellaIcon,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { GlanceCard, GlanceFacts, GlanceLead, GlanceLink, GlanceNote } from "@/components/site/glance-card"
import { useWeather } from "@/hooks/use-weather"
import { links, weatherCopy as copy, type WeatherKind } from "@/data/site"
import { describeCode, type WeatherData } from "@/lib/weather"

const timeFormat = new Intl.DateTimeFormat("en-PH", { timeZone: "Asia/Manila", hour: "numeric", minute: "2-digit", hour12: true })

const CONDITION_ICONS: Record<WeatherKind, { day: PhosphorIcon; night: PhosphorIcon }> = {
  clear: { day: SunIcon, night: MoonIcon },
  partly: { day: CloudSunIcon, night: CloudMoonIcon },
  cloudy: { day: CloudIcon, night: CloudIcon },
  fog: { day: CloudFogIcon, night: CloudFogIcon },
  drizzle: { day: UmbrellaIcon, night: UmbrellaIcon },
  rain: { day: CloudRainIcon, night: CloudRainIcon },
  storm: { day: CloudLightningIcon, night: CloudLightningIcon },
  snow: { day: CloudSnowIcon, night: CloudSnowIcon },
}

const degrees = (value: number | null) => (value === null ? copy.empty : `${Math.round(value)}°`)

function Short({ short, long, value }: { short: string; long: string; value: number }) {
  return (
    <>
      <abbr title={long} className="no-underline">
        {short}
      </abbr>{" "}
      {degrees(value)}
    </>
  )
}

function Reading({ data, stale }: { data: WeatherData; stale: boolean }) {
  const { current, today } = data
  const condition = describeCode(current.code)
  const Glyph = CONDITION_ICONS[condition.kind][current.isDay ? "day" : "night"]

  const facts: React.ReactNode[] = []
  if (today.max !== null) facts.push(<Short short={copy.highShort} long={copy.high} value={today.max} />)
  if (today.min !== null) facts.push(<Short short={copy.lowShort} long={copy.low} value={today.min} />)
  if (current.apparent !== null) facts.push(`${copy.feelsLike} ${degrees(current.apparent)}`)
  if (current.humidity !== null) facts.push(`${Math.round(current.humidity)}% ${copy.humidity}`)

  return (
    <GlanceCard
      id="weather"
      role="region"
      aria-label={copy.title}
      icon={<Glyph />}
      lead={<GlanceLead value={`${Math.round(current.temperature)}°C`} label={condition.label} />}
    >
      <GlanceFacts facts={facts} />
      <GlanceNote>
        {copy.asOf}{" "}
        <time dateTime={new Date(data.observedAt).toISOString()} className="uppercase">
          {timeFormat.format(data.observedAt)}
        </time>{" "}
        {copy.timeZone}
        {stale && ` (${copy.staleNote})`} ·{" "}
        <GlanceLink href={links.openMeteo} title={copy.sourceTitle}>
          {copy.sourceLabel}
        </GlanceLink>
        <span className="sr-only">. {copy.disclaimer}</span>
      </GlanceNote>
    </GlanceCard>
  )
}

function WeatherSkeleton() {
  return (
    <GlanceCard
      id="weather"
      role="status"
      aria-live="polite"
      aria-busy="true"
      icon={null}
      lead={
        <div className="space-y-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-4 w-28" />
          <span className="sr-only">{copy.loading}</span>
        </div>
      }
    >
      <Skeleton className="h-5 w-full max-w-sm" />
      <Skeleton className="h-3 w-40" />
    </GlanceCard>
  )
}

function WeatherError({ onRetry }: { onRetry: () => void }) {
  return (
    <GlanceCard
      id="weather"
      role="alert"
      icon={<CloudSlashIcon />}
      lead={<p className="text-base leading-tight font-semibold text-balance">{copy.errorTitle}</p>}
    >
      <Button type="button" variant="link" size="sm" onClick={onRetry} className="h-auto px-0 py-0 text-sm underline">
        {copy.retry}
      </Button>
    </GlanceCard>
  )
}

export function WeatherToday() {
  const { status, data, stale, refetch } = useWeather()

  if (status === "error") return <WeatherError onRetry={refetch} />
  if (status === "ready" && data) return <Reading data={data} stale={stale} />
  return <WeatherSkeleton />
}
