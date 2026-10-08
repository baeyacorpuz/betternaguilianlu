import type { Icon } from "@phosphor-icons/react"
import {
  BriefcaseIcon,
  CertificateIcon,
  FirstAidKitIcon,
  HandHeartIcon,
  ReceiptIcon,
} from "@phosphor-icons/react"

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
  { name: "New business permit", category: "business", office: "BPLO", keywords: ["mayor's permit", "registration"] },
  { name: "Business permit renewal", category: "business", office: "BPLO", keywords: ["renew"] },
  { name: "Business closure / retirement", category: "business", office: "BPLO" },
  { name: "Birth certificate", category: "certificates", office: "Municipal Civil Registrar", keywords: ["psa", "civil registry"] },
  { name: "Marriage certificate", category: "certificates", office: "Municipal Civil Registrar" },
  { name: "Death certificate", category: "certificates", office: "Municipal Civil Registrar" },
  { name: "Community tax certificate (cedula)", category: "tax", office: "Municipal Treasurer", keywords: ["ctc", "cedula"] },
  { name: "Real property tax payment", category: "tax", office: "Municipal Treasurer", keywords: ["rpt", "amilyar", "land tax"] },
  { name: "Tax clearance", category: "tax", office: "Municipal Treasurer" },
  { name: "Health certificate", category: "health", office: "Rural Health Unit", keywords: ["health card"] },
  { name: "Sanitary permit", category: "health", office: "Rural Health Unit" },
  { name: "Medical consultation", category: "health", office: "Rural Health Unit", keywords: ["checkup", "doctor"] },
  { name: "Senior citizen ID", category: "social", office: "MSWDO", keywords: ["osca"] },
  { name: "PWD ID", category: "social", office: "MSWDO", keywords: ["disability"] },
  { name: "Solo parent ID", category: "social", office: "MSWDO" },
  { name: "Assistance to individuals in crisis", category: "social", office: "MSWDO", keywords: ["aics", "financial", "burial", "medical assistance"] },
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
