import type { Icon } from "@phosphor-icons/react"
import {
  BriefcaseIcon,
  CertificateIcon,
  DeviceMobileIcon,
  FilesIcon,
  FirstAidKitIcon,
  FlagIcon,
  HandHeartIcon,
  LinkSimpleIcon,
  LockKeyIcon,
  PersonArmsSpreadIcon,
  ReceiptIcon,
  ScalesIcon,
  SealCheckIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react"

export const volunteerEmail = "volunteer@betternaguilian.org"

const mailto = (subject: string, body: string) =>
  `mailto:${volunteerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

/**
 * External destinations. Replace the `#` placeholders with the official URLs
 * once they are confirmed; every "Source" link on the page reads from here.
 */
export const links = {
  officialSite: "#",
  citizensCharter: "#",
  history: "#",
  demographics: "#",
  officials: "#",
  facebook: "#",
  businessPermit: "#",
  legislativeRequest: "#",
  climate: "#",
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

export type ServiceCategory = {
  id: ServiceCategoryId
  name: string
  description: string
  icon: Icon
  featured?: { label: string; href: string }
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "business",
    name: "Business",
    description: "Permits and registrations for starting and operating a business.",
    icon: BriefcaseIcon,
    featured: { label: "Business Permit Application", href: links.businessPermit },
  },
  {
    id: "certificates",
    name: "Certificates",
    description: "Official certifications, clearances, and civil documents for residents.",
    icon: CertificateIcon,
  },
  {
    id: "tax",
    name: "Tax Payments",
    description: "Pay municipal taxes and other assessed local charges.",
    icon: ReceiptIcon,
  },
  {
    id: "health",
    name: "Health",
    description: "Health certificates, permits, consultations, and related public health services.",
    icon: FirstAidKitIcon,
  },
  {
    id: "social",
    name: "Social Services",
    description: "Municipal assistance, identification, and social welfare support.",
    icon: HandHeartIcon,
  },
]

export type Service = {
  name: string
  category: ServiceCategoryId
  office: string
  keywords?: string[]
}

export const services: Service[] = [
  { name: "New business permit", category: "business", office: "BPLO", keywords: ["mayor's permit", "registration", "license", "start a business", "permit to operate", "negosyo"] },
  { name: "Business permit renewal", category: "business", office: "BPLO", keywords: ["renew", "renewal", "annual", "mayor's permit", "license"] },
  { name: "Business closure / retirement", category: "business", office: "BPLO", keywords: ["close", "closing", "retire", "cessation", "stop business"] },
  { name: "Birth certificate", category: "certificates", office: "Municipal Civil Registrar", keywords: ["psa", "civil registry", "birth record", "live birth"] },
  { name: "Marriage certificate", category: "certificates", office: "Municipal Civil Registrar", keywords: ["marriage contract", "wedding", "kasal", "civil registry"] },
  { name: "Death certificate", category: "certificates", office: "Municipal Civil Registrar", keywords: ["death record", "burial", "civil registry"] },
  { name: "Community tax certificate (cedula)", category: "tax", office: "Municipal Treasurer", keywords: ["ctc", "cedula", "sedula", "residence certificate"] },
  { name: "Real property tax payment", category: "tax", office: "Municipal Treasurer", keywords: ["rpt", "amilyar", "land tax", "property tax", "house tax"] },
  { name: "Tax clearance", category: "tax", office: "Municipal Treasurer", keywords: ["clearance", "no tax due"] },
  { name: "Health certificate", category: "health", office: "Rural Health Unit", keywords: ["health card", "food handler", "medical certificate"] },
  { name: "Sanitary permit", category: "health", office: "Rural Health Unit", keywords: ["sanitation", "establishment", "food business"] },
  { name: "Medical consultation", category: "health", office: "Rural Health Unit", keywords: ["checkup", "check-up", "doctor", "nurse", "sick", "clinic"] },
  { name: "Senior citizen ID", category: "social", office: "MSWDO", keywords: ["osca", "senior", "elderly", "lolo", "lola"] },
  { name: "PWD ID", category: "social", office: "MSWDO", keywords: ["disability", "person with disability", "handicapped"] },
  { name: "Solo parent ID", category: "social", office: "MSWDO", keywords: ["single parent", "single mother", "single father"] },
  { name: "Assistance to individuals in crisis", category: "social", office: "MSWDO", keywords: ["aics", "financial", "burial", "medical assistance", "hospital bill", "ayuda", "tulong"] },
]

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
