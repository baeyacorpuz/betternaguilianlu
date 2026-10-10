import { Link } from "@tanstack/react-router"
import { ArrowRightIcon } from "@phosphor-icons/react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { OfficeContact } from "@/components/site/office-contact"
import { offices } from "@/data/charter"
import type { UnitHead } from "@/data/government"
import { government } from "@/data/site"

export function UnitHeadCard({ entry }: { entry: UnitHead }) {
  const copy = government.officials
  const office = offices.find((o) => o.id === entry.officeId)

  return (
    <Card className="h-full gap-4">
      <CardHeader>
        <CardTitle className="text-base leading-snug text-pretty">
          <h2>{entry.unit}</h2>
        </CardTitle>
        <p className="text-sm font-semibold">{entry.head.name}</p>
        <CardDescription className="text-pretty">{entry.head.position}</CardDescription>
      </CardHeader>
      {(entry.oic || office) && (
        <CardContent className="space-y-4">
          {entry.oic && (
            <>
              <Separator />
              <div className="text-sm">
                <p className="text-xs font-medium text-muted-foreground">{copy.oic}</p>
                <p className="mt-1 font-medium">{entry.oic.name}</p>
                <p className="text-muted-foreground">{entry.oic.position}</p>
              </div>
            </>
          )}
          {office && (
            <>
              <Separator />
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">{copy.contact}</p>
                <OfficeContact office={office} />
              </div>
            </>
          )}
        </CardContent>
      )}
      {entry.servicesQuery && (
        <CardFooter className="mt-auto border-t [.border-t]:pt-4">
          <Link
            to="/services"
            search={{ q: entry.servicesQuery }}
            className="inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {copy.services}
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}
