import { BuildingOfficeIcon, ChatCenteredTextIcon, ClockIcon, ReceiptIcon } from "@phosphor-icons/react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { OfficeContact } from "@/components/site/office-contact"
import { feedbackMechanism, offices, type Service } from "@/data/charter"
import { serviceDetail } from "@/data/site"

export function ServiceSidebar({ service }: { service: Service }) {
  const { summary, contact, feedback } = serviceDetail
  const department = offices.find((o) => o.id === service.department)

  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start" aria-label={serviceDetail.sidebarLabel}>
      <Card className="gap-4">
        <CardHeader>
          <h2 className="text-base leading-none font-semibold">{summary.title}</h2>
        </CardHeader>
        <CardContent>
          <dl className="space-y-3 text-sm">
            <div className="grid grid-cols-[1rem_minmax(0,1fr)] gap-x-2">
              <dt className="col-span-2 flex items-start gap-2 text-xs font-medium text-muted-foreground">
                <ClockIcon className="mt-px size-4 shrink-0" aria-hidden />
                {summary.totalTime}
              </dt>
              <dd className="col-start-2 [overflow-wrap:anywhere]">{service.totalTime ?? summary.notStated}</dd>
            </div>
            {service.totalFees && (
              <div className="grid grid-cols-[1rem_minmax(0,1fr)] gap-x-2">
                <dt className="col-span-2 flex items-start gap-2 text-xs font-medium text-muted-foreground">
                  <ReceiptIcon className="mt-px size-4 shrink-0" aria-hidden />
                  {summary.totalFees}
                </dt>
                <dd className="col-start-2 [overflow-wrap:anywhere]">{service.totalFees}</dd>
              </div>
            )}
            <div className="grid grid-cols-[1rem_minmax(0,1fr)] gap-x-2">
              <dt className="col-span-2 flex items-start gap-2 text-xs font-medium text-muted-foreground">
                <BuildingOfficeIcon className="mt-px size-4 shrink-0" aria-hidden />
                {summary.office}
              </dt>
              <dd className="col-start-2 [overflow-wrap:anywhere]">{service.office}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      {department && (
        <Card className="gap-4">
          <CardHeader>
            <h2 className="text-base leading-none font-semibold">{contact.title}</h2>
            <p className="text-sm text-muted-foreground">{department.name}</p>
          </CardHeader>
          <CardContent>
            <OfficeContact office={department} />
          </CardContent>
        </Card>
      )}

      <Card className="gap-3">
        <CardHeader>
          <h2 className="flex items-center gap-2 text-base leading-none font-semibold">
              <ChatCenteredTextIcon className="size-4" aria-hidden />
              {feedback.title}
            </h2>
          <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{feedbackMechanism.summary}</p>
        </CardHeader>
      </Card>
    </aside>
  )
}
