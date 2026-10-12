import * as React from "react"
import { CheckCircleIcon, EnvelopeSimpleIcon, GithubLogoIcon, ThumbsDownIcon, ThumbsUpIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { charterPage, type Service } from "@/data/charter"
import { links, mailto, serviceDetail } from "@/data/site"
import { useAccuracyVote } from "@/hooks/use-accuracy-vote"

function reportText(service: Service, issue: string, details: string, visited: string) {
  const url = typeof window === "undefined" ? `/services/${service.id}` : window.location.href
  const title = `Outdated info: ${service.name}`
  const body = [
    `Service: ${service.name}`,
    `Page: ${url}`,
    `Charter page: ${charterPage(service.page)}`,
    "",
    `What was different: ${issue}`,
    `When I visited: ${visited || "not given"}`,
    "",
    "What I saw:",
    details || "(not given)",
  ].join("\n")
  return { title, body }
}

export function AccuracyFeedback({ service }: { service: Service }) {
  const copy = serviceDetail.accuracy
  const [vote, setVote] = useAccuracyVote(service.id)
  const [issue, setIssue] = React.useState("")
  const [details, setDetails] = React.useState("")
  const [visited, setVisited] = React.useState("")
  const id = React.useId()

  const report = reportText(service, issue, details, visited)
  const emailHref = mailto(report.title, report.body)
  const githubHref = `${links.contribute}/issues/new?${new URLSearchParams({ title: report.title, body: report.body })}`

  return (
    <Card className="gap-4">
      <CardHeader>
        <h2 id={`${id}-title`} className="text-xl leading-none font-semibold">
          {copy.title}
        </h2>
        <CardDescription className="text-pretty">{copy.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        {vote === "up" || vote === "reported" ? (
          <div role="status" className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="flex items-center gap-2 text-sm font-medium">
              <CheckCircleIcon weight="fill" className="size-5 shrink-0 text-primary" aria-hidden />
              {vote === "up" ? copy.thanks : copy.reportedThanks}
            </p>
            <Button variant="link" size="sm" className="h-auto px-0" onClick={() => setVote(undefined)}>
              {copy.change}
            </Button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => setVote("up")}>
              <ThumbsUpIcon aria-hidden />
              {copy.yes}
            </Button>
            <Button
              variant={vote === "down" ? "secondary" : "outline"}
              aria-pressed={vote === "down"}
              aria-expanded={vote === "down"}
              aria-controls={`${id}-form`}
              onClick={() => setVote(vote === "down" ? undefined : "down")}
            >
              <ThumbsDownIcon aria-hidden />
              {copy.no}
            </Button>
          </div>
        )}

        {vote === "down" && (
          <div id={`${id}-form`} className="space-y-5 rounded-lg border bg-muted/40 p-4">
            <fieldset className="space-y-3">
              <legend className="mb-3 text-sm font-semibold">{copy.issueLabel}</legend>
              <RadioGroup value={issue} onValueChange={setIssue} className="gap-2">
                {copy.issues.map((option, i) => (
                  <div key={option} className="flex items-center gap-2">
                    <RadioGroupItem id={`${id}-issue-${i}`} value={option} />
                    <Label htmlFor={`${id}-issue-${i}`} className="font-normal">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </fieldset>
            <div className="space-y-2">
              <Label htmlFor={`${id}-details`}>{copy.detailsLabel}</Label>
              <Textarea
                id={`${id}-details`}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={copy.detailsPlaceholder}
                className="bg-card"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-visited`}>{copy.visitLabel}</Label>
              <Input
                id={`${id}-visited`}
                type="month"
                value={visited}
                onChange={(e) => setVisited(e.target.value)}
                className="w-full bg-card sm:w-56"
              />
            </div>
          </div>
        )}
      </CardContent>

      {vote === "down" && (
        <CardFooter className="flex-col items-start gap-3 border-t [.border-t]:pt-4">
          <div className="flex flex-wrap gap-2">
            {issue ? (
              <>
                <Button asChild>
                  <a href={emailHref} onClick={() => setVote("reported")}>
                    <EnvelopeSimpleIcon aria-hidden />
                    {copy.email}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={githubHref} target="_blank" rel="noreferrer" onClick={() => setVote("reported")}>
                    <GithubLogoIcon aria-hidden />
                    {copy.github}
                  </a>
                </Button>
              </>
            ) : (
              <>
                <Button disabled>
                  <EnvelopeSimpleIcon aria-hidden />
                  {copy.email}
                </Button>
                <Button disabled variant="outline">
                  <GithubLogoIcon aria-hidden />
                  {copy.github}
                </Button>
              </>
            )}
          </div>
          <p className="text-xs text-pretty text-muted-foreground">{copy.privacy}</p>
        </CardFooter>
      )}
    </Card>
  )
}
