import { BuildingOfficeIcon, ClockIcon, ReceiptIcon, UserIcon } from "@phosphor-icons/react"

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import type { Requirement, Service, ServiceAction } from "@/data/charter"
import { serviceDetail } from "@/data/site"

/** Groups consecutive requirements by their printed sub-heading, preserving order. */
function groupRequirements(requirements: Requirement[]) {
  const groups: { heading?: string; items: Requirement[] }[] = []
  for (const r of requirements) {
    const last = groups[groups.length - 1]
    if (last && last.heading === r.group) last.items.push(r)
    else groups.push({ heading: r.group, items: [r] })
  }
  return groups
}

export function RequirementsCard({ requirements }: { requirements: Requirement[] }) {
  const copy = serviceDetail.requirements
  return (
    <Card className="gap-4">
      <CardHeader>
        <h2 id="requirements-title" className="text-xl leading-none font-semibold">{copy.title}</h2>
        <CardDescription>{copy.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {requirements.length === 0 ? (
          <p className="text-sm text-muted-foreground">{copy.empty}</p>
        ) : (
          <div className="space-y-5">
            {groupRequirements(requirements).map((group, gi) => (
              <div key={gi} className="space-y-3">
                {group.heading && <h3 className="text-sm font-semibold text-foreground">{group.heading}</h3>}
                <ul className="divide-y">
                  {group.items.map((r, i) => (
                    <li key={i} className="py-3 first:pt-0 last:pb-0">
                      <p className="text-base leading-relaxed text-pretty [overflow-wrap:anywhere]">{r.item}</p>
                      {r.whereToSecure && (
                        <p className="mt-1 flex items-start gap-1.5 text-sm text-muted-foreground">
                          <BuildingOfficeIcon className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                          <span className="min-w-0 [overflow-wrap:anywhere]">
                            <span className="sr-only">{copy.whereToSecure}: </span>
                            {r.whereToSecure}
                          </span>
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function ActionRow({ action }: { action: ServiceAction }) {
  const copy = serviceDetail.steps
  const facts = [
    { label: copy.fee, value: action.fee, icon: ReceiptIcon },
    { label: copy.time, value: action.time, icon: ClockIcon },
    { label: copy.responsible, value: action.responsible, icon: UserIcon },
  ].filter((f) => f.value)

  return (
    <li className="rounded-md bg-muted/60 px-3 py-2.5">
      {action.action && (
        <p className="text-sm leading-relaxed text-pretty [overflow-wrap:anywhere]">{action.action}</p>
      )}
      {facts.length > 0 && (
        <dl className={action.action ? "mt-2 flex flex-wrap gap-x-5 gap-y-1.5" : "flex flex-wrap gap-x-5 gap-y-1.5"}>
          {facts.map((f) => (
            <div key={f.label} className="flex min-w-0 max-w-full items-start gap-1.5 text-sm">
              <f.icon className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" aria-hidden />
              <dt className="sr-only">{f.label}</dt>
              <dd className="min-w-0 text-muted-foreground [overflow-wrap:anywhere]">{f.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </li>
  )
}

export function StepsCard({ steps }: { steps: Service["steps"] }) {
  const copy = serviceDetail.steps
  return (
    <Card className="gap-4">
      <CardHeader>
        <h2 id="steps-title" className="text-xl leading-none font-semibold">{copy.title}</h2>
        <CardDescription>{copy.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {steps.length === 0 ? (
          <p className="text-sm text-muted-foreground">{copy.empty}</p>
        ) : (
          <ol className="space-y-5">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1 space-y-2">
                  {step.client && (
                    <p className="text-base leading-relaxed font-medium text-pretty [overflow-wrap:anywhere]">
                      {step.client}
                    </p>
                  )}
                  {step.actions.length > 0 && (
                    <ul className="space-y-2">
                      {step.actions.map((a, ai) => (
                        <ActionRow key={ai} action={a} />
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </CardContent>
    </Card>
  )
}
