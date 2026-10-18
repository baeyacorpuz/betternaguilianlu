# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Better Naguilian, La Union: a community service portal (Vite 8 + React 19 + TypeScript 6, Tailwind CSS v4, shadcn/ui on Radix, TanStack Router, installable PWA). It's a static client-side app with no backend.

## Commands

Use pnpm (Node `^20.19.0 || >=22.12.0`).

```sh
pnpm dev       # Vite dev server
pnpm build     # tsc -b typecheck + production build (includes PWA service worker)
pnpm lint      # oxlint (config: .oxlintrc.json)
pnpm preview   # serve the built dist/
pnpm test:e2e  # Playwright end-to-end + axe accessibility tests (run `pnpm build` first)
pnpm lighthouse  # Lighthouse CI against the built site (set CHROME_PATH locally)
```

Run `pnpm lint && pnpm build && pnpm test:e2e` to verify a change. CI (`.github/workflows/ci.yml`) runs lint, build and the Playwright suite on desktop and mobile, then Lighthouse (`.lighthouserc.json`: accessibility ≥ 0.95 and best practices ≥ 0.9 fail the build). Tests live in `e2e/` with their own `tsconfig.e2e.json`; `@playwright/test` is pinned to 1.56.1 to match the browsers preinstalled in cloud sessions. The axe checks fail on any WCAG 2.1 A/AA violation in light or dark mode.

## Architecture

- **Entry/routing:** `src/main.tsx` registers the service worker (`virtual:pwa-register`) and mounts `RouterProvider`. Routes are defined in code in `src/router.tsx`, not file-based. Top-level routes: `/` (`pages/home.tsx`), `/services` (`pages/services.tsx`, which also shows the charter's performance pledge and feedback mechanism), `/services/$serviceId` (`pages/service-detail.tsx`, with its loader throwing `notFound()` for unknown ids; the process cards and sidebar live in `components/services/`), `/about` (`pages/about.tsx`, the volunteer project and independence notice), `/contact` (`pages/contact.tsx`, project email, issue/contribute links and other community-built government sites, from `contactPage` in `site.ts`), and a `/government` layout route (`pages/government/layout.tsx`, a pill sub-nav plus `GovernmentIntro`) with `leadership`, `history`, `officials` and `barangays` children. `/government` itself redirects to `/government/leadership`. `/emergency` (`pages/emergency.tsx`), `/legislative` and `/transparency` come from `data/civic.ts`. The root route's `notFoundComponent` (`pages/not-found.tsx`) is the friendly 404 for unknown paths. Pages set their tab title with `useDocumentTitle()`. `/services` validates its typed search params `category` (must be a known `ServiceCategoryId`) and `q`. The page reads them with `route.useSearch()` and writes them back with `navigate({ search, replace: true })`, so filter state lives in the URL.
- **Shell:** `src/root-layout.tsx` wraps every route in `TooltipProvider` → `ServiceSearchProvider`, renders the skip link, `TopBar`, `SiteHeader`, `<main id="main">` and `SiteFooter`, and handles hash-anchor scrolling (`ScrollToHash`). Homepage sections are reached through `/#section-id` anchors.
- **Charter data:** `src/data/charter.ts` holds the hand-transcribed 2023 Citizen's Charter: the `Service`/`ServiceStep`/`ServiceAction`/`Requirement` types, `loadServices()` (a cached dynamic import of the 76-entry `services` array in `charter-services.ts`, which ships as its own chunk and also runs the dev-only integrity check; components use `hooks/use-services.ts` and routes `await loadServices()` in their loaders), `offices` (contact cards), `charterMeta`, `charterPage(page)` (`#page=N` link into the self-hosted `public/docs/citizens-charter-2023.pdf`), `pledge`, `feedbackMechanism`, `vision` and `mission`. `src/data/government.ts` holds `executive` and `sangguniang` (from the official site's Municipal Officials page), the mayor's and vice mayor's charter `messages`, `unitHeads` as printed in the charter (org chart p.11, Office Order pp.9–10; one entry per unit, with the OIC signatory, an `officeId` join to `offices` and a `servicesQuery` for `/services?q=`, checked in dev), and the 37 `barangays` from the official Demographics page (PSA CBMS July 2025; `officials` stay empty until the municipality publishes them). `site.ts`'s `leadership` is derived from it. `site.ts` re-exports the `Service` type and defines the 11 service categories (business, certificates, tax, health, social, agriculture, building, transport, records, environment, facilities; six are `highlight` on the homepage). `links.citizensCharter` stays the official HTML page.
- **Civic data:** `src/data/civic.ts` holds emergency `hotlines` (the `pinned` ones show in the top bar on every page), the Legislative and Transparency page content, and 404 copy. Every entry carries its source, and `lastChecked` is the date a volunteer verified them; update it whenever a fact changes. Hotlines sourced only from an agency's Facebook page are marked `sourceKind: "agency-facebook"`.
- **Accuracy feedback:** service pages end with `components/services/accuracy-feedback.tsx`. A thumbs up/down is stored per service in `localStorage` (`bn-accuracy:<id>`, via `hooks/use-accuracy-vote.ts`); a "no" opens a short form that builds a pre-filled `mailto:` (to `volunteerEmail`) or GitHub issue link. Nothing is sent from the page itself.
- **Offline:** the service worker precaches the app shell and every JS chunk, including the charter services chunk, so all routes and service pages open offline once installed. Fonts are precached too. The charter PDF is cached at runtime when first opened, and the last Open-Meteo forecast for up to 3 hours (`runtimeCaching` in `vite.config.ts`). `components/site/offline-banner.tsx` shows a notice while offline.
- **Content is data-driven:** all copy, categories, stats, quiz, About page content and external URLs live in `src/data/site.ts`. Components don't hardcode copy or URLs. `links` entries are `#` placeholders until the official URLs are confirmed, and every `SourceLink` reads from them.
- **Service search:** `src/lib/service-search.ts` holds the pure ranking logic. `searchServices(query, pool)` builds a weighted field index (name > keywords > office + `officeAliases` > category name > category description), requires every query token to match, and scores whole word > prefix > substring (substring only for tokens of 4+ chars). There's a bonus when the query matches the start of the name. The ⌘K `CommandDialog` (`components/site/service-search.tsx`) and the `/services` page both use it. Use `useServiceSearch().open(query?)` (`hooks/use-service-search.ts`) to open the dialog from anywhere. Search field triggers are buttons that open the dialog, not free inputs.
- **Theming:** `hooks/use-theme.ts` toggles `.dark` on `<html>` and stores the choice in `localStorage` under `bn-theme`, falling back to `prefers-color-scheme`.
- **Welcome dialog:** `components/site/welcome-dialog.tsx` is rendered from `root-layout.tsx`; its state lives in `hooks/use-welcome.ts`. It shows once per browser session (`sessionStorage` `bn-welcome-seen`), and "Don't show again" persists in `localStorage` (`bn-welcome-dismissed`). If storage throws, it stays hidden. Copy comes from `site.ts`.
- **Live data:** the homepage makes no network calls right now: the Open-Meteo weather card (`components/home/weather-today.tsx`, `weatherApi` in `site.ts`, `lib/weather.ts`, `hooks/use-weather.ts`) is not rendered, but its code and the `runtimeCaching` entry in `vite.config.ts` stay for when it returns. The header clock uses `hooks/use-manila-time.ts` (Asia/Manila).
- **Layout:** `src/components/site/section.tsx` provides `Container` (`max-w-7xl`), `Section` (`tone`: default/muted/brand), `SectionHeading` and `SourceLink`. Homepage blocks in `components/home/` follow `<Section id tone>` → `<Container>` → `<SectionHeading>` → content.
- `@/` aliases `src/` (vite.config.ts and tsconfig).
- **Deploy:** Vercel, with `vercel.json` rewriting every path to `/index.html` so client-side routes work on reload.
- **Specs:** larger features are planned with OpenSpec (`openspec/changes/<name>/` holds proposal, design, specs and tasks; finished changes move to `openspec/changes/archive/`). Use the `openspec-*` skills to propose, apply and archive changes.

## Design system

`docs/design/design-system.md` is the design contract. Read it before changing UI. The key rules:

- `src/index.css` is the source of truth for tokens (OKLCH semantic variables). Components use only semantic Tailwind utilities (`bg-primary`, `text-muted-foreground`, `bg-brand`, …), with no raw hex or oklch values. A new token needs a value in `:root` and in `.dark`, a mapping in `@theme inline`, and an update to the design doc in the same change.
- Radius follows role: `rounded-xl` for cards, `rounded-md` for controls, `rounded-full` for chips and pills.
- Use the Button variants `inverse` and `inverse-outline` on brand surfaces. To change how a shadcn primitive looks, add a CVA variant or change tokens rather than overriding styles at the call site.
- Icons come from Phosphor and are always imported with the `Icon` suffix (`ArrowRightIcon`). Use `ArrowRightIcon` for in-app navigation and `ArrowUpRightIcon` for external sources.
- Factual content needs a `SourceLink`. Keep the skip link, visible focus rings and support for 320px width and dark mode.

## Conventions

- shadcn config (`components.json`): style `radix-mira`, icon library `phosphor`, aliases under `@/components/ui`, `@/lib`, `@/hooks`. Add primitives with the shadcn CLI.
- Code in `src/` uses double quotes and no semicolons. Root config files use single quotes.
- oxlint enforces `react/rules-of-hooks` and warns on `react/only-export-components`. Contexts and hooks are kept in `hooks/`, separate from the component files that render providers.
