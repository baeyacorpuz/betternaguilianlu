import type { Icon } from "@phosphor-icons/react"
import {
  BriefcaseIcon,
  CertificateIcon,
  DeviceMobileIcon,
  FilesIcon,
  FirstAidKitIcon,
  FlagIcon,
  HandHeartIcon,
  HouseLineIcon,
  LinkSimpleIcon,
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

export type { Service } from "@/data/charter"

export const volunteerEmail = "volunteer@betternaguilian.org"

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
  demographics: "#",
  officials: "#",
  facebook: "#",
  businessPermit: "#",
  legislativeRequest: "#",
  climate: "#",
  pagasa: "#",
  feedback: mailto(
    "Report: wrong information on Better Naguilian",
    "Page or service:\n\nWhat's wrong:\n\nCorrect information and source (if known):\n"
  ),
  contribute: "https://github.com/baeyacorpuz/betternaguilianlu",
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

export const sunTimes = {
  eyebrow: "Today",
  title: "Sun and moon in Naguilian",
  description: "Sunrise, sunset, twilight and moon phase for today, shown in Philippine time and updated every minute.",
  sunTitle: "Sun",
  sunDescription: "Daylight for today at the Municipal Hall.",
  moonTitle: "Moon",
  moonDescription: "Phase and rise and set times for today.",
  timesTitle: "Twilight and golden hour",
  progressLabel: "Daylight progress",
  progressSuffix: "between sunrise and sunset",
  progressDay: "Sun is up",
  progressBefore: "Before sunrise",
  progressAfter: "After sunset",
  aboveHorizon: "Above the horizon",
  belowHorizon: "Below the horizon",
  altitude: "Altitude",
  azimuth: "Azimuth",
  illumination: "Illuminated",
  phase: "Phase",
  moonArt: "Moon phase illustration",
  morning: "Morning",
  evening: "Evening",
  moonPhases: ["New moon", "Waxing crescent", "First quarter", "Waxing gibbous", "Full moon", "Waning gibbous", "Last quarter", "Waning crescent"],
  compass: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
  empty: "—",
  items: {
    sunrise: "Sunrise",
    solarNoon: "Solar noon",
    sunset: "Sunset",
    dayLength: "Day length",
    dawn: "Dawn (civil twilight)",
    dusk: "Dusk (civil twilight)",
    goldenHourEnd: "Morning golden hour ends",
    goldenHour: "Evening golden hour starts",
    nauticalDawn: "Nautical dawn",
    nauticalDusk: "Nautical dusk",
    nightEnd: "Astronomical dawn",
    night: "Astronomical dusk",
    moonrise: "Moonrise",
    moonset: "Moonset",
  },
  note: "Times are calculated astronomically for the Municipal Hall coordinates and are not an official PAGASA forecast. Use PAGASA for official almanac data.",
  sourceLabel: "PAGASA",
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
  { role: "Mayor", name: "Hon. Nieri T. Flores", title: "Municipal Mayor" },
  { role: "Vice Mayor", name: "Hon. Reynaldo J. Flores", title: "Municipal Vice Mayor" },
]

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
    description: "Every factual item on this portal points back to an official municipal source.",
    steps: [
      {
        icon: FilesIcon,
        title: "Gathered from official sources",
        description:
          "Service steps, offices, and requirements come from the published Citizen’s Charter. Population, history, and leadership come from the official municipal website.",
        sources: [
          { label: "Citizen’s Charter", href: links.citizensCharter },
          { label: "Official website", href: links.officialSite },
        ],
      },
      {
        icon: LinkSimpleIcon,
        title: "Every fact is cited",
        description: "Factual content carries a Source link, so you can open the original and check it yourself.",
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
        title: "Cite official sources",
        description: "Every fact links back to the municipal source it came from.",
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

/** Copy for the service detail page and the /services standards section. */
export const serviceDetail = {
  back: "All services",
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
  source: {
    title: "Verify in the charter",
    description: "Details are copied from the 2023 Citizen’s Charter. Check the printed page before you go.",
    linkPrefix: "Citizen’s Charter, p.",
  },
  feedback: {
    title: "Feedback and complaints",
    linkLabel: "Citizen’s Charter feedback page",
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
  pledgeSource: "Citizen’s Charter, performance pledge",
  feedbackTitle: "Complaints, grievances and feedback",
  slipLabel: "A feedback slip asks for",
  feedbackSource: "Citizen’s Charter, feedback mechanism",
}
