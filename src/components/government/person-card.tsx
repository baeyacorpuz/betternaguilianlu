import type { Icon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Person } from "@/data/government"

const honorific = /^(Hon|Atty|Engr|Dr|EnP)\.?\s+/
const suffix = /(,\s*[A-Z]{2,4}|\s+(Jr\.|Sr\.|II|III|IV))$/

/** "Hon. Rupert Paolo M. Rillera III" → "RR" */
function initials(name: string) {
  const parts = name.replace(honorific, "").replace(suffix, "").split(" ").filter((p) => !/^[A-Z]\.$/.test(p))
  return [parts[0], parts.at(-1)].map((p) => p?.[0] ?? "").join("")
}

export function PersonCard({
  person,
  role,
  icon: RoleIcon,
  size = "lg",
  heading: Heading = "h3",
  className,
}: {
  person: Person
  /** Badge above the name, e.g. "Mayor". */
  role?: string
  icon?: Icon
  size?: "lg" | "sm"
  heading?: "h2" | "h3" | "h4"
  className?: string
}) {
  const lg = size === "lg"
  return (
    <Card className={cn("h-full", !lg && "gap-4 py-5", className)}>
      <CardHeader className={cn("grid-cols-[auto_1fr] items-center gap-x-4", !lg && "gap-x-3 px-5")}>
        <Avatar className={cn("row-span-2 border-2 border-accent", lg ? "size-14" : "size-11")}>
          <AvatarFallback className={cn("bg-primary font-bold text-primary-foreground", lg ? "text-lg" : "text-sm")}>
            {initials(person.name)}
          </AvatarFallback>
        </Avatar>
        {role && (
          <Badge variant="secondary" className="gap-1 text-[10px] font-semibold tracking-wider uppercase">
            {RoleIcon && <RoleIcon weight="fill" />}
            {role}
          </Badge>
        )}
        <div className="min-w-0">
          <CardTitle className={cn("text-pretty", lg ? "text-lg" : "text-base leading-snug")}>
            <Heading>{person.name}</Heading>
          </CardTitle>
          <CardDescription className="text-pretty">{person.position}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}
