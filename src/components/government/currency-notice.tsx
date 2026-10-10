import { ArrowUpRightIcon, InfoIcon } from "@phosphor-icons/react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { government, links } from "@/data/site"

/** Says the roster is the 2023 charter's and points to the official listing. */
export function CurrencyNotice() {
  const { currency } = government
  return (
    <Alert role="note">
      <InfoIcon />
      <AlertTitle className="line-clamp-none">{currency.title}</AlertTitle>
      <AlertDescription>
        <p>{currency.body}</p>
        <a
          href={links.officials}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-sm font-semibold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          {currency.linkLabel}
          <ArrowUpRightIcon className="size-3.5" />
        </a>
      </AlertDescription>
    </Alert>
  )
}
