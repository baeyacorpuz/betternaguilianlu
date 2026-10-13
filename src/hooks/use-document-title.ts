import * as React from "react"

const SITE = "Better Naguilian, La Union"

/** Sets the tab title to "<title> | Better Naguilian, La Union" while the page is mounted. */
export function useDocumentTitle(title?: string) {
  React.useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : SITE
    // restore the site title so routes without their own title don't inherit this one
    return () => {
      document.title = SITE
    }
  }, [title])
}
