import { ArrowUpRightIcon, FacebookLogoIcon, MegaphoneIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, Section, SectionHeading } from "@/components/site/section"
import { links } from "@/data/site"

export function LatestUpdates() {
  return (
    <Section tone="brand" className="relative overflow-hidden">
      <MegaphoneIcon aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 size-64 -rotate-12 text-white/5" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            invert
            eyebrow="Latest updates"
            title="Latest Updates"
            className="mb-4 md:block"
          />
          <p className="mb-6 max-w-md text-sm leading-relaxed text-brand-foreground/75">
            Naguilian’s official homepage points residents to Facebook for updates. We link to the source without
            copying or embedding post content.
          </p>
          <Button asChild variant="inverse">
            <a href={links.facebook} target="_blank" rel="noreferrer">
              Open official Facebook page
              <ArrowUpRightIcon />
            </a>
          </Button>
        </div>
        <Card className="border-white/10 bg-white/5 text-brand-foreground backdrop-blur">
          <CardHeader className="grid-cols-[auto_1fr] gap-x-4">
            <span className="row-span-2 flex size-12 items-center justify-center rounded-full bg-[#1877F2] text-white">
              <FacebookLogoIcon weight="fill" className="size-6" />
            </span>
            <p className="text-[11px] font-semibold tracking-wider text-brand-foreground/60 uppercase">Official Facebook updates</p>
            <CardTitle className="text-lg">Municipality of Naguilian on Facebook</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-brand-foreground/70">
              The official homepage points residents to this Facebook page for updates.
            </CardDescription>
          </CardContent>
          <CardFooter className="border-t border-white/10 [.border-t]:pt-4">
            <a href={links.officialSite} className="inline-flex items-center gap-1 text-xs font-medium text-brand-foreground/70 hover:text-brand-foreground hover:underline">
              Updates source <ArrowUpRightIcon className="size-3" />
            </a>
          </CardFooter>
        </Card>
      </Container>
    </Section>
  )
}
