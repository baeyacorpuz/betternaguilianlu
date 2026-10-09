# Better Naguilian, La Union

A community service portal for Naguilian, La Union, built with Vite, React, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Scripts

```bash
pnpm install
pnpm dev       # start the dev server
pnpm build     # typecheck + production build (PWA included)
pnpm lint      # oxlint
```

## Structure

- `src/components/ui/` – shadcn/ui primitives (button, card, badge, input, navigation-menu, sheet, dialog, command, toggle-group, radio-group, progress, alert, avatar, tooltip, accordion, separator, label)
- `src/components/site/` – layout pieces: top bar, header, footer, ⌘K service search, section helpers
- `src/components/home/` – homepage sections
- `src/pages/` – route components (`/`, `/services`, and `/about`)
- `src/data/site.ts` – all page content and external links

## Content sources

Every "Source" link reads from `links` in `src/data/site.ts`. Those are `#` placeholders until the official URLs are confirmed. The exceptions are `links.feedback` and `links.contribute`, which the About page uses for reporting issues and contributing. `feedback` is a prefilled `mailto:` link to `volunteerEmail`, and `contribute` points to the GitHub repository, which must be public for visitors to open it. Map coordinates for the Municipal Hall are approximate.

## Design

See [`docs/design/design-system.md`](docs/design/design-system.md) for tokens, type, layout, component contracts, and contribution rules.
