import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, Section, SectionHeading, SourceLink } from "@/components/site/section"
import { history, links } from "@/data/site"

export function History() {
  return (
    <Section id="history" tone="default">
      <Container>
        <SectionHeading
          eyebrow="Heritage"
          title="Brief History"
          description="A short timeline of facts published in the Municipality of Naguilian’s official history account."
        />
        <ol className="relative mx-auto max-w-3xl">
          <span aria-hidden className="absolute top-2 bottom-2 left-[19px] w-px bg-border sm:left-[23px]" />
          {history.map((item, i) => (
            <li key={item.title} className="relative flex gap-4 pb-6 last:pb-0 sm:gap-6">
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-xs font-bold text-primary-foreground tabular-nums sm:size-12 sm:text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Card className="flex-1 gap-3 py-5">
                <CardHeader className="px-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-[10px] font-semibold tracking-wider uppercase">
                      {item.period}
                    </Badge>
                    {item.date !== item.period && <span className="text-xs text-muted-foreground">{item.date}</span>}
                  </div>
                  <CardTitle className="text-base leading-snug">{item.title}</CardTitle>
                  <CardDescription>{item.body}</CardDescription>
                </CardHeader>
                <CardContent className="px-5">
                  <SourceLink href={links.history} />
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
