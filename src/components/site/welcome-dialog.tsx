import * as React from "react"
import { Link } from "@tanstack/react-router"
import { ArrowRightIcon, LightbulbIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { welcome } from "@/data/site"
import { useWelcome } from "@/hooks/use-welcome"

export function WelcomeDialog() {
  const { open, dismiss, dontShowAgain, setDontShowAgain } = useWelcome()
  const contentRef = React.useRef<HTMLDivElement>(null)

  return (
    <Dialog open={open} onOpenChange={(next) => !next && dismiss()}>
      <DialogContent
        ref={contentRef}
        tabIndex={-1}
        // focus the dialog itself so a scrollable dialog opens at its title, not scrolled to the footer
        onOpenAutoFocus={(event) => {
          event.preventDefault()
          contentRef.current?.focus({ preventScroll: true })
        }}
        className="max-h-[calc(100dvh-2rem)] gap-6 overflow-y-auto rounded-xl outline-none p-6 sm:max-w-xl sm:p-8">
        <DialogHeader className="items-start gap-4 pr-6 text-left sm:flex-row">
          <img src="/naguilian-icon.svg" alt="" className="size-10 shrink-0 rounded-lg sm:size-12" />
          <div className="flex flex-col gap-1.5">
            <DialogTitle className="text-xl leading-tight font-bold tracking-tight sm:text-2xl">
              {welcome.title}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-pretty">
              {welcome.description}
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-5">
          <section className="flex flex-col gap-1.5">
            <h3 className="text-base font-semibold">{welcome.find.title}</h3>
            <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{welcome.find.body}</p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="flex flex-wrap items-center gap-2 text-base font-semibold">
              {welcome.beta.title}
              <Badge className="rounded-full px-2 text-[11px] font-semibold tracking-wider uppercase">
                {welcome.beta.badge}
              </Badge>
            </h3>
            <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{welcome.beta.body}</p>
          </section>

          <section className="flex gap-3 rounded-xl bg-accent p-4 text-accent-foreground sm:p-5">
            <LightbulbIcon className="mt-0.5 size-5 shrink-0" />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-sm font-semibold">{welcome.missing.title}</h3>
              <p className="text-sm leading-relaxed text-pretty">{welcome.missing.body}</p>
              <Link
                to="/contact"
                onClick={dismiss}
                className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-sm text-sm font-semibold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                {welcome.missing.linkLabel}
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </section>
        </div>

        <DialogFooter className="flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Checkbox
              id="welcome-dont-show"
              checked={dontShowAgain}
              onCheckedChange={(checked) => setDontShowAgain(checked === true)}
            />
            <Label htmlFor="welcome-dont-show" className="font-medium">
              {welcome.dontShowAgain}
            </Label>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="outline" size="lg" onClick={dismiss}>
              {welcome.exploreLabel}
            </Button>
            <Button asChild size="lg">
              <Link to="/about" hash="get-involved" onClick={dismiss}>
                {welcome.contributeLabel}
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
