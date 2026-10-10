import { ArrowUpRightIcon, InfoIcon } from "@phosphor-icons/react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { government, links } from "@/data/site"

const notices = {
  leadership: { ...government.notices.leadership, href: links.officials },
  officials: { ...government.notices.officials, linkLabel: undefined, href: undefined },
  barangays: { ...government.notices.barangays, href: links.demographics },
}

/** Says where a Government page's listing comes from and how current it is. */
export function SourceNotice({ page }: { page: keyof typeof notices }) {
  const notice = notices[page]
  return (
    <Alert role="note">
      <InfoIcon />
      <AlertTitle className="line-clamp-none">{notice.title}</AlertTitle>
      <AlertDescription>
        <p>{notice.body}</p>
        {notice.href && notice.linkLabel && (
          <a
            href={notice.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-sm font-semibold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {notice.linkLabel}
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        )}
      </AlertDescription>
    </Alert>
  )
}
