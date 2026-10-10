import * as React from "react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

/**
 * A compact one-row "at a glance" card: icon tile, a big value with its label, a divider, then supporting facts.
 * Stacks on small screens (the divider turns horizontal). Used by the live weather, sun and moon cards.
 */
export function GlanceCard({
  icon,
  lead,
  children,
  className,
  ...props
}: Omit<React.ComponentProps<typeof Card>, "children"> & {
  /** The icon glyph. It sits in a decorative tile, so it is hidden from assistive technology. */
  icon: React.ReactNode
  /** The primary text next to the tile, usually a `GlanceLead`. */
  lead: React.ReactNode
  /** The supporting content to the right of the divider. */
  children?: React.ReactNode
}) {
  return (
    <Card
      className={cn("w-full gap-3 p-3 sm:flex-row sm:items-center sm:gap-5 sm:px-4 sm:py-3", className)}
      {...props}
    >
      <div className="flex min-w-0 items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground [&_svg]:size-5"
        >
          {icon}
        </span>
        <div className="min-w-0">{lead}</div>
      </div>
      {children && (
        <>
          <div aria-hidden="true" className="h-px w-full shrink-0 bg-border sm:h-10 sm:w-px" />
          <div className="min-w-0 flex-1 space-y-0.5">{children}</div>
        </>
      )}
    </Card>
  )
}

export function GlanceLead({ value, label }: { value: React.ReactNode; label: React.ReactNode }) {
  return (
    <>
      <p className="text-2xl leading-none font-bold tracking-tight tabular-nums">{value}</p>
      <p className="mt-1 text-base leading-tight text-pretty text-muted-foreground">{label}</p>
    </>
  )
}

/** A line of short facts separated by a middle dot. Each fact stays on one line and the line wraps between facts. */
export function GlanceFacts({ facts }: { facts: React.ReactNode[] }) {
  return (
    <p className="text-base leading-snug text-muted-foreground tabular-nums">
      {facts.map((fact, i) => (
        <React.Fragment key={i}>
          {i > 0 && " "}
          <span className="whitespace-nowrap">
            {fact}
            {i < facts.length - 1 && <span aria-hidden="true"> ·</span>}
          </span>
        </React.Fragment>
      ))}
    </p>
  )
}

export function GlanceNote({ children }: { children: React.ReactNode }) {
  return <p className="text-xs leading-snug text-muted-foreground">{children}</p>
}

/** An inline source link: bold, primary and underlined so it never relies on color alone. */
export function GlanceLink({ className, children, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={cn(
        "rounded-sm font-bold text-primary underline underline-offset-2 outline-none hover:text-primary/90 focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
