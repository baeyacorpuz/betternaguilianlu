import { offices, type OfficeId } from "@/data/charter"
import { serviceCategories, type Service } from "@/data/site"

// Acronyms and common names per department, so "mswdo" or "treasurer" finds the right services.
const officeAliases: Record<OfficeId, string> = {
  mayor: "mayor mayors office tourism",
  sb: "sb sangguniang bayan vice mayor legislative",
  accounting: "accounting accountant",
  agriculture: "mao municipal agriculture agriculturist farmer",
  assessor: "assessor assessment",
  budget: "budget mbo",
  engineering: "mea engineer engineering building official",
  "civil-registry": "mcr lcr mcro local civil registrar civil registry",
  health: "rhu mho health center municipal health",
  planning: "mpdo planning zoning development coordinator",
  market: "market public market oma",
  "sb-secretariat": "sb secretariat sangguniang bayan secretary",
  "social-welfare": "mswdo dswd social welfare swo",
  treasury: "mto treasurer treasury cashier",
  "general-services": "gso general service",
  environment: "menro enro environment natural resource",
}

// Lowercase, strip accents and punctuation ("Mayor's" → "mayors", "check-up" → "check up").
export function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

const words = (text: string) => normalize(text).split(" ").filter(Boolean)

type Field = { words: string[]; text: string; weight: number }

// Heavier fields rank higher: a hit in the service name beats one in the category description.
function buildIndex(services: Service[]) {
  return services.map((service) => {
    const category = serviceCategories.find((c) => c.id === service.category)!
    const fields: Field[] = [
      [service.name, 8],
      [(service.keywords ?? []).join(" "), 5],
      [`${service.office} ${offices.find((o) => o.id === service.department)?.name ?? ""} ${officeAliases[service.department]}`, 3],
      [category.name, 2],
      [category.description, 1],
    ].map(([text, weight]) => ({ words: words(text as string), text: normalize(text as string), weight: weight as number }))
    return { service, fields, compactName: normalize(service.name).replace(/ /g, "") }
  })
}

type Index = ReturnType<typeof buildIndex>
const indexes = new WeakMap<Service[], Index>()

function indexFor(pool: Service[]) {
  let index = indexes.get(pool)
  if (!index) indexes.set(pool, (index = buildIndex(pool)))
  return index
}

function scoreToken(fields: Field[], token: string) {
  let best = 0
  for (const f of fields) {
    // whole word > word prefix > anywhere inside (only for longer tokens, to avoid noise like "a")
    const score = f.words.includes(token)
      ? 3
      : f.words.some((w) => w.startsWith(token))
        ? 2
        : token.length >= 4 && f.text.replace(/ /g, "").includes(token)
          ? 1
          : 0
    best = Math.max(best, score * f.weight)
  }
  return best
}

/** Services matching every word of `query` (in any order), best matches first. */
export function searchServices(query: string, pool: Service[]): Service[] {
  const tokens = words(query)
  if (tokens.length === 0) return pool
  const needle = tokens.join("")

  return indexFor(pool)
    .map((entry) => {
      const scores = tokens.map((t) => scoreToken(entry.fields, t))
      if (scores.includes(0)) return null
      // bonus when the query reads as the start of the name, e.g. "birth cert"
      const bonus = entry.compactName.startsWith(needle) ? 20 : 0
      return { service: entry.service, score: scores.reduce((a, b) => a + b, 0) + bonus }
    })
    .filter((r) => r !== null)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.service)
}
