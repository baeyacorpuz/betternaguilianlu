import { Link } from "@tanstack/react-router"

import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/site/section"
import { contact, links } from "@/data/site"

export function SiteFooter() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-3">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/naguilian-icon.svg" alt="" className="size-9 rounded-lg" />
            <span className="font-bold">Better Naguilian</span>
          </Link>
          <p className="max-w-xs text-sm text-brand-foreground/70">
            A verified municipal service directory for Naguilian, La Union.
          </p>
        </div>
        <nav className="space-y-3 text-sm">
          <p className="text-xs font-semibold tracking-wider text-brand-foreground/60 uppercase">Explore</p>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/" hash="history" className="hover:underline">Naguilian information</Link></li>
            <li><a href={links.citizensCharter} className="hover:underline">Citizen’s Charter</a></li>
          </ul>
        </nav>
        <div className="space-y-3 text-sm">
          <p className="text-xs font-semibold tracking-wider text-brand-foreground/60 uppercase">Municipal Hall</p>
          <p className="text-brand-foreground/80">{contact.address}</p>
          <p className="text-brand-foreground/80">{contact.phone}</p>
        </div>
      </Container>
      <Separator className="bg-white/10" />
      <Container className="flex flex-col gap-2 py-6 text-xs text-brand-foreground/60 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Better Naguilian · Community-built, not an official government website.</p>
        <p>Information links to official municipal sources.</p>
      </Container>
    </footer>
  )
}
