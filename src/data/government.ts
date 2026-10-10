import { loadServices, type OfficeId } from "@/data/charter"

/**
 * Naguilian's officials as printed in the 2023 Citizen's Charter: the
 * organizational structure (PDF p.11) and Office Order No. 2023-1-B, which
 * names an authorized signatory for each department or unit head (pp.9–10).
 * Names drop the charter's ALL CAPS and "Mr./Ms." but keep professional
 * honorifics (Hon., Atty., Dr., Engr., EnP) and spellings as printed. `page`
 * is the 1-based PDF page for `charterPage()` links.
 */

export type Person = {
  name: string
  position: string
  page: number
}

export type UnitHead = {
  /** Stable key, a slug of the unit. */
  id: string
  /** Unit as labelled on the org chart, or the office's charter name where the box prints only a position. */
  unit: string
  head: Person
  /** Joins to `offices` for contact details. */
  officeId?: OfficeId
  /** Authorized signatory in the head's absence, from the Office Order. */
  oic?: Person
  /**
   * `/services?q=` query that finds exactly this unit's charter services. A
   * dev-only check covers units with an `officeId`; the others were checked by hand.
   */
  servicesQuery?: string
}

const ORG_CHART = 11

export const rosterMeta = {
  source: "2023 Citizen’s Charter",
  order: "Office Order No. 2023-1-B, 2 January 2023",
  orgChartPage: ORG_CHART,
}

export const executive = {
  mayor: { name: "Hon. Nieri T. Flores", position: "Municipal Mayor", page: ORG_CHART },
  viceMayor: { name: "Hon. Reynaldo J. Flores", position: "Municipal Vice Mayor", page: ORG_CHART },
} satisfies Record<string, Person>

const sbMember = (name: string): Person => ({ name, position: "Sangguniang Bayan Member", page: ORG_CHART })

export const sangguniang = {
  members: [
    sbMember("Hon. Diomedes F. Hipol"),
    sbMember("Hon. Rupert Paolo M. Rillera III"),
    sbMember("Hon. Helen Casuga-Obispo"),
    sbMember("Hon. Georgina Estepa-Flores"),
    sbMember("Hon. Erick E. Soriano"),
    sbMember("Hon. Jonathan P. Molina"),
    sbMember("Hon. Aurelio F. Flora"),
    sbMember("Hon. Lennie M. Mercado"),
  ],
  // Printed as "Liga ng mga Brgy" and "SK Pres" on the org chart.
  exOfficio: [
    { name: "Hon. Jofre F. Hipol", position: "Liga ng mga Barangay President", page: ORG_CHART },
    { name: "Hon. Jeremy E. Garce", position: "SK Federation President", page: ORG_CHART },
  ],
} satisfies Record<string, Person[]>

export type CharterMessage = {
  author: Person
  headline?: string
  paragraphs: string[]
  page: number
}

export const messages: CharterMessage[] = [
  {
    author: { ...executive.mayor, page: 5 },
    headline: "Let us give the people quality public service which they truly deserve.",
    paragraphs: [
      "The drafting of this Citizens’ Charter of the Municipality of Naguilian makes more tangible the desire of its officials and employees to continuously enhance the kind of service that it provides to its constituents.",
      "Even prior to the enhancement of Republic Act 9485, otherwise known as the Anti-Red Tape Act of 2008, this local government unit (LGU) has constantly adhered to its policy of providing prompt, courteous and accurate service to all Naguilianons. This Citizens’ Charter, however, formally outlines the various frontline services that the LGU offers, the process that each follows the duration of each step in the process and the person/s responsible for the same. The principle of transparency is further emphasized with the inclusion of the required fees in the billboards which are made visible to the public.",
      "This guidebook evokes in every staff of the LGU the responsibility to act on requests with utmost promptness, courtesy and accuracy as well as the accountability for his every action. This is also in consonance with our battle cry “TATTAN NAGUILIAN”, which means that in Naguilian we do not procrastinate.",
      "It is hoped that every Naguilianon shall make optimum use of the Citizens Charter so that access to government service would be easier and the commitment of the LGU officials and employees to adhere to its provisions shall be put to fruition and in the end, Naguilian will continue to be an exemplar of excellent public service so that once again every Naguilianons shall say “I AM PROUD NAGUILIANON.”",
    ],
    page: 5,
  },
  {
    author: { ...executive.viceMayor, page: 6 },
    paragraphs: [
      "The officials and employees of the Municipality Government of Naguilian, La Union dedicate this Citizens’ Charter to our beloved constituents as a manifestation of our sincerity in providing a service standard that is guided by the principles of quality, equality, transparency in delivery, predictability, proper redress for grievances, value for money and mutual accountability.",
      "May this transparency, accountability and performance management tool serve the purpose for which it is crafted because you deserve the best and we are committed to fulfill our pledge contained therein.",
      "Together we seek the divine intervention of our God that He shall hold us steadfast in our resolve to march forward for a better Naguilian through a better public service with this charter as our guide.",
    ],
    page: 6,
  },
]

const head = (name: string, position: string): Person => ({ name, position, page: ORG_CHART })
const oic = (name: string, position: string, page: 9 | 10): Person => ({ name, position, page })

/**
 * One entry per org-chart box, so a person who heads several units appears
 * once per unit. Signatories are attached to the unit matching the head's
 * Office Order position only.
 */
export const unitHeads: UnitHead[] = [
  {
    id: "planning",
    unit: "Planning and Development Office",
    head: head("EnP Joy P. Flores", "Municipal Planning and Development Coordinator"),
    officeId: "planning",
    oic: oic("EnP Nasser A. Dugasan", "Administrative Officer IV", 9),
    servicesQuery: "planning and development office",
  },
  {
    id: "budget",
    unit: "Budget Office",
    head: head("Leni Grace M. Cariaso", "Municipal Budget Officer"),
    officeId: "budget",
    oic: oic("Arlene P. Pati", "Administrative Assistant II", 9),
  },
  {
    id: "accounting",
    unit: "Accounting Office",
    head: head("Aicel Necy F. Martinez", "Municipal Accountant"),
    officeId: "accounting",
    oic: oic("Doris C. Patajo", "Administrative Assistant II", 9),
  },
  {
    id: "treasury",
    unit: "Treasury Office",
    head: head("Atty. Algen S. Gomez", "Municipal Treasurer"),
    officeId: "treasury",
    oic: oic("Wileen A. Caoili", "Fiscal Examiner I", 9),
    servicesQuery: "revenue generation",
  },
  {
    id: "business-permit-and-licensing",
    unit: "Business Permit and Licensing Unit",
    head: head("Atty. Algen S. Gomez", "Municipal Treasurer"),
    officeId: "treasury",
    servicesQuery: "business permit and licensing",
  },
  {
    id: "assessor",
    unit: "Assessor Office",
    head: head("Myra-Fe D. Riñon", "Municipal Assessor"),
    officeId: "assessor",
    oic: oic("Edel D. Mendoza", "Administrative Assistant II", 9),
    servicesQuery: "office of the municipal assessor",
  },
  {
    id: "health",
    unit: "Health Office",
    head: head("Dr. Teofilo Severo E. Dumaguin Jr.", "Municipal Health Officer"),
    officeId: "health",
    oic: oic("Darmaine G. Aromin", "Nurse I/ Administrative Officer (Designate)", 9),
    servicesQuery: "health center",
  },
  {
    id: "engineering",
    unit: "Engineering Office",
    head: head("Engr. Froilan S. Florendo Jr.", "Municipal Engineer"),
    officeId: "engineering",
    oic: oic("Engr. Celine Kylie Ramos", "Engineer I", 9),
    servicesQuery: "engineering office",
  },
  {
    id: "agriculture",
    unit: "Agriculture Office",
    head: head("Willy S. Estabillo", "Municipal Agriculturist"),
    officeId: "agriculture",
    oic: oic("Perlita M. Corpuz", "Agricultural Technologist", 9),
    servicesQuery: "agriculture office",
  },
  {
    id: "slaughterhouse",
    unit: "Slaughterhouse Management Unit",
    head: head("Willy S. Estabillo", "Municipal Agriculturist"),
  },
  {
    id: "civil-registry",
    unit: "Civil Registry Office",
    // The org chart prints "LAS-ANG - NICOLAS"; the Office Order prints "LAS-ANG-NICOLAS".
    head: head("Anita F. Las-ang-Nicolas", "Municipal Civil Registrar"),
    officeId: "civil-registry",
    oic: oic("Susan Julita D. Formacion", "Assistant Registration Officer", 9),
    servicesQuery: "civil registry office",
  },
  {
    id: "social-welfare",
    unit: "Social Welfare Office",
    // The org chart's position; the Office Order prints "Municipal Social Welfare Officer I".
    head: head("Wilhemia E. Areola", "Municipal Social Welfare and Development Officer"),
    officeId: "social-welfare",
    oic: oic("Hilda A. Bancifra", "Administrative Aide IV", 9),
    servicesQuery: "social welfare and development office",
  },
  {
    id: "general-services",
    unit: "General Services Office",
    head: head("Engr. Ludivico A. Patacsil Jr.", "Engineer II, Head, General Services Office"),
    officeId: "general-services",
    oic: oic("Freddie G. Abenes", "Electrician II", 9),
  },
  {
    id: "mdrrmo",
    unit: "Municipal Disaster Risk Reduction and Management Office",
    head: head("Mark Anthony B. Dilodilo", "Local Disaster Risk Reduction and Management Officer III"),
    oic: oic("Roel Gerald G. Aromin", "Local Disaster Risk Reduction and Management Officer I", 9),
  },
  {
    id: "environment",
    unit: "Environment and Natural Resource Office",
    head: head("Mark Anthony B. Dilodilo", "Local Disaster Risk Reduction and Management Officer III"),
    officeId: "environment",
    servicesQuery: "environment and natural resources",
  },
  {
    id: "peso",
    unit: "Public Employment Service Office",
    // The org chart line-breaks this name as "JONATHA N CALICA".
    head: head("Jonathan C. Calica", "Administrative Aide III, PESO Manager (Designate)"),
  },
  {
    id: "market",
    unit: "Market Management Office",
    head: head("Herminia Agnes S. Carigo", "Market Supervisor II"),
    officeId: "market",
    // Printed "Revenue Colletion Clerk II".
    oic: oic("James R. Hidalgo", "Revenue Collection Clerk II", 10),
    servicesQuery: "market management unit",
  },
  {
    id: "tourism",
    unit: "Tourism Unit",
    head: head("Jino Banaña", "Administrative Aide I, Head, Municipal Tourism Office (Designate)"),
    // No query isolates this unit's services: they are filed under the Mayor's office, whose aliases include "tourism".
    oic: oic("Julie Ann O. Gurion", "Administrative Aide I", 10),
  },
  {
    id: "human-resource",
    unit: "Human Resource Management Office",
    head: head("Jeffrey C. Patacsil", "Administrative Officer IV (Human Resource Management Officer II)"),
    oic: oic("Anne Geeleen Q. Baterina", "Administrative Assistant II", 10),
  },
  {
    id: "project-development",
    unit: "Project Development and Evaluation Unit",
    // The org chart prints "EMILIE"; the Office Order prints "EMELIE".
    head: head("Emelie S. Porte", "Administrative Assistant III"),
    servicesQuery: "project development evaluation unit",
  },
  {
    id: "sb-secretariat",
    unit: "Sangguniang Bayan Secretariat",
    head: head("Atty. Dearkyle Anicee A. Galvez-Taqued", "Secretary to the Sangguniang Bayan"),
    officeId: "sb-secretariat",
    oic: oic("Jelly S. Casuga", "Local Legislative Staff Assistant III", 9),
    servicesQuery: "sangguniang bayan secretariat",
  },
]

// Dev-only: every `servicesQuery` on a unit with an office must find only that office's services.
// service-search is imported lazily because it imports site.ts, which imports this file.
if (import.meta.env.DEV) {
  void Promise.all([loadServices(), import("@/lib/service-search")]).then(([services, { searchServices }]) => {
    for (const u of unitHeads) {
      if (!u.servicesQuery || !u.officeId) continue
      const hits = searchServices(u.servicesQuery, services)
      const stray = hits.filter((s) => s.department !== u.officeId)
      if (!hits.length || stray.length) {
        console.error(`unitHeads["${u.id}"].servicesQuery "${u.servicesQuery}" found ${hits.length} services, ${stray.length} from other offices`, stray)
      }
    }
  })
}
