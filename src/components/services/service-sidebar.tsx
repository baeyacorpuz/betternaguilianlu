import { BuildingOfficeIcon, ChatCenteredTextIcon, ClockIcon, EnvelopeSimpleIcon, MapPinIcon, PhoneIcon, ReceiptIcon } from "@phosphor-icons/react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { SourceLink } from "@/components/site/section"
import { charterPage, feedbackMechanism, offices, type Service } from "@/data/charter"
import { serviceDetail } from "@/data/site"

export function ServiceSidebar({ service }: { service: Service }) {
  const { summary, contact, source, feedback } = serviceDetail
  const department = offices.find((o) => o.id === service.department)
  const phones = department?.phone.split(";").map((p) => p.trim()).filter(Boolean) ?? []

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
            <dl className="space-y-3 text-sm">
              <div className="grid grid-cols-[1rem_minmax(0,1fr)] gap-x-2">
                <dt className="col-start-1 row-start-1 pt-0.5 text-muted-foreground">
                  <MapPinIcon className="size-4" aria-hidden />
                  <span className="sr-only">{contact.location}</span>
                </dt>
              <dd className="col-start-2 [overflow-wrap:anywhere]">{department.address}</dd>
              </div>
              <div className="grid grid-cols-[1rem_minmax(0,1fr)] gap-x-2">
                <dt className="col-start-1 row-start-1 pt-0.5 text-muted-foreground">
                  <PhoneIcon className="size-4" aria-hidden />
                  <span className="sr-only">{contact.phone}</span>
                </dt>
              {phones.map((p) => (
                  <dd key={p} className="col-start-2 [overflow-wrap:anywhere]">
                    {p}
                  </dd>
                ))}
              </div>
              {department.email && (
                <div className="grid grid-cols-[1rem_minmax(0,1fr)] gap-x-2">
                  <dt className="col-start-1 row-start-1 pt-0.5 text-muted-foreground">
                    <EnvelopeSimpleIcon className="size-4" aria-hidden />
                    <span className="sr-only">{contact.email}</span>
                  </dt>
                <dd className="col-start-2 [overflow-wrap:anywhere]">
                    <a
                      href={`mailto:${department.email}`}
                      className="rounded-sm text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      {department.email}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </CardContent>
        </Card>
      )}

      <Card className="gap-3">
        <CardHeader>
          <h2 className="text-base leading-none font-semibold">{source.title}</h2>
          <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{source.description}</p>
        </CardHeader>
        <CardFooter>
          <SourceLink href={charterPage(service.page)} label={`${source.linkPrefix} ${service.page}`} />
        </CardFooter>
      </Card>

      <Card className="gap-3">
        <CardHeader>
          <h2 className="flex items-center gap-2 text-base leading-none font-semibold">
              <ChatCenteredTextIcon className="size-4" aria-hidden />
              {feedback.title}
            </h2>
          <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{feedbackMechanism.summary}</p>
        </CardHeader>
        <CardFooter>
          <SourceLink href={charterPage(feedbackMechanism.page)} label={feedback.linkLabel} />
        </CardFooter>
      </Card>
    </aside>
  )
}
