import * as React from "react"
import {
  ArrowCounterClockwiseIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  TrophyIcon,
  XCircleIcon,
} from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Container, Section, SectionHeading, SourceLink } from "@/components/site/section"
import { links, quiz } from "@/data/site"

export function Quiz() {
  const [index, setIndex] = React.useState(0)
  const [selected, setSelected] = React.useState<string>("")
  const [checked, setChecked] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [done, setDone] = React.useState(false)

  const q = quiz[index]
  const correct = checked && Number(selected) === q.answer

  const check = () => {
    setChecked(true)
    if (Number(selected) === q.answer) setScore((s) => s + 1)
  }

  const next = () => {
    if (index === quiz.length - 1) {
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected("")
    setChecked(false)
  }

  const reset = () => {
    setIndex(0)
    setSelected("")
    setChecked(false)
    setScore(0)
    setDone(false)
  }

  return (
    <Section id="quiz">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Naguilian quiz"
            title="Naguilian Quiz"
            className="mb-4 md:block"
          />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Answer five short questions drawn from the official history and demographic pages.
          </p>
          <div className="mt-6 flex size-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
            <TrophyIcon className="size-8" />
          </div>
        </div>

        <Card className="border-t-4 border-t-primary">
          {done ? (
            <>
              <CardHeader className="items-center text-center">
                <TrophyIcon weight="fill" className="mx-auto mb-2 size-12 text-chart-5" />
                <CardTitle className="text-2xl">
                  You scored {score} of {quiz.length}
                </CardTitle>
                <CardDescription>
                  {score === quiz.length
                    ? "Perfect! You know Naguilian well."
                    : "Nice effort. Read the Brief History above and try again."}
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button onClick={reset}>
                  <ArrowCounterClockwiseIcon />
                  Play again
                </Button>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader className="gap-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-[10px] font-semibold tracking-wider uppercase">
                    Question {index + 1} of {quiz.length}
                  </Badge>
                  <span className="text-xs text-muted-foreground tabular-nums">Score {score}</span>
                </div>
                <Progress value={((index + (checked ? 1 : 0)) / quiz.length) * 100} className="h-1.5" />
                <CardTitle className="pt-2 text-lg leading-snug">{q.question}</CardTitle>
                <CardDescription>Choose one answer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={selected} onValueChange={setSelected} disabled={checked} className="gap-2">
                  {q.options.map((option, i) => {
                    const id = `q${index}-o${i}`
                    const isAnswer = checked && i === q.answer
                    const isWrongPick = checked && String(i) === selected && i !== q.answer
                    return (
                      <Label
                        key={option}
                        htmlFor={id}
                        className={cn(
                          "cursor-pointer rounded-lg border p-4 font-normal transition-colors hover:bg-accent/50 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent/60",
                          isAnswer && "border-primary bg-accent",
                          isWrongPick && "border-destructive/60 bg-destructive/5 has-[[data-state=checked]]:border-destructive/60 has-[[data-state=checked]]:bg-destructive/5",
                          checked && "cursor-default"
                        )}
                      >
                        <RadioGroupItem id={id} value={String(i)} />
                        <span className="flex-1">{option}</span>
                        {isAnswer && <CheckCircleIcon weight="fill" className="size-5 text-primary" />}
                        {isWrongPick && <XCircleIcon weight="fill" className="size-5 text-destructive" />}
                      </Label>
                    )
                  })}
                </RadioGroup>
                {checked && (
                  <Alert variant={correct ? "default" : "destructive"}>
                    {correct ? <CheckCircleIcon weight="fill" /> : <XCircleIcon weight="fill" />}
                    <AlertTitle>{correct ? "Correct!" : "Not quite."}</AlertTitle>
                    <AlertDescription>{q.explanation}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter className="justify-between border-t [.border-t]:pt-4">
                <SourceLink href={links.history} label="Question source" />
                {checked ? (
                  <Button onClick={next}>
                    {index === quiz.length - 1 ? "See results" : "Next question"}
                    <ArrowRightIcon />
                  </Button>
                ) : (
                  <Button onClick={check} disabled={!selected}>
                    Check answer
                    <ArrowRightIcon />
                  </Button>
                )}
              </CardFooter>
            </>
          )}
        </Card>
      </Container>
    </Section>
  )
}
