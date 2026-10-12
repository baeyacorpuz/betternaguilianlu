import { EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react"

import type { Office } from "@/data/charter"
import { serviceDetail } from "@/data/site"

const rowClass = "grid grid-cols-[1rem_minmax(0,1fr)] gap-x-2"
const labelClass = "col-start-1 row-start-1 pt-0.5 text-muted-foreground"
const valueClass = "col-start-2 [overflow-wrap:anywhere]"
const linkClass =
  "inline-flex min-h-6 items-center rounded-sm text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"

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
      {/* each row is dt (icon + screen-reader label) beside its dd values; dt/dd stay direct children of the row */}
      <div className={rowClass}>
        <dt className={labelClass}>
          <MapPinIcon className="size-4" aria-hidden />
          <span className="sr-only">{contact.location}</span>
        </dt>
        <dd className={valueClass}>{office.address}</dd>
      </div>
      <div className={rowClass}>
        <dt className={labelClass}>
          <PhoneIcon className="size-4" aria-hidden />
          <span className="sr-only">{contact.phone}</span>
        </dt>
        {phones.map((p) => (
          <dd key={p} className={valueClass}>
            <a href={telHref(p)} className={linkClass}>
              {p}
            </a>
          </dd>
        ))}
      </div>
      {office.email && (
        <div className={rowClass}>
          <dt className={labelClass}>
            <EnvelopeSimpleIcon className="size-4" aria-hidden />
            <span className="sr-only">{contact.email}</span>
          </dt>
          <dd className={valueClass}>
            <a href={`mailto:${office.email}`} className={linkClass}>
              {office.email}
            </a>
          </dd>
        </div>
      )}
    </dl>
  )
}
