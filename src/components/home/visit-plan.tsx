import {
  ArrowUpRightIcon,
  BuildingsIcon,
  ClipboardTextIcon,
  ListChecksIcon,
  PhoneIcon,
} from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Container, Section } from "@/components/site/section"
import { links } from "@/data/site"

const steps = [
  { icon: ClipboardTextIcon, title: "Check the charter", body: "Review the published steps, requirements, and fees." },
  { icon: ListChecksIcon, title: "Prepare documents", body: "Bring the listed requirements and valid ID." },
  { icon: BuildingsIcon, title: "Visit the Municipal Hall", body: "Go to the office named for your service." },
]

export function VisitPlan() {
  return (
    <Section tone="muted">
      <Container>
        <Card className="overflow-hidden p-0 md:grid md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 p-6 sm:p-10">
            <Badge variant="secondary" className="rounded-full px-2.5 text-[11px] font-semibold tracking-wider uppercase">
              Plan your visit
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Plan a Municipal Hall visit with the Citizen’s Charter
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              Review published service steps before visiting the Municipal Hall. For visit questions, contact the
              Municipal Hall directly. This portal does not schedule visits.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href={links.citizensCharter}>
                  Open Citizen’s Charter
                  <ArrowUpRightIcon />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/" hash="contact">
                  <PhoneIcon />
                  Contact Municipal Hall
                </Link>
              </Button>
            </div>
          </div>
          <CardContent className="border-t bg-accent/40 p-6 sm:p-10 md:border-t-0 md:border-l">
            <ol className="space-y-5">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-card text-primary shadow-xs">
                    <step.icon className="size-5" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-muted-foreground">Step {i + 1}</p>
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Separator className="my-6" />
            <p className="text-xs text-muted-foreground">Municipal Hall · Naguilian National Highway, Ortiz</p>
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}
