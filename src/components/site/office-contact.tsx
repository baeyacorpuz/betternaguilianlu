import { EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react"

import type { Office } from "@/data/charter"
import { serviceDetail } from "@/data/site"

const linkClass =
  "rounded-sm text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"

/**
 * The first number in a charter phone line as a `tel:` href:
 * "(072) 619-4917 / 4921 / 4928 loc. 1022" → "tel:+63726194917".
 */
function telHref(phone: string) {
  const digits = phone.split(/\/|loc\./)[0].replace(/\D/g, "")
  return `tel:+${digits.startsWith("63") ? digits : `63${digits.replace(/^0/, "")}`}`
}

/** An office's location, phone lines and email from its charter cover page. */
export function OfficeContact({ office }: { office: Office }) {
  const { contact } = serviceDetail
  const phones = office.phone.split(";").map((p) => p.trim()).filter(Boolean)

  return (
    <dl className="space-y-3 text-sm">
      <div className="flex items-start gap-2">
        <MapPinIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
        <div className="min-w-0">
          <dt className="sr-only">{contact.location}</dt>
          <dd className="[overflow-wrap:anywhere]">{office.address}</dd>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <PhoneIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
        <div className="min-w-0">
          <dt className="sr-only">{contact.phone}</dt>
          {phones.map((p) => (
            <dd key={p} className="[overflow-wrap:anywhere]">
              <a href={telHref(p)} className={linkClass}>
                {p}
              </a>
            </dd>
          ))}
        </div>
      </div>
      {office.email && (
        <div className="flex items-start gap-2">
          <EnvelopeSimpleIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
          <div className="min-w-0">
            <dt className="sr-only">{contact.email}</dt>
            <dd className="[overflow-wrap:anywhere]">
              <a href={`mailto:${office.email}`} className={linkClass}>
                {office.email}
              </a>
            </dd>
          </div>
        </div>
      )}
    </dl>
  )
}
