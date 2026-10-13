import { Link } from "@tanstack/react-router"
import { WifiSlashIcon } from "@phosphor-icons/react"

import { Container } from "@/components/site/section"
import { offline } from "@/data/site"
import { useOnlineStatus } from "@/hooks/use-online-status"

/** Tells residents what still works when the connection drops. */
export function OfflineBanner() {
  const online = useOnlineStatus()
  if (online) return null
  return (
    <div role="status" className="border-b bg-secondary text-secondary-foreground">
      <Container className="flex flex-wrap items-center gap-x-2 gap-y-1 py-2 text-sm">
        <WifiSlashIcon className="size-4 shrink-0" aria-hidden />
        <span className="font-semibold">{offline.title}</span>
        <span>{offline.body}</span>
        <Link to="/emergency" className="font-semibold underline underline-offset-4">
          {offline.emergency}
        </Link>
      </Container>
    </div>
  )
}
