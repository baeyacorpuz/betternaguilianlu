import type { Icon } from "@phosphor-icons/react"
import {
  BookOpenTextIcon,
  BugIcon,
  BriefcaseIcon,
  CertificateIcon,
  DeviceMobileIcon,
  EnvelopeSimpleIcon,
  GitBranchIcon,
  FilesIcon,
  FirstAidKitIcon,
  FlagIcon,
  HandHeartIcon,
  HouseLineIcon,
  LockKeyIcon,
  MapTrifoldIcon,
  MotorcycleIcon,
  PersonArmsSpreadIcon,
  PlantIcon,
  ReceiptIcon,
  RecycleIcon,
  ScalesIcon,
  SealCheckIcon,
  StampIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react"

import { executive } from "@/data/government"

export type { Service } from "@/data/charter"

export const volunteerEmail = "volunteer@betternaguilianlu.org"

const mailto = (subject: string, body: string) =>
  `mailto:${volunteerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

/**
 * External destinations. Replace the `#` placeholders with the official URLs
 * once they are confirmed; every "Source" link on the page reads from here.
 */
export const links = {
  officialSite: "https://naguilianlu.gov.ph/",
  citizensCharter: "https://naguilianlu.gov.ph/citizenscharter",
  history: "#",
  demographics: "https://naguilianlu.gov.ph/demographics",
  officials: "https://naguilianlu.gov.ph/officials",
  facebook: "#",
  businessPermit: "#",
  legislativeRequest: "#",
  climate: "#",
  pagasa: "#",
  openMeteo: "https://open-meteo.com/",
  sunCalc: "https://github.com/mourner/suncalc",
  feedback: mailto(
    "Report: wrong information on Better Naguilian",
    "Page or service:\n\nWhat's wrong:\n\nCorrect information and source (if known):\n"
  ),
  contribute: "https://github.com/baeyacorpuz/betternaguilianlu",
  issues: "https://github.com/baeyacorpuz/betternaguilianlu/issues",
  email: mailto("Hello from a Better Naguilian visitor", ""),
} as const

export const municipality = {
  name: "Naguilian",
  province: "La Union",
  zip: "2511",
  coordinates: { lat: 16.5313, lng: 120.3929 },
}

export type ServiceCategoryId =
  | "business"
  | "certificates"
  | "tax"
  | "health"
  | "social"
  | "agriculture"
  | "building"
  | "transport"
  | "records"
  | "environment"
  | "facilities"

export type ServiceCategory = {
  id: ServiceCategoryId
  name: string
  description: string
  icon: Icon
  featured?: { label: string; href: string }
  /** Shown as a card in the homepage Popular Services grid. */
  highlight?: true
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "business",
    name: "Business & Livelihood",
    description: "Business permits, market stalls and fees, and weights and measures.",
    icon: BriefcaseIcon,
    featured: { label: "Business Permit Application", href: links.businessPermit },
    highlight: true,
  },
  {
    id: "certificates",
    name: "Civil Registry",
    description: "Birth, marriage and death registration, marriage licenses, and record corrections.",
    icon: CertificateIcon,
    highlight: true,
  },
  {
    id: "tax",
    name: "Taxes & Property",
    description: "Real property tax, community tax certificates, assessments, and property records.",
    icon: ReceiptIcon,
    highlight: true,
  },
  {
    id: "health",
    name: "Health",
    description: "Sanitary permits, health certificates, consultations, and other public health services.",
    icon: FirstAidKitIcon,
    highlight: true,
  },
  {
    id: "social",
    name: "Social Services",
    description: "Financial assistance, social case studies and referrals, and municipal IDs.",
    icon: HandHeartIcon,
    highlight: true,
  },
  {
    id: "building",
    name: "Building & Zoning",
    description: "Building, occupancy and fencing permits, inspections, and locational clearances.",
    icon: HouseLineIcon,
    highlight: true,
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "Farmer and fisherfolk registration, farm inputs, soil analysis, and animal health.",
    icon: PlantIcon,
  },
  {
    id: "transport",
    name: "Transport",
    description: "Tricycle franchises and working permits for tricycle drivers and operators.",
    icon: MotorcycleIcon,
  },
  {
    id: "records",
    name: "Clearances & Records",
    description: "Mayor’s clearances and certifications, and certified copies of municipal records.",
    icon: StampIcon,
  },
  {
    id: "environment",
    name: "Environment",
    description: "Garbage hauling, vermicompost, environmental certificates, and inspections.",
    icon: RecycleIcon,
  },
  {
    id: "facilities",
    name: "Facilities & Tourism",
    description: "Rental of government facilities and tourism information.",
    icon: MapTrifoldIcon,
  },
]

/** Copy shown while the service records are still loading. */
export const serviceLoading = {
  search: "Loading services…",
  failed: "Couldn’t load the services. Check your connection and reload the page to try again.",
  count: "Browse services",
}

export const popularSearches = [
  { label: "Business permit", query: "business permit" },
  { label: "Health", query: "health" },
  { label: "Assistance", query: "assistance" },
]

export const stats = [
  { label: "Population", value: "52,087", note: "PSA CBMS Census, July 2025", source: links.demographics },
  { label: "Barangays", value: "37", note: "Barangays in the municipality", source: links.demographics },
  { label: "Municipal classification", value: "First Class", note: "First Class Municipality", source: links.demographics },
  { label: "Cadastral land area", value: "10,086.85 ha", note: "Cadastral area", source: links.demographics },
] as const

export const climate = {
  type: "1st Climatic Type",
  summary:
    "The dry season is November to April, while the wet season covers the rest of the year. Rainfall is highest from July to September.",
  // 0 = dry, 1 = wet, 2 = peak rainfall
  months: [0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0, 0] as const,
}

export const climateCopy = {
  eyebrow: "Place",
  title: "Weather, climate and map",
  description: "Check today’s forecast, see how the seasons run through the year, and find the Municipal Hall.",
  cardKicker: "Climate through the year",
  today: "Right now",
  seasons: [
    { label: "Dry season", short: "Dry" },
    { label: "Wet season", short: "Wet" },
    { label: "Peak rainfall", short: "Peak rain" },
  ],
  monthsLong: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  stripLabel: "Typical season for each month",
  allYear: "All year",
  sourceLabel: "Climate source",
  mapKicker: "Municipal Hall",
  mapTitle: "Find the Municipal Hall",
  mapDescription: "The map is centered on the published Municipal Hall location.",
  mapFrameTitle: "Map of Naguilian Municipal Hall",
  mapNote: "Coordinates are approximate. Verify the destination before traveling.",
  openMap: "Open in OpenStreetMap",
  directions: "Get directions",
}

/** Map destinations built from the municipality coordinates. */
export function mapLinks({ lat, lng }: { lat: number; lng: number }) {
  const d = 0.012
  return {
    embed: `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d * 1.6},${lat - d},${lng + d * 1.6},${lat + d}&layer=mapnik&marker=${lat},${lng}`,
    openStreetMap: `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`,
    directions: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
  }
}

/** Open-Meteo forecast request. The key is not needed for non-commercial use. */
export const weatherApi = {
  endpoint: "https://api.open-meteo.com/v1/forecast",
  timezone: "Asia/Manila",
  current: [
    "temperature_2m",
    "apparent_temperature",
    "relative_humidity_2m",
    "precipitation",
    "weather_code",
    "wind_speed_10m",
    "wind_direction_10m",
    "is_day",
    "uv_index",
  ],
  daily: ["temperature_2m_max", "temperature_2m_min", "precipitation_probability_max", "precipitation_sum", "uv_index_max"],
  forecastDays: 1,
  /** Refresh interval and the minimum gap before a tab refocus refetches. */
  refreshMs: 15 * 60_000,
  staleAfterMs: 5 * 60_000,
  /** A forecast observed longer ago than this is flagged as out of date. */
  staleDataMs: 60 * 60_000,
  timeoutMs: 12_000,
}

export type WeatherKind = "clear" | "partly" | "cloudy" | "fog" | "drizzle" | "rain" | "storm" | "snow"

export const weatherCopy = {
  title: "Today’s weather",
  loading: "Loading today’s weather",
  errorTitle: "Weather is not available right now",
  retry: "Try again",
  feelsLike: "Feels like",
  humidity: "humidity",
  high: "High",
  low: "Low",
  highShort: "H",
  lowShort: "L",
  asOf: "As of",
  timeZone: "PHT",
  staleNote: "may be out of date",
  empty: "—",
  unknownCondition: "Weather conditions",
  sourceLabel: "Open-Meteo",
  sourceTitle: "Weather data by Open-Meteo.com (CC BY 4.0)",
  disclaimer: "Model forecast for the Municipal Hall, not an official PAGASA advisory.",
}

/** WMO weather interpretation codes (WW) used by Open-Meteo. */
export const weatherConditions: Record<number, { label: string; kind: WeatherKind }> = {
  0: { label: "Clear sky", kind: "clear" },
  1: { label: "Mostly clear", kind: "clear" },
  2: { label: "Partly cloudy", kind: "partly" },
  3: { label: "Overcast", kind: "cloudy" },
  45: { label: "Fog", kind: "fog" },
  48: { label: "Freezing fog", kind: "fog" },
  51: { label: "Light drizzle", kind: "drizzle" },
  53: { label: "Drizzle", kind: "drizzle" },
  55: { label: "Heavy drizzle", kind: "drizzle" },
  56: { label: "Freezing drizzle", kind: "drizzle" },
  57: { label: "Heavy freezing drizzle", kind: "drizzle" },
  61: { label: "Light rain", kind: "rain" },
  63: { label: "Rain", kind: "rain" },
  65: { label: "Heavy rain", kind: "rain" },
  66: { label: "Freezing rain", kind: "rain" },
  67: { label: "Heavy freezing rain", kind: "rain" },
  71: { label: "Light snow", kind: "snow" },
  73: { label: "Snow", kind: "snow" },
  75: { label: "Heavy snow", kind: "snow" },
  77: { label: "Snow grains", kind: "snow" },
  80: { label: "Light showers", kind: "rain" },
  81: { label: "Showers", kind: "rain" },
  82: { label: "Heavy showers", kind: "rain" },
  85: { label: "Snow showers", kind: "snow" },
  86: { label: "Heavy snow showers", kind: "snow" },
  95: { label: "Thunderstorm", kind: "storm" },
  96: { label: "Thunderstorm with hail", kind: "storm" },
  99: { label: "Severe thunderstorm with hail", kind: "storm" },
}

export const sunTimes = {
  eyebrow: "Today",
  title: "Sun and moon in Naguilian",
  description: "Sunrise, sunset and moon phase for today, shown in Philippine time and updated every minute.",
  sunTitle: "Sun",
  moonTitle: "Moon",
  illuminated: "illuminated",
  daylight: "daylight",
  solarNoon: "Solar noon",
  goldenHourFrom: "Golden hour from",
  sunrise: "Sunrise",
  sunset: "Sunset",
  moonrise: "Moonrise",
  moonset: "Moonset",
  nextSunrise: "Sunrise in",
  nextSunset: "Sunset in",
  moonPhases: ["New moon", "Waxing crescent", "First quarter", "Waxing gibbous", "Full moon", "Waning gibbous", "Last quarter", "Waning crescent"],
  empty: "—",
  calculatedWith: "Calculated with",
  calculatorName: "SunCalc",
  notForecast: "Not a PAGASA forecast",
}

export const history = [
  {
    period: "Early settlement",
    date: "Date not stated",
    title: "A settlement at the fork of two rivers",
    body: "The official history describes an early settlement at the fork of two rivers.",
  },
  {
    period: "Historical account",
    date: "Date not stated",
    title: "The name is linked to “Nag-ili an dagiti gan-ganaet”",
    body: "The official history connects the municipality’s name with the phrase “Nag-ili an dagiti gan-ganaet.”",
  },
  {
    period: "Earlier history",
    date: "Exact year not stated",
    title: "Originally part of Bauang in Pangasinan",
    body: "The official history says Naguilian was originally part of Bauang in Pangasinan.",
  },
  {
    period: "1839",
    date: "1839",
    title: "Naguilian separated from Bauang",
    body: "The official history dates Naguilian’s separation from Bauang to 1839.",
  },
  {
    period: "1850",
    date: "1850",
    title: "La Union was created by Royal Decree",
    body: "The history page says La Union was created in 1850 and Naguilian was one of its 12 towns.",
  },
  {
    period: "American regime",
    date: "Exact year not stated",
    title: "The area was divided into Naguilian, Burgos, and Bagulin",
    body: "The official history describes an American-regime division into the municipalities of Naguilian, Burgos, and Bagulin.",
  },
]

export const leadership = [
  { role: "Mayor", person: executive.mayor },
  { role: "Vice Mayor", person: executive.viceMayor },
]

export const government = {
  eyebrow: "Government",
  nav: {
    label: "Government",
    items: [
      { to: "/government/leadership", label: "Leadership" },
      { to: "/government/history", label: "History" },
      { to: "/government/officials", label: "Officials directory" },
      { to: "/government/barangays", label: "Barangays" },
    ],
  },
  notices: {
    leadership: {
      title: "From the official municipal website",
      body: "This roster follows the Municipal Officials page on naguilianlu.gov.ph.",
      linkLabel: "Open the official officials page",
    },
    officials: {
      title: "As printed in the 2023 Citizen’s Charter",
      body: "This listing comes from the charter’s organizational structure and Office Order No. 2023-1-B. Department heads may have changed since then.",
    },
    barangays: {
      title: "Barangay officials not yet published",
      body: "The municipality hasn’t published its barangay officials page yet. Names will be added here once it does. Population figures come from the official Demographics page (PSA CBMS Census, July 2025).",
      linkLabel: "Open the official Demographics page",
    },
  },
  leadership: {
    title: "Municipal Leadership",
    description:
      "The elected officials who lead Naguilian’s executive and legislative branches, as listed on the official municipal website.",
    executive: "Mayor and Vice Mayor",
    sb: {
      eyebrow: "Legislative",
      title: "Sangguniang Bayan",
      description: "The municipal council. The Vice Mayor presides over its sessions.",
      exOfficio: "Ex-officio members",
    },
    messages: {
      eyebrow: "In their words",
      title: "Messages from the Mayor and Vice Mayor",
      description: "Printed at the front of the 2023 Citizen’s Charter.",
    },
  },
  history: {
    title: "Brief History",
    description: "Key moments in Naguilian’s history, from the municipality’s official history account.",
    timeline: "Timeline",
    visionMission: {
      eyebrow: "Direction",
      title: "Vision and mission",
      vision: "Vision",
      mission: "Mission",
    },
  },
  officials: {
    title: "Officials Directory",
    description:
      "Who heads each municipal office and unit, who signs in their absence, and how to reach the office.",
    oic: "Officer-in-charge in the head’s absence",
    services: "Services from this office",
    contact: "Office contact",
  },
  barangays: {
    title: "Barangays",
    description: "Naguilian’s 37 barangays, their population and households, and their elected officials.",
    summary: { barangays: "Barangays", population: "Total population", households: "Households" },
    poblacion: "Poblacion",
    population: "Population",
    households: "Households",
    families: "Families",
    officials: {
      punongBarangay: "Punong Barangay",
      kagawads: "Barangay Kagawad",
      skChairperson: "SK Chairperson",
      secretary: "Barangay Secretary",
      treasurer: "Barangay Treasurer",
      pending: "Officials not yet published",
    },
  },
  teasers: {
    leadership: "Meet the full leadership",
    history: "Read the full history",
  },
}

export const contact = {
  phone: "+63 (072) 619 4917",
  phoneDialable: "+63726194917",
  emails: ["munnaguilian@yahoo.com", "naguilianmlo@gmail.com"],
  address: "Naguilian National Highway, Ortiz, Naguilian, La Union 2511, Philippines",
}

export const moreWays = [
  {
    title: "Business Permit Application",
    description: "Open the linked business permit application portal.",
    href: links.businessPermit,
  },
  {
    title: "Legislative request form",
    description: "Use the linked form for a legislative request.",
    href: links.legislativeRequest,
  },
]

export type QuizQuestion = {
  question: string
  options: string[]
  answer: number
  explanation: string
  source: string
}

export const quiz: QuizQuestion[] = [
  {
    question: "Which phrase is connected to the origin of the name Naguilian?",
    options: ["Nag-ili an dagiti gan-ganaet", "Two rivers meet", "Royal town of La Union"],
    answer: 0,
    explanation: "The official history links the name to “Nag-ili an dagiti gan-ganaet.”",
    source: links.history,
  },
  {
    question: "Which town was Naguilian originally part of?",
    options: ["San Fernando", "Bauang", "Bacnotan"],
    answer: 1,
    explanation: "Naguilian was originally part of Bauang.",
    source: links.history,
  },
  {
    question: "In what year did Naguilian separate from Bauang?",
    options: ["1850", "1902", "1839"],
    answer: 2,
    explanation: "The official history dates the separation to 1839.",
    source: links.history,
  },
  {
    question: "How many barangays does Naguilian have?",
    options: ["37", "29", "42"],
    answer: 0,
    explanation: "Naguilian has 37 barangays.",
    source: links.demographics,
  },
  {
    question: "What is Naguilian’s municipal income classification?",
    options: ["Third Class", "First Class", "Fifth Class"],
    answer: 1,
    explanation: "Naguilian is a First Class municipality.",
    source: links.demographics,
  },
]

export const about = {
  intro: {
    eyebrow: "About",
    title: "About Better Naguilian",
    mission:
      "Better Naguilian is a community-built guide to municipal services in Naguilian, La Union. It gathers published service steps, offices, and basic facts in one place so residents can find what they need before visiting the Municipal Hall.",
    primaryLabel: "Browse services",
    secondaryLabel: "How to help",
  },
  independence: {
    title: "Independent and volunteer-built",
    tagline: "Not an official government website",
    body: "Better Naguilian is built by independent volunteers. It is not affiliated with or endorsed by the Municipal Government of Naguilian. For official transactions and announcements, use the municipality’s own channels.",
    officialLabel: "Visit the official municipal website",
  },
  sources: {
    eyebrow: "Sources",
    title: "Where our information comes from",
    description: "Everything here comes from published official municipal sources. Confirm with the municipality before you transact.",
    steps: [
      {
        icon: FilesIcon,
        title: "Gathered from official sources",
        description:
          "Service steps, offices, and requirements come from the published Citizen’s Charter. Population, history, and leadership come from the official municipal website.",
      },
      {
        icon: BookOpenTextIcon,
        title: "Sources are named",
        description: "Each section says where its information comes from, such as the 2023 Citizen’s Charter or the official municipal website, so you know where to check.",
      },
      {
        icon: ScalesIcon,
        title: "Official sources win",
        description: "If anything here disagrees with an official source, the official source takes precedence.",
      },
    ],
  },
  principles: {
    eyebrow: "Principles",
    title: "What we commit to",
    items: [
      {
        icon: SealCheckIcon,
        title: "Stick to official sources",
        description: "We publish only what official municipal sources have published, and say where it comes from.",
      },
      {
        icon: PersonArmsSpreadIcon,
        title: "Accessible to everyone",
        description: "Keyboard navigation, readable contrast, and support for screen readers in light and dark mode.",
      },
      {
        icon: DeviceMobileIcon,
        title: "Works on any phone",
        description: "Built for small screens and installable as an app that keeps working on a weak connection.",
      },
      {
        icon: LockKeyIcon,
        title: "No accounts, no tracking",
        description: "You never need to sign in, and the portal does not collect personal data.",
      },
    ],
  },
  involve: {
    eyebrow: "Get involved",
    title: "Help keep it accurate",
    description: "Better Naguilian is only as good as its information. Flag what’s wrong, or lend a hand.",
    emailNote: "Reporting opens your email app. You can also write to us directly at",
    actions: [
      {
        icon: FlagIcon,
        title: "Report an issue",
        description: "Spotted outdated or wrong information? Tell us what to fix.",
        href: links.feedback,
      },
      {
        icon: UsersThreeIcon,
        title: "Contribute",
        description: "Volunteers who want to write, check, or build the portal can start on GitHub.",
        href: links.contribute,
      },
    ],
  },
}

/** Copy for the /contact page. */
export const contactPage = {
  intro: {
    eyebrow: "Contact",
    title: "Get in touch",
    body: "Better Naguilian is a community-built project. It’s made and maintained by volunteers from and for Naguilian, not by the municipal government. Write to us about anything: a mistake, an idea, or a question about the project.",
  },
  municipalHall: {
    title: "Looking for the Municipal Hall?",
    body: "We can’t process permits, payments or requests. For official transactions, contact the municipality directly.",
    linkLabel: "Municipal Hall contacts",
  },
  ways: {
    eyebrow: "Reach the team",
    title: "How to reach us",
    description: "Email works for everything. If you use GitHub, you can file issues or send changes there too.",
    items: [
      {
        icon: EnvelopeSimpleIcon,
        title: "Email us",
        description: "Questions, ideas, partnerships, or anything else. We read every message.",
        cta: volunteerEmail,
        href: links.email,
      },
      {
        icon: FlagIcon,
        title: "Report an issue",
        description: "Wrong fee, outdated step, broken link? Tell us the page and what to fix.",
        cta: "Send a report",
        href: links.feedback,
      },
      {
        icon: BugIcon,
        title: "Open a GitHub issue",
        description: "Track bugs and feature requests in public, where anyone can follow along.",
        cta: "View issues",
        href: links.issues,
      },
      {
        icon: GitBranchIcon,
        title: "Contribute",
        description: "The code is open source. Write, check sources, design or build. Every skill helps.",
        cta: "Start on GitHub",
        href: links.contribute,
      },
    ],
  },
  community: {
    eyebrow: "Community-built",
    title: "Other community-built government sites",
    description: "Better Naguilian is part of a wider volunteer movement, started by BetterGov.ph, to make government information easier to use.",
    sites: [
      {
        name: "BetterGov.ph",
        place: "Philippines",
        description: "The national volunteer-built portal for government services and information that inspired this project.",
        href: "https://bettergov.ph",
      },
      {
        name: "Better Los Baños",
        place: "Los Baños, Laguna",
        description: "An LGU-focused fork of BetterGov.ph for the municipality of Los Baños.",
        href: "https://betterlb.org",
      },
      {
        name: "BetterKabankalan",
        place: "Kabankalan City, Negros Occidental",
        description: "A citizen-driven portal for Kabankalan City, inspired by BetterGov.ph.",
        href: "https://betterkabankalan.org",
      },
      {
        name: "Better GenSan",
        place: "General Santos City, South Cotabato",
        description: "A community-powered portal for city services, news and government information.",
        href: "https://bettergensan.org",
      },
    ],
    suggest: "Know another community-built LGU site?",
    suggestLabel: "Let us know",
    suggestHref: mailto("Community site suggestion", "Site name:\n\nLink:\n\nLGU it covers:\n"),
  },
}

/** Copy for the service detail page and the /services standards section. */
export const serviceDetail = {
  back: "All services",
  moreIn: "More services in",
  sidebarLabel: "Service summary and contact",
  facts: {
    classification: "Classification",
    transactionTypes: "Type of transaction",
    whoMayAvail: "Who may avail",
    totalTime: "Total processing time",
  },
  requirements: {
    title: "Requirements",
    description: "What to bring, and where to get each item.",
    whereToSecure: "Where to secure",
    empty: "No requirements listed in the charter for this service.",
  },
  steps: {
    title: "Steps to follow",
    description: "In charter order. Each step lists what the office does, with its fee, time and person responsible.",
    empty: "The charter lists no steps for this service.",
    fee: "Fee",
    time: "Processing time",
    responsible: "Person responsible",
  },
  notes: { title: "Notes from the charter" },
  summary: {
    title: "At a glance",
    totalTime: "Total time",
    totalFees: "Total fees",
    office: "Office",
    notStated: "Not stated in the charter",
  },
  contact: { title: "Office contact", phone: "Phone", email: "Email", location: "Location" },
  feedback: {
    title: "Feedback and complaints",
  },
  notFound: {
    title: "Service not found",
    description: "We couldn’t find a service with that address. It may have been renamed or removed.",
    action: "Browse all services",
  },
}

export const serviceStandards = {
  eyebrow: "Service standards",
  title: "Our pledge and your feedback",
  description: "What the Municipal Government of Naguilian pledges, and how to give feedback.",
  pledgeTitle: "Performance pledge",
  feedbackTitle: "Complaints, grievances and feedback",
  slipLabel: "A feedback slip asks for",
}
