import type { ServiceCategoryId } from "@/data/site"

/**
 * Naguilian's 2023 Citizen's Charter, transcribed by hand from the PDF in
 * public/docs. Text is kept as printed (only line wraps, list markers and
 * obvious typos are cleaned up), and
 * fields the charter leaves blank are left out rather than guessed. `page` is
 * the 1-based PDF page where the service starts, used for `#page=` links.
 */

export const charterMeta = {
  edition: 2023,
  pdfPath: "/docs/citizens-charter-2023.pdf",
}

export const charterPage = (page: number) => `${charterMeta.pdfPath}#page=${page}`

export type ServiceAction = {
  /** Agency action. Absent when the charter gives only a fee/time/person for the client step. */
  action?: string
  fee?: string
  time?: string
  responsible?: string
}

export type ServiceStep = {
  /** What the client does. Empty when the charter lists only agency actions for the step. */
  client: string
  actions: ServiceAction[]
}

export type Requirement = {
  item: string
  whereToSecure?: string
  /** Heading the charter lists the requirement under, e.g. "For scholarship". */
  group?: string
}

export type OfficeId =
  | "mayor"
  | "sb"
  | "accounting"
  | "agriculture"
  | "assessor"
  | "budget"
  | "engineering"
  | "civil-registry"
  | "health"
  | "planning"
  | "market"
  | "sb-secretariat"
  | "social-welfare"
  | "treasury"
  | "general-services"
  | "environment"

export type Office = {
  id: OfficeId
  name: string
  phone: string
  email?: string
  address: string
}

const trunk = "(072) 619-4917 / 4921 / 4928"

/** Department contact details from each office's charter cover page. */
export const offices: Office[] = [
  { id: "mayor", name: "Office of the Mayor", phone: `(072) 609-1266; ${trunk} loc. 1122`, email: "munnaguilian@yahoo.com", address: "2nd Floor, Main Building" },
  { id: "sb", name: "Office of the Vice Mayor & Sangguniang Bayan", phone: `${trunk} loc. 1022`, address: "2nd Floor, Legislative Building" },
  { id: "accounting", name: "Accounting Office", phone: `${trunk} loc. 1081`, address: "2nd Floor, Main Building" },
  { id: "agriculture", name: "Agriculture Office", phone: "(+63) 917-879-9814", email: "agricomplex10068@gmail.com", address: "Agricultural Complex, Cabaritan Sur" },
  { id: "assessor", name: "Assessor Office", phone: `${trunk} loc. 1101`, email: "naguilianassessor@yahoo.com", address: "Ground Floor, Main Building" },
  { id: "budget", name: "Budget Office", phone: `${trunk} loc. 1071`, address: "2nd Floor, Main Building" },
  { id: "engineering", name: "Engineering Office", phone: `${trunk} loc. 8751`, address: "2nd Floor, Main Building" },
  { id: "civil-registry", name: "Civil Registry Office", phone: "(072) 619-4917 loc. 1051", email: "mcrnaguilian@gmail.com", address: "Ground Floor, Balikbayan Building" },
  { id: "health", name: "Health Office", phone: `${trunk} loc. 4411`, address: "Municipal Health Center Building" },
  { id: "planning", name: "Planning and Development Office", phone: `${trunk} loc. 1041`, email: "munnaguilian@yahoo.com", address: "2nd Floor, Main Building" },
  { id: "market", name: "Office for Market Operation", phone: "(072) 609-1096", email: "munnaguilian@yahoo.com", address: "2nd Floor, 3rd Building, Naguilian Public Market" },
  { id: "sb-secretariat", name: "Sangguniang Bayan Secretariat", phone: `${trunk} loc. 1022`, address: "2nd Floor, Legislative Building" },
  { id: "social-welfare", name: "Social Welfare Office", phone: `${trunk} loc. 7611`, address: "1st Floor, Senior Citizen Building" },
  { id: "treasury", name: "Treasury Office", phone: `${trunk} loc. 1091`, address: "1st Floor, Main Building" },
  { id: "general-services", name: "General Service Office", phone: `${trunk} loc. 1061`, address: "1st Floor, Legislative Building" },
  { id: "environment", name: "Environment and Natural Resource Office", phone: `${trunk} loc. 1014`, address: "2nd Floor, Senior Citizen Building" },
]

export type Service = {
  id: string
  name: string
  category: ServiceCategoryId
  /** Department that publishes the service; links to `offices`. */
  department: OfficeId
  /** "Office or Division" as printed on the service. */
  office: string
  classification?: string
  transactionTypes: string[]
  whoMayAvail?: string
  requirements: Requirement[]
  steps: ServiceStep[]
  totalTime?: string
  totalFees?: string
  notes?: string[]
  page: number
  keywords?: string[]
}

export const vision =
  "NAGUILIAN, the Home of the Original Basi and growth hub of Central Eastern La Union is envisioned to be safe, peaceful, investor and tourist-friendly, technology-receptive, agricultural and ecologically-balanced city of healthy, productive and God-loving citizens guided by dynamic, sincere, responsible, and competent leaders."

export const mission =
  "To improve and sustain the safe, peaceful and self-sufficient quality of life of all Naguilianons through the application of appropriate technologies and the responsible utilization of indigenous and other resources."

export const pledge = {
  page: 195,
  intro:
    "We, the officials and employees of the Municipal Government of Naguilian, in view of our commitment to provide the best public service to our clientele, pledge to do the following:",
  items: [
    "Wear a smile when attending to clients",
    "Speak in a courteous manner",
    "Talk to them in a way that they will easily understand",
    "Give them undivided attention",
    "Deliver to them what they need at the shortest time possible",
    "Conduct ourselves in a manner worthy of emulation as public servants",
    "Live modest lives",
    "Post step-by-step procedure of all transactions/services, including the fees and charges pertinent thereto",
    "Treat our clients equally regardless of age, sex, religion and political affiliation",
    "Never receive bribes or any gift of value in consideration of the approval of any transaction",
    "Be firm without being rude",
    "Enforce rules and regulations in a consistent manner",
    "Give the clients an opportunity to evaluate our manner of service delivery",
    "Make the client feel comfortable at all times",
    "Wear the prescribed uniform and identification card",
    "Make the taxpayer feel that the service he is being provided with is worth every centavo he is paying",
  ],
}

export const feedbackMechanism = {
  page: 196,
  summary:
    "A suggestion box is provided at the information desk for suggestions, comments, complaints, grievances and feedback. Feedback slips are also given to clients, in English or Ilocano.",
  slipAsks: [
    "Your name and contact number",
    "The office you transacted with and the employee who attended to you",
    "The date of the transaction",
    "Your rating (Excellent to Bad) of staff courtesy, speed, accuracy and the waiting area",
    "How long it took for your request to be acted upon",
  ],
  confidentiality: "Answers are treated with confidentiality and your identity will not be revealed.",
}

let servicesPromise: Promise<Service[]> | undefined

/** Loads the service records on demand; they live in their own chunk. The promise is cached. */
export function loadServices(): Promise<Service[]> {
  servicesPromise ??= import("@/data/charter-services").then((m) => {
    // the chunk loaded, so a later failure may reload the page again (see main.tsx)
    sessionStorage.removeItem("bn-chunk-reload")
    return m.services
  }).catch((error) => {
    servicesPromise = undefined
    throw error
  })
  return servicesPromise
}
