import * as React from "react"

const SITE = "Better Naguilian, La Union"

/** Sets the tab title to "<title> | Better Naguilian, La Union" while the page is mounted. */
export function useDocumentTitle(title?: string) {
  React.useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : SITE
  }, [title])
}
