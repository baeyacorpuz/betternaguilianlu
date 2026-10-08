import { serviceCategories, services, type Service } from "@/data/site"

// Full names for office acronyms, so "social welfare" finds MSWDO services.
const officeAliases: Record<string, string> = {
  BPLO: "business permits and licensing office",
  MSWDO: "municipal social welfare and development office",
  "Rural Health Unit": "rhu",
  "Municipal Treasurer": "treasury",
  "Municipal Civil Registrar": "mcr lcr local civil registry",
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
const index = services.map((service) => {
  const category = serviceCategories.find((c) => c.id === service.category)!
  const fields: Field[] = [
    [service.name, 8],
    [(service.keywords ?? []).join(" "), 5],
    [`${service.office} ${officeAliases[service.office] ?? ""}`, 3],
    [category.name, 2],
    [category.description, 1],
  ].map(([text, weight]) => ({ words: words(text as string), text: normalize(text as string), weight: weight as number }))
  return { service, fields, compactName: normalize(service.name).replace(/ /g, "") }
})

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
export function searchServices(query: string, pool: Service[] = services): Service[] {
  const tokens = words(query)
  if (tokens.length === 0) return pool
  const needle = tokens.join("")

  return index
    .filter((entry) => pool.includes(entry.service))
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
