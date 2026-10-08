import * as React from "react"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />
}

export function Section({
  className,
  tone = "default",
  ...props
}: React.ComponentProps<"section"> & { tone?: "default" | "muted" | "brand" }) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        tone === "muted" && "bg-muted/60",
        tone === "brand" && "bg-brand text-brand-foreground",
        className
      )}
      {...props}
    />
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  invert,
}: {
  eyebrow?: string
  title: string
  description?: React.ReactNode
  className?: string
  invert?: boolean
}) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12",
        className
      )}
    >
      <div className="space-y-3">
        {eyebrow && (
          <Badge
            variant="secondary"
            className={cn(
              "rounded-full px-2.5 text-[11px] font-semibold tracking-wider uppercase",
              invert && "bg-white/10 text-brand-foreground"
            )}
          >
            {eyebrow}
          </Badge>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      </div>
      {description && (
        <p
          className={cn(
            "max-w-sm text-sm leading-relaxed text-pretty",
            invert ? "text-brand-foreground/75" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export function SourceLink({
  href,
  label = "Source",
  className,
}: {
  href: string
  label?: string
  className?: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-1 text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline",
        className
      )}
    >
      {label}
      <ArrowUpRightIcon className="size-3" />
    </a>
  )
}
