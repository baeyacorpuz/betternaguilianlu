import { municipality, weatherApi, weatherConditions, weatherCopy, type WeatherKind } from "@/data/site"

export type WeatherData = {
  /** When the model data was observed (epoch ms). */
  observedAt: number
  current: {
    temperature: number
    apparent: number | null
    humidity: number | null
    precipitation: number | null
    code: number
    windSpeed: number | null
    windDirection: number | null
    isDay: boolean
    uv: number | null
  }
  today: {
    max: number | null
    min: number | null
    rainChance: number | null
    rainSum: number | null
    uvMax: number | null
  }
}

export function buildForecastUrl() {
  const { lat, lng } = municipality.coordinates
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    timezone: weatherApi.timezone,
    current: weatherApi.current.join(","),
    daily: weatherApi.daily.join(","),
    forecast_days: String(weatherApi.forecastDays),
    wind_speed_unit: "kmh",
    temperature_unit: "celsius",
    precipitation_unit: "mm",
  })
  return `${weatherApi.endpoint}?${params.toString()}`
}

type Json = Record<string, unknown>

function isRecord(value: unknown): value is Json {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function num(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null
}

function series(source: unknown, key: string): unknown[] {
  if (!isRecord(source)) return []
  const value = source[key]
  return Array.isArray(value) ? value : []
}

// Open-Meteo returns local times without an offset ("2026-10-10T15:00") for the requested timezone.
// Asia/Manila is UTC+8 all year.
function parseManila(value: unknown): number {
  if (typeof value !== "string") return Number.NaN
  return new Date(`${value}:00+08:00`).getTime()
}

/** Validates the response and returns a trimmed, typed forecast. Throws on an unusable payload. */
export function parseForecast(json: unknown): WeatherData {
  if (!isRecord(json) || !isRecord(json.current)) throw new Error("Unexpected forecast response")
  const c = json.current
  const observedAt = parseManila(c.time)
  const temperature = num(c.temperature_2m)
  const code = num(c.weather_code)
  if (Number.isNaN(observedAt) || temperature === null || code === null) throw new Error("Incomplete forecast response")

  const daily = json.daily
  return {
    observedAt,
    current: {
      temperature,
      apparent: num(c.apparent_temperature),
      humidity: num(c.relative_humidity_2m),
      precipitation: num(c.precipitation),
      code,
      windSpeed: num(c.wind_speed_10m),
      windDirection: num(c.wind_direction_10m),
      isDay: c.is_day !== 0,
      uv: num(c.uv_index),
    },
    today: {
      max: num(series(daily, "temperature_2m_max")[0]),
      min: num(series(daily, "temperature_2m_min")[0]),
      rainChance: num(series(daily, "precipitation_probability_max")[0]),
      rainSum: num(series(daily, "precipitation_sum")[0]),
      uvMax: num(series(daily, "uv_index_max")[0]),
    },
  }
}

export function describeCode(code: number | null): { label: string; kind: WeatherKind } {
  const known = code === null ? undefined : weatherConditions[code]
  return known ?? { label: weatherCopy.unknownCondition, kind: "cloudy" }
}
