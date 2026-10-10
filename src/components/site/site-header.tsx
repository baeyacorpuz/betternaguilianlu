import * as React from "react"
import { Link } from "@tanstack/react-router"
import {
  ClockIcon,
  ListIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MoonIcon,
  SirenIcon,
  SunIcon,
} from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Container } from "@/components/site/section"
import { links, serviceCategories } from "@/data/site"
import { useManilaTime } from "@/hooks/use-manila-time"
import { useServiceSearch } from "@/hooks/use-service-search"
import { useTheme } from "@/hooks/use-theme"

type NavChild = { title: string; description: string; to?: string; hash?: string; search?: Record<string, string>; href?: string }
type NavGroup = { title: string; items: NavChild[] }

const navGroups: NavGroup[] = [
  {
    title: "Services",
    items: [
      ...serviceCategories.map((c) => ({
        title: c.name,
        description: c.description,
        to: "/services",
        search: { category: c.id },
      })),
      { title: "All services", description: "Browse every published service record.", to: "/services" },
    ],
  },
  {
    title: "Government",
    items: [
      { title: "Municipal Leadership", description: "The current mayor and vice mayor.", to: "/", hash: "leadership" },
      { title: "Brief History", description: "Key moments from the official history.", to: "/", hash: "history" },
      { title: "Officials directory", description: "Full listing on the official site.", href: links.officials },
    ],
  },
  {
    title: "Transparency",
    items: [
      { title: "Citizen’s Charter", description: "Published service steps, fees, and timelines.", href: links.citizensCharter },
      { title: "Official website", description: "The municipality’s own website.", href: links.officialSite },
    ],
  },
  {
    title: "Statistics",
    items: [
      { title: "Naguilian at a glance", description: "Population, barangays, class, and land area.", to: "/", hash: "glance" },
      { title: "Today’s weather", description: "Current conditions in Naguilian.", to: "/", hash: "weather" },
      { title: "Climate and map", description: "Climate type and Municipal Hall location.", to: "/", hash: "climate" },
      { title: "Sun and moon", description: "Today’s sunrise, sunset and moon phase.", to: "/", hash: "sun" },
    ],
  },
]

function NavChildLink({ item, className, onNavigate }: { item: NavChild; className?: string; onNavigate?: () => void }) {
  const body = (
    <>
      <span className="text-sm leading-none font-semibold">{item.title}</span>
      <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">{item.description}</span>
    </>
  )
  if (item.href) {
    return (
      <a href={item.href} className={className} onClick={onNavigate}>
        {body}
      </a>
    )
  }
  return (
    <Link to={item.to!} hash={item.hash} search={item.search} className={className} onClick={onNavigate}>
      {body}
    </Link>
  )
}

export function TopBar() {
  const time = useManilaTime()
  return (
    <div className="bg-brand text-brand-foreground">
      <div className="bg-destructive/90 text-white">
        <Container className="flex h-8 items-center justify-between gap-4 text-xs">
          <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold whitespace-nowrap">
            <SirenIcon weight="fill" className="size-3.5" />
            Emergency information
          </span>
          <span className="truncate opacity-90">No verified emergency contacts are published yet.</span>
        </Container>
      </div>
      <Container className="flex h-8 items-center justify-between gap-4 text-xs">
        <span className="inline-flex items-center gap-1.5">
          <MapPinIcon weight="fill" className="size-3.5 text-brand-muted" />
          Naguilian, La Union
        </span>
        <span className="hidden items-center gap-1.5 opacity-80 sm:inline-flex">
          <ClockIcon className="size-3.5" />
          Philippine Standard Time · {time}
        </span>
      </Container>
    </div>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)}>
      <img src="/naguilian-icon.svg" alt="" className="size-9 rounded-lg" />
      <span className="flex flex-col leading-tight whitespace-nowrap">
        <span className="text-sm font-bold">Better Naguilian</span>
        <span className="text-[11px] text-muted-foreground">Community service portal</span>
      </span>
    </Link>
  )
}

function LanguageToggle() {
  return (
    <ToggleGroup type="single" value="en" variant="outline" size="sm" aria-label="Language">
      <ToggleGroupItem value="en" aria-label="English" className="px-2.5 text-xs font-semibold">
        EN
      </ToggleGroupItem>
      <Tooltip>
        <TooltipTrigger asChild>
          {/* span keeps the tooltip working while the item is disabled */}
          <span tabIndex={0} aria-label="Ilocano translation coming soon" className="inline-flex rounded-r-md focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
            <ToggleGroupItem value="il" aria-label="Ilocano" disabled className="px-2.5 text-xs font-semibold first:rounded-l-none data-[variant=outline]:first:border-l-0">
              IL
            </ToggleGroupItem>
          </span>
        </TooltipTrigger>
        <TooltipContent>Ilocano translation coming soon</TooltipContent>
      </Tooltip>
    </ToggleGroup>
  )
}

function ThemeButton() {
  const { theme, toggle } = useTheme()
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon-sm" onClick={toggle} aria-label="Toggle dark mode">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{theme === "dark" ? "Light mode" : "Dark mode"}</TooltipContent>
    </Tooltip>
  )
}

export function SiteHeader() {
  const search = useServiceSearch()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <NavigationMenu viewport={false} className="hidden xl:flex">
          <NavigationMenuList>
            {navGroups.map((group) => (
              <NavigationMenuItem key={group.title}>
                <NavigationMenuTrigger>{group.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className={cn("grid gap-1 p-1", group.items.length > 3 ? "w-[520px] grid-cols-2" : "w-[300px]")}>
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <NavChildLink item={item} />
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/" hash="contact">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => search.open()}
            className="hidden w-44 justify-start text-muted-foreground md:inline-flex lg:hidden xl:inline-flex"
          >
            <MagnifyingGlassIcon />
            <span className="flex-1 text-left font-normal">Search services</span>
            <kbd className="rounded border bg-muted px-1.5 font-mono text-[10px]">⌘K</kbd>
          </Button>
          <Button variant="ghost" size="icon-sm" className="md:hidden lg:inline-flex xl:hidden" onClick={() => search.open()} aria-label="Search services">
            <MagnifyingGlassIcon />
          </Button>
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <ThemeButton />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="xl:hidden" aria-label="Open menu">
                <ListIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Better Naguilian community service portal</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-6 px-4 pb-8">
                <div className="flex gap-2">
                  <SheetClose asChild>
                    <Button asChild variant="secondary" size="sm" className="flex-1">
                      <Link to="/" hash="contact">Contact</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild variant="secondary" size="sm" className="flex-1">
                      <Link to="/about">About</Link>
                    </Button>
                  </SheetClose>
                </div>
                {navGroups.map((group) => (
                  <div key={group.title} className="space-y-2">
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{group.title}</p>
                    <Separator />
                    <ul className="grid gap-1">
                      {group.items.map((item) => (
                        <li key={item.title}>
                          <NavChildLink
                            item={item}
                            onNavigate={() => setMobileOpen(false)}
                            className="flex flex-col gap-1 rounded-md p-2 hover:bg-accent"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="sm:hidden">
                  <LanguageToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
