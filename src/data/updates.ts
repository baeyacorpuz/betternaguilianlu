/**
 * What changed: data corrections and site changes, newest first.
 *
 * Add an entry here whenever the data in this folder changes (hotlines, officials,
 * barangays, charter services, contact details) or a visible feature ships.
 * Keep titles factual and name the source when the change came from one.
 */

export type UpdateKind = "data" | "feature" | "fix"

export type UpdateEntry = {
  /** ISO date (yyyy-mm-dd) the change went live. */
  date: string
  /** App version that first shipped the change, when it was a release. */
  version?: string
  kind: UpdateKind
  title: string
  details?: string
  /** What part of the site changed, e.g. "Hotlines", "Citizen’s Charter", "Barangays", "Officials". */
  area: string
  source?: { label: string; href: string }
}

export const updateKindLabels: Record<UpdateKind, string> = {
  data: "Data",
  feature: "New feature",
  fix: "Fix",
}

export const updatesPage = {
  eyebrow: "Updates",
  title: "What changed",
  description:
    "A public record of data corrections and site changes, newest first. Each data change names its area and, where there is one, the source it was checked against.",
  current: "Current version",
  updated: "Updated",
  footerLink: "What changed",
}

export const updates: UpdateEntry[] = [
  {
    date: "2026-11-17",
    kind: "feature",
    title: "New logo",
    area: "Site",
  },
  {
    date: "2026-11-17",
    version: "1.0.0",
    kind: "feature",
    area: "Site",
    title: "Versioning, build info and this page added",
    details:
      "Each build now shows its version and build date in the footer, so a problem can be tied to the version that showed it.",
  },
  {
    date: "2026-10-20",
    kind: "feature",
    area: "Barangays",
    title: "Population vs households chart added to the barangays page",
    source: { label: "Municipality of Naguilian: Demographics", href: "https://naguilianlu.gov.ph/demographics" },
  },
  {
    date: "2026-10-20",
    kind: "feature",
    area: "Home",
    title: "Home page simplified",
    details: "The sun and moon times section and the map footer were removed from the home page.",
  },
  {
    date: "2026-10-13",
    kind: "feature",
    area: "Site",
    title: "First-visit welcome dialog added",
    details: "Shows once per browser session. “Don’t show again” keeps it hidden on later visits.",
  },
  {
    date: "2026-10-13",
    kind: "fix",
    area: "Services",
    title: "PDF caching, accuracy reports and page titles fixed after review",
  },
  {
    date: "2026-10-12",
    kind: "data",
    area: "Hotlines",
    title: "Emergency hotlines published, last checked 12 October 2026",
    details: "Hotlines that appear only on an agency’s Facebook page are labelled as such.",
    source: {
      label: "Provincial Government of La Union: emergency hotlines",
      href: "https://launion.gov.ph/la-union-emergency-hotlines/",
    },
  },
  {
    date: "2026-10-12",
    kind: "feature",
    area: "Services",
    title: "Accuracy feedback added to service pages",
    details: "Readers can mark a service as accurate or report a problem. Nothing is sent from the page itself.",
  },
  {
    date: "2026-10-12",
    kind: "feature",
    area: "Legislation",
    title: "Legislative and Transparency pages and a friendly 404 page added",
  },
  {
    date: "2026-10-10",
    kind: "fix",
    area: "Contact",
    title: "Volunteer contact email domain corrected",
  },
  {
    date: "2026-10-10",
    kind: "feature",
    area: "Contact",
    title: "Contact page added with community-built LGU sites",
  },
  {
    date: "2026-10-10",
    kind: "data",
    area: "Officials",
    title: "Municipal officials roster taken from the official site",
    source: { label: "Municipality of Naguilian: Municipal Officials", href: "https://naguilianlu.gov.ph/officials" },
  },
  {
    date: "2026-10-10",
    kind: "data",
    area: "Barangays",
    title: "All 37 barangays added from the official Demographics page",
    details: "Population figures are PSA CBMS Census, July 2025.",
    source: { label: "Municipality of Naguilian: Demographics", href: "https://naguilianlu.gov.ph/demographics" },
  },
  {
    date: "2026-10-10",
    kind: "feature",
    area: "Government",
    title: "Government section added: leadership, history, officials and barangays",
  },
  {
    date: "2026-10-10",
    kind: "fix",
    area: "Services",
    title: "Service pages recover from failed loads; sourcing wording softened",
  },
  {
    date: "2026-10-09",
    kind: "data",
    area: "Citizen’s Charter",
    title: "2023 Citizen’s Charter imported, with a detail page for each service",
    source: { label: "2023 Citizen’s Charter (PDF)", href: "/docs/citizens-charter-2023.pdf" },
  },
  {
    date: "2026-10-09",
    kind: "feature",
    area: "About",
    title: "About page added",
    details: "Explains the volunteer project and that this is not an official government website.",
  },
  {
    date: "2026-10-08",
    kind: "feature",
    area: "Services",
    title: "Service search ranks matches by name, keywords and office",
  },
  {
    date: "2026-10-07",
    kind: "feature",
    area: "Site",
    title: "First version of the portal interface built",
  },
]
