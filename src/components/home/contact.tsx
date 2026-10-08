import { ArrowRightIcon, EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, Section, SectionHeading, SourceLink } from "@/components/site/section"
import { contact, links, moreWays } from "@/data/site"

const iconBox = "mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground"

export function Contact() {
  return (
    <Section id="contact" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="Contact information"
          title="Contact Information"
          description="Use the published address, phone number, or email contacts for Municipal Hall inquiries."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <span className={iconBox}><PhoneIcon className="size-5" /></span>
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a href={`tel:${contact.phoneDialable}`} className="text-sm font-semibold text-primary hover:underline">
                {contact.phone}
              </a>
            </CardContent>
            <CardFooter className="mt-auto border-t [.border-t]:pt-4"><SourceLink href={links.officialSite} label="Contact source" /></CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <span className={iconBox}><EnvelopeSimpleIcon className="size-5" /></span>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5">
              {contact.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="block truncate text-sm font-semibold text-primary hover:underline">
                  {email}
                </a>
              ))}
            </CardContent>
            <CardFooter className="mt-auto border-t [.border-t]:pt-4"><SourceLink href={links.officialSite} label="Contact source" /></CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <span className={iconBox}><MapPinIcon className="size-5" /></span>
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent>
              <address className="text-sm leading-relaxed text-muted-foreground not-italic">{contact.address}</address>
            </CardContent>
            <CardFooter className="mt-auto border-t [.border-t]:pt-4"><SourceLink href={links.officialSite} label="Contact source" /></CardFooter>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_1.5fr_1.5fr] md:items-center">
          <div>
            <p className="font-semibold">More ways to connect</p>
            <p className="text-sm text-muted-foreground">Use these verified external destinations for specific requests.</p>
          </div>
          {moreWays.map((way) => (
            <a key={way.title} href={way.href} className="group block outline-none">
              <Card className="flex-row items-center gap-4 px-5 py-4 transition-all group-hover:border-ring/50 group-hover:shadow-md group-focus-visible:ring-[3px] group-focus-visible:ring-ring/50">
                <div className="flex-1">
                  <p className="text-sm font-semibold">{way.title}</p>
                  <p className="text-xs text-muted-foreground">{way.description}</p>
                </div>
                <ArrowRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
