import * as React from "react"

export type AccuracyVote = "up" | "down"

const key = (serviceId: string) => `bn-accuracy:${serviceId}`

function read(serviceId: string): AccuracyVote | undefined {
  try {
    const v = localStorage.getItem(key(serviceId))
    return v === "up" || v === "down" ? v : undefined
  } catch {
    return undefined
  }
}

/** The resident's "was this accurate?" answer for a service, remembered on this device. */
export function useAccuracyVote(serviceId: string) {
  const [vote, setVoteState] = React.useState<AccuracyVote | undefined>(() => read(serviceId))

  // a new service page reuses the component, so re-read when the id changes
  const [lastId, setLastId] = React.useState(serviceId)
  if (lastId !== serviceId) {
    setLastId(serviceId)
    setVoteState(read(serviceId))
  }

  const setVote = React.useCallback(
    (next: AccuracyVote | undefined) => {
      setVoteState(next)
      try {
        if (next) localStorage.setItem(key(serviceId), next)
        else localStorage.removeItem(key(serviceId))
      } catch {
        // storage unavailable (private mode); the answer just isn't remembered
      }
    },
    [serviceId]
  )

  return [vote, setVote] as const
}
