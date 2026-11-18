/** Formats an ISO date (yyyy-mm-dd) as "17 Nov 2026". Dates are read as UTC so they never shift a day. */
export function formatIsoDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`)
  )
}

/** Formats an ISO date (yyyy-mm-dd) as "November 2026". */
export function formatIsoMonth(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`)
  )
}
