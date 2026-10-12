/**
 * Emergency hotlines, elected officials, legislation and transparency links.
 *
 * Every entry carries the source it was taken from and the date a volunteer
 * last checked it. Numbers and names change: when you update one, update its
 * `checked` date too. Hotlines published only on an agency's own Facebook page
 * are marked `sourceKind: "agency-facebook"` so the page can say so.
 */

export const lastChecked = "12 October 2026"

type Source = { label: string; href: string }

const sources = {
  province911: {
    label: "Provincial Government of La Union: emergency hotlines",
    href: "https://launion.gov.ph/la-union-emergency-hotlines/",
  },
  mdrrmo: { label: "MDRRMO Naguilian, La Union (official Facebook page)", href: "https://www.facebook.com/NaguilianMDRRMO" },
  police: {
    label: "Naguilian Municipal Police Station (official Facebook page)",
    href: "https://www.facebook.com/naguilianpolicestationofficialpage/",
  },
  bfp: { label: "Bureau of Fire Protection Region 1: contact directory", href: "https://region1.bfp.gov.ph/contact-us/" },
  hospital: {
    label: "Provincial Government of La Union: Naguilian District Hospital",
    href: "https://launion.gov.ph/hospitals/naguilian-district-hospital/",
  },
  charter: { label: "2023 Citizen’s Charter, Health Office contact", href: "/docs/citizens-charter-2023.pdf" },
  officials: { label: "Municipality of Naguilian: Municipal Officials", href: "https://naguilianlu.gov.ph/officials" },
  district: {
    label: "La Union’s 2nd congressional district (Wikipedia)",
    href: "https://en.wikipedia.org/wiki/La_Union%27s_2nd_congressional_district",
  },
  lgc: {
    label: "Republic Act No. 7160, the Local Government Code of 1991 (LawPhil)",
    href: "https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html",
  },
  fullDisclosure: { label: "Municipality of Naguilian: Full Disclosure", href: "https://naguilianlu.gov.ph/index.php/9/fd" },
  ordinances2025: {
    label: "Municipality of Naguilian: 2025 Ordinances",
    href: "https://naguilianlu.gov.ph/legislations/2025?type=ordinances",
  },
} satisfies Record<string, Source>

/* ── Emergency ─────────────────────────────────────────────────────────── */

export type Hotline = {
  id: string
  name: string
  description: string
  numbers: { label?: string; display: string; dial: string }[]
  source: Source
  sourceKind?: "agency-facebook"
  /** Shown in the top bar on every page, labelled with `shortName`. */
  pinned?: true
  shortName?: string
}

export const hotlines: Hotline[] = [
  {
    id: "911",
    name: "Emergency 911",
    description: "Nationwide hotline for police, fire, medical and disaster emergencies. Free from any phone.",
    numbers: [{ display: "911", dial: "911" }],
    source: sources.province911,
    pinned: true,
  },
  {
    id: "mdrrmo",
    name: "MDRRMO Naguilian",
    description: "Municipal Disaster Risk Reduction and Management Office: rescue, floods, landslides and typhoons.",
    numbers: [{ display: "0921 471 6619", dial: "09214716619" }],
    source: sources.mdrrmo,
    sourceKind: "agency-facebook",
    pinned: true,
    shortName: "MDRRMO",
  },
  {
    id: "police",
    name: "Naguilian Police Station",
    description: "Philippine National Police, Naguilian Municipal Police Station.",
    numbers: [
      { label: "Smart", display: "0998 598 5164", dial: "09985985164" },
      { label: "Globe", display: "0995 143 8802", dial: "09951438802" },
      { label: "Landline", display: "(072) 609-1138", dial: "0726091138" },
    ],
    source: sources.police,
    sourceKind: "agency-facebook",
    pinned: true,
    shortName: "Police",
  },
  {
    id: "fire",
    name: "Naguilian Fire Station",
    description: "Bureau of Fire Protection, Naguilian Fire Station.",
    numbers: [{ display: "0917 184 9711", dial: "09171849711" }],
    source: sources.bfp,
  },
  {
    id: "hospital",
    name: "Naguilian District Hospital",
    description: "Provincial government hospital in Naguilian.",
    numbers: [
      { display: "(072) 609-1018", dial: "0726091018" },
      { display: "(072) 609-1853", dial: "0726091853" },
    ],
    source: sources.hospital,
  },
  {
    id: "health-office",
    name: "Municipal Health Office",
    description: "Rural health services, consultations and health certificates. Office hours only.",
    numbers: [{ display: "(072) 619-4917 loc. 4411", dial: "0726194917,4411" }],
    source: sources.charter,
  },
]

export const emergencyPage = {
  eyebrow: "Emergency",
  title: "Emergency hotlines",
  description:
    "If someone is in immediate danger, call 911 now. The local numbers below reach Naguilian’s own responders.",
  call: "Call",
  facebookNote: "Published on the agency’s own Facebook page. Please tell us if it has changed.",
  checkedTitle: "How we checked these numbers",
  checkedNote: `Volunteers checked these numbers on ${lastChecked}. Hotlines can change without notice; if a number doesn’t connect, call 911.`,
  offlineNote: "Phone calls work without mobile data, and this page stays available offline once you’ve opened it.",
  report: "Report a wrong number",
  topBar: { label: "Emergency", all: "All hotlines" },
}

/* ── Government ────────────────────────────────────────────────────────── */

export type Official = { name: string; role: string; note?: string }

export const termLabel = "2025–2028 term"

export const government = {
  eyebrow: "Your local government",
  title: "Who represents Naguilian",
  description:
    "The elected officials serving Naguilian for the 2025–2028 term, the council that writes local laws, and how to reach each municipal office.",
  executive: [
    { name: "Hon. Nieri T. Flores", role: "Municipal Mayor" },
    { name: "Hon. Reynaldo J. Flores", role: "Municipal Vice Mayor", note: "Presiding officer of the Sangguniang Bayan" },
  ] satisfies Official[],
  congress: {
    name: "Hon. Dante S. Garcia",
    role: "Representative, 2nd District of La Union",
    note: "20th Congress. The district covers Naguilian and ten other southern La Union towns.",
    source: sources.district,
  },
  councilTitle: "Sangguniang Bayan",
  councilHeading: "Meet the eight elected councilors",
  councilorRole: "Sangguniang Bayan Member",
  rosterLink: "Official roster: Municipal Officials page",
  councilDescription:
    "Eight elected councilors make Naguilian’s ordinances and resolutions and approve its budget. The vice mayor presides over their sessions.",
  councilors: [
    "Hon. Diomedes F. Hipol",
    "Hon. Geraldine S. Garcia",
    "Hon. Erick E. Soriano",
    "Hon. Rupert Paolo M. Rillera III",
    "Hon. Johnatan P. Molina, DMD",
    "Hon. Aurelio F. Flora",
    "Hon. Lennie M. Mercado",
    "Hon. Julio A. Subala",
  ],
  exOfficioTitle: "Ex-officio members",
  exOfficio: [
    { name: "Hon. Jofre F. Hipol", role: "President, Liga ng mga Barangay" },
    { name: "Hon. John Rod B. Estira", role: "President, Sangguniang Kabataan Federation" },
  ] satisfies Official[],
  exOfficioNote:
    "Ex-officio seats follow the barangay and SK elections scheduled for 2 November 2026, so these two may change soon after.",
  rolesEyebrow: "How it works",
  rolesTitle: "Who does what",
  roles: [
    {
      title: "What the mayor does",
      body: "The mayor is the chief executive. They run municipal programs, services and offices, and carry out the laws and ordinances.",
    },
    {
      title: "What the council does",
      body: "The Sangguniang Bayan passes ordinances and resolutions, approves the annual budget, and checks how policies are carried out.",
    },
    {
      title: "Your barangay",
      body: "Naguilian has 37 barangays. Each elects its own captain and council for concerns closest to home.",
    },
    {
      title: "What Better Naguilian does",
      body: "We make public information easier to find. We don’t represent the municipal government or process transactions.",
    },
  ],
  rolesSource: sources.lgc,
  officesEyebrow: "Directory",
  officesTitle: "Municipal offices",
  officesDescription: "Phone numbers and locations from each office’s page in the 2023 Citizen’s Charter.",
  checkedNote: `We compared these names with the municipality’s official officials page on ${lastChecked}.`,
  sources: [sources.officials, sources.district, sources.lgc],
}

/* ── Legislative ───────────────────────────────────────────────────────── */

export const legislative = {
  eyebrow: "Local legislation",
  title: "What the Sangguniang Bayan is deciding",
  description:
    "Find Naguilian’s ordinances and resolutions on the municipality’s own records, and learn how a proposal becomes local law.",
  records: [
    {
      title: "Municipal ordinances",
      body: "Local laws passed by the Sangguniang Bayan, listed by year and number on the official site.",
      href: sources.ordinances2025.href,
      cta: "Browse 2025 ordinances",
    },
    {
      title: "Council members",
      body: "The vice mayor, eight elected councilors and the ex-officio members.",
      to: "/government" as const,
      cta: "Meet the council",
    },
    {
      title: "Local Government Code",
      body: "Republic Act No. 7160 sets out what the council can legislate and how measures are approved.",
      href: sources.lgc.href,
      cta: "Read RA 7160",
    },
  ],
  processEyebrow: "Process",
  processTitle: "How a proposal becomes an ordinance",
  processDescription: "A simplified view of the steps in the Local Government Code.",
  process: [
    { title: "Filed and read", body: "A councilor files a proposed ordinance, which is read in session and sent to a committee." },
    { title: "Committee and hearings", body: "The committee studies it and may hold public hearings before reporting back." },
    { title: "Approved by the council", body: "The Sangguniang Bayan votes on the measure after its readings." },
    { title: "Mayor signs or vetoes", body: "The mayor has 10 days to act. If the mayor doesn’t act, the ordinance is considered approved." },
    { title: "Provincial review", body: "The Sangguniang Panlalawigan of La Union has 30 days to review municipal ordinances." },
  ],
  processSource: sources.lgc,
  contactTitle: "Contact the council",
  contactDescription:
    "For copies of ordinances or resolutions, or to follow a measure, contact the Sangguniang Bayan Secretariat.",
  servicesTitle: "Council services in the Citizen’s Charter",
  exactWording:
    "When the exact wording matters, use the signed copy from the Sangguniang Bayan Secretariat. Better Naguilian links to records but doesn’t republish them.",
  checkedNote: `Links checked on ${lastChecked}.`,
  sources: [sources.ordinances2025, sources.officials, sources.lgc],
}

/* ── Transparency ──────────────────────────────────────────────────────── */

export const transparency = {
  eyebrow: "Public money",
  title: "Follow Naguilian’s public money",
  description:
    "Go straight to the budget reports, procurement notices and audit findings that the law requires the municipality to publish.",
  disclosureTitle: "What the municipality posts every quarter",
  disclosureDescription:
    "Under the Full Disclosure Policy, Naguilian posts these documents on its website and in three public places.",
  disclosureItems: [
    "Annual budget report",
    "Annual procurement plan",
    "Statement of receipts and expenditures",
    "Bid results for civil works, goods and services, and consulting services",
  ],
  postedAt: ["Municipal Building lobby", "2nd floor, Naguilian Public Market", "Naguilian Civic Center"],
  postedAtLabel: "Printed copies are posted at",
  disclosureSource: sources.fullDisclosure,
  recordsEyebrow: "Records",
  recordsTitle: "See the records behind the numbers",
  recordsDescription: "Official portals where Naguilian’s budget, procurement and audit documents are published.",
  records: [
    {
      title: "Naguilian Full Disclosure page",
      body: "The municipality’s own quarterly postings, back to 2023.",
      href: sources.fullDisclosure.href,
      cta: "Open Full Disclosure",
    },
    {
      title: "DILG Full Disclosure Policy Portal",
      body: "The national portal where every LGU uploads its budget, procurement and financial reports.",
      href: "https://fdpp.dilg.gov.ph/",
      cta: "Search the DILG portal",
    },
    {
      title: "PhilGEPS procurement notices",
      body: "Search bid notices and awards using “Municipality of Naguilian” as the procuring entity.",
      href: "https://notices.philgeps.gov.ph/",
      cta: "Search PhilGEPS",
    },
    {
      title: "COA annual audit reports",
      body: "The Commission on Audit’s yearly findings on local government finances.",
      href: "https://www.coa.gov.ph/reports/annual-audit-reports/",
      cta: "Find an audit report",
    },
    {
      title: "Appropriation ordinances",
      body: "The council measures that authorize the annual and supplemental budgets.",
      href: sources.ordinances2025.href,
      cta: "Browse ordinances",
    },
  ],
  officesEyebrow: "Offices",
  officesTitle: "Ask the offices that keep the records",
  officeIds: ["budget", "treasury", "accounting"] as const,
  pending:
    "We haven’t yet verified budget or revenue figures for Naguilian, so this page links to the records instead of quoting numbers.",
  checkedNote: `Links checked on ${lastChecked}.`,
  sources: [sources.fullDisclosure, sources.ordinances2025],
}

/* ── Not found ─────────────────────────────────────────────────────────── */

export const notFoundPage = {
  code: "404",
  title: "We couldn’t find that page",
  description: "The link may be old, or the page may have moved. Try one of these instead.",
  search: "Search services",
  home: "Go to the homepage",
  shortcuts: [
    { label: "All services", to: "/services" as const },
    { label: "Emergency hotlines", to: "/emergency" as const },
    { label: "Government", to: "/government" as const },
    { label: "Transparency", to: "/transparency" as const },
  ],
  report: "Followed a broken link? Tell us",
}
