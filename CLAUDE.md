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
```

There is no test runner. Run `pnpm lint && pnpm build` to verify a change.

## Architecture

- **Entry/routing:** `src/main.tsx` registers the service worker (`virtual:pwa-register`) and mounts `RouterProvider`. Routes are defined in code in `src/router.tsx`, not file-based. There are five top-level routes: `/` (`pages/home.tsx`), `/services` (`pages/services.tsx`, which also shows the charter's performance pledge and feedback mechanism), `/services/$serviceId` (`pages/service-detail.tsx`, with its loader throwing `notFound()` for unknown ids; the process cards and sidebar live in `components/services/`), `/about` (`pages/about.tsx`, the volunteer project and independence notice), and a `/government` layout route (`pages/government/layout.tsx`, a pill sub-nav plus `GovernmentIntro`) with `leadership`, `history`, `officials` and `barangays` children. `/government` itself redirects to `/government/leadership`. `/services` validates its typed search params `category` (must be a known `ServiceCategoryId`) and `q`. The page reads them with `route.useSearch()` and writes them back with `navigate({ search, replace: true })`, so filter state lives in the URL.
- **Shell:** `src/root-layout.tsx` wraps every route in `TooltipProvider` → `ServiceSearchProvider`, renders the skip link, `TopBar`, `SiteHeader`, `<main id="main">` and `SiteFooter`, and handles hash-anchor scrolling (`ScrollToHash`). Homepage sections are reached through `/#section-id` anchors.
- **Charter data:** `src/data/charter.ts` holds the hand-transcribed 2023 Citizen's Charter: the `Service`/`ServiceStep`/`ServiceAction`/`Requirement` types, `loadServices()` (a cached dynamic import of the 76-entry `services` array in `charter-services.ts`, which ships as its own chunk and also runs the dev-only integrity check; components use `hooks/use-services.ts` and routes `await loadServices()` in their loaders), `offices` (contact cards), `charterMeta`, `charterPage(page)` (`#page=N` link into the self-hosted `public/docs/citizens-charter-2023.pdf`), `pledge`, `feedbackMechanism`, `vision` and `mission`. `src/data/government.ts` holds `executive` and `sangguniang` (from the official site's Municipal Officials page), the mayor's and vice mayor's charter `messages`, `unitHeads` as printed in the charter (org chart p.11, Office Order pp.9–10; one entry per unit, with the OIC signatory, an `officeId` join to `offices` and a `servicesQuery` for `/services?q=`, checked in dev), and the 37 `barangays` from the official Demographics page (PSA CBMS July 2025; `officials` stay empty until the municipality publishes them). `site.ts`'s `leadership` is derived from it. `site.ts` re-exports the `Service` type and defines the 11 service categories (business, certificates, tax, health, social, agriculture, building, transport, records, environment, facilities; six are `highlight` on the homepage). `links.citizensCharter` stays the official HTML page.
- **Content is data-driven:** all copy, categories, stats, quiz, About page content and external URLs live in `src/data/site.ts`. Components don't hardcode copy or URLs. `links` entries are `#` placeholders until the official URLs are confirmed, and every `SourceLink` reads from them.
- **Service search:** `src/lib/service-search.ts` holds the pure ranking logic. `searchServices(query, pool)` builds a weighted field index (name > keywords > office + `officeAliases` > category name > category description), requires every query token to match, and scores whole word > prefix > substring (substring only for tokens of 4+ chars). There's a bonus when the query matches the start of the name. The ⌘K `CommandDialog` (`components/site/service-search.tsx`) and the `/services` page both use it. Use `useServiceSearch().open(query?)` (`hooks/use-service-search.ts`) to open the dialog from anywhere. Search field triggers are buttons that open the dialog, not free inputs.
- **Theming:** `hooks/use-theme.ts` toggles `.dark` on `<html>` and stores the choice in `localStorage` under `bn-theme`, falling back to `prefers-color-scheme`.
- **Layout:** `src/components/site/section.tsx` provides `Container` (`max-w-7xl`), `Section` (`tone`: default/muted/brand), `SectionHeading` and `SourceLink`. Homepage blocks in `components/home/` follow `<Section id tone>` → `<Container>` → `<SectionHeading>` → content.
- `@/` aliases `src/` (vite.config.ts and tsconfig).

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
