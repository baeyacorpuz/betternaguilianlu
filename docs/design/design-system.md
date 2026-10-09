# Better Naguilian Design System

This is the project's design guide. It describes the visual language the portal uses today and the rules for extending it. It replaces the earlier `portal-*` token guide (see [What changed from the previous guide](#what-changed-from-the-previous-guide)).

- **Token source of truth:** [`src/index.css`](../../src/index.css). When this guide and the CSS disagree, the CSS wins, so fix the guide.
- **Primitives:** [`src/components/ui/`](../../src/components/ui/) (shadcn/ui, `radix-mira` style, Radix underneath, Phosphor icons).
- **Layout helpers:** [`src/components/site/section.tsx`](../../src/components/site/section.tsx): `Container`, `Section`, `SectionHeading`, `SourceLink`.
- **Content:** [`src/data/site.ts`](../../src/data/site.ts). Components never hardcode copy or URLs.

## Principles

1. **Service first, not a brochure.** Every screen helps a resident finish a task: find a service, reach an office, check a source. Decoration can't push actions below the fold or out of reach.
2. **Verified and sourced.** Factual content has a `SourceLink`. Don't add data that can't be traced, and show placeholders honestly ("No verified emergency contacts are published yet").
3. **Restrained Naguilian green.** Use the deep forest green for meaningful actions, selection, focus and the brand bands. Elsewhere, neutral warm surfaces carry the page.
4. **Accessible by default.** Keyboard focus stays visible, there's a skip link, labels are real, states never rely on color alone, and long English/Filipino/Ilocano labels must fit.
5. **Reuse before you invent.** Extend a CVA variant or a `site/` helper. Don't copy long class strings across components or add one-off hex colors.

## Color

All colors are semantic CSS variables in OKLCH, exposed to Tailwind through `@theme inline` (`bg-primary`, `text-muted-foreground`, `border-border`, …). Components consume **only semantic utilities**. Raw `oklch()`/hex values in components are not allowed. The two existing exceptions are documented below.

### Light (`:root`)

| Token | Value | Role |
| --- | --- | --- |
| `--background` | `oklch(0.987 0.004 120)` | Warm off-white page canvas |
| `--foreground` | `oklch(0.2 0.02 160)` | Primary text, icon strokes |
| `--card` / `--popover` | `oklch(1 0 0)` | Card, input and overlay surfaces |
| `--card-foreground` / `--popover-foreground` | `oklch(0.2 0.02 160)` | Text on those surfaces |
| `--primary` | `oklch(0.36 0.075 158)` | Forest green: main action, selected state, links |
| `--primary-foreground` | `oklch(0.985 0.005 140)` | Text on primary |
| `--secondary` | `oklch(0.955 0.012 150)` | Sage: chips, eyebrows, secondary buttons |
| `--secondary-foreground` | `oklch(0.3 0.06 158)` | Text on secondary |
| `--muted` | `oklch(0.962 0.007 130)` | Quiet section bands (`Section tone="muted"`) |
| `--muted-foreground` | `oklch(0.5 0.02 160)` | Metadata, descriptions, captions |
| `--accent` | `oklch(0.945 0.02 152)` | Hover/selected surfaces, icon tiles |
| `--accent-foreground` | `oklch(0.3 0.07 158)` | Text/icons on accent |
| `--destructive` | `oklch(0.55 0.2 25)` | Errors and the emergency strip |
| `--border` | `oklch(0.91 0.01 140)` | Dividers, card outlines |
| `--input` | `oklch(0.89 0.012 140)` | Input/control borders |
| `--ring` | `oklch(0.55 0.09 158)` | Focus ring (used at `/50`) |
| `--brand` | `oklch(0.29 0.06 160)` | Deep forest: hero, top bar, `Section tone="brand"` |
| `--brand-foreground` | `oklch(0.97 0.01 140)` | Text on brand |
| `--brand-muted` | `oklch(0.78 0.06 155)` | Highlight text/icons on brand ("La Union", pins) |
| `--chart-1` … `--chart-5` | forest → sage → olive → amber | Data visualization only (Recharts) |

### Dark (`.dark`)

Dark mode works. [`useTheme`](../../src/hooks/use-theme.ts) toggles `.dark` on `<html>`, stores the choice in `localStorage` under `bn-theme`, and falls back to `prefers-color-scheme`. Every semantic token above except `--radius` and the chart colors is redefined in `.dark`. Primary flips to a light mint (`oklch(0.78 0.11 155)`) with dark text, and borders/inputs become white at 10% and 15%.

**Rule:** if you add a semantic token, define it in **both** `:root` and `.dark`, and map it in `@theme inline`.

### Usage rules

- **Inverse surfaces** (`bg-brand`, `bg-primary` cards): use `text-brand-foreground`/`text-primary-foreground` and their opacity steps (`/80` body, `/70` captions). Translucent white (`bg-white/10`, `border-white/15`, `border-white/30`) is the approved way to layer chips and outline buttons on brand. This is exception #1.
- **Emergency strip:** `bg-destructive/90 text-white`. Destructive red is for emergencies and errors only, never decoration. This is exception #2 (`text-white` on destructive).
- **Opacity steps** in use: `/90` hover on solid fills, `/60` muted band, `/50` ring and subtle accent, `/15` decorative brand-muted line art. Keep to these.
- Never encode meaning in color alone. Pair it with an icon, label, weight or underline.

## Typography

One family: **Manrope Variable** (`@fontsource-variable/manrope`), used for both `--font-sans` and `--font-heading`. The root has `antialiased`, `font-synthesis: none`, and `text-rendering: optimizeLegibility`.

Use Tailwind's type scale. These are the roles in use:

| Role | Classes | Where |
| --- | --- | --- |
| Display (H1) | `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance` | Hero only |
| Section title (H2) | `text-3xl sm:text-4xl font-bold tracking-tight text-balance` | `SectionHeading` |
| Card title, large | `text-xl font-semibold` | Feature/inverse cards |
| Card title | `text-base`–`text-lg font-semibold` (via `CardTitle`) | Content cards |
| Lead | `text-base sm:text-lg leading-relaxed` | Hero/intro paragraphs |
| Body | `text-sm leading-relaxed text-pretty` | Descriptions, card copy |
| UI label | `text-sm font-semibold` | Buttons, nav items |
| Meta / caption | `text-xs font-medium text-muted-foreground` | Sources, counts, timestamps |
| Eyebrow | `text-[11px] font-semibold uppercase tracking-wider` in a pill `Badge` | Section kickers |

Rules:

- Weights: 500 for labels and metadata, 600 for actions and titles, 700 for section titles, 800 for display only.
- Use `tracking-tight` only on 3xl and larger headings, and `tracking-wider` only on uppercase eyebrows.
- Put `text-balance` on headings and `text-pretty` on paragraphs.
- Long instructions (service steps, requirements) use `text-base` (16px). Don't set reading text in `text-xs`.
- Eyebrows at 11px are the smallest text allowed, and only for short uppercase kickers.

## Spacing and layout

The spacing base is Tailwind's 4px scale.

| Concern | Value |
| --- | --- |
| Content container | `Container`: `max-w-7xl` (1280px), centered |
| Gutters | `px-4` (16px), `sm:px-6` (24px), `lg:px-8` (32px) |
| Section rhythm | `Section`: `py-16 sm:py-20` (64→80px); hero `py-16 sm:py-24` |
| Section heading → content | `mb-10` (40px) |
| Card grid gap | `gap-4` (16px); 1 → `sm:grid-cols-2` → `lg:grid-cols-3` |
| Inline groups | `gap-1`–`gap-2` (icon + label, chips); `gap-3` (button rows) |
| Large two-column layouts | `gap-10 lg:gap-16` |
| Sticky header height | `h-16`; anchors offset by `scroll-padding-top: 5rem` |
| Top bar rows | `h-8`, `text-xs` |

Sections alternate `tone="default"` and `tone="muted"` for rhythm. Use `tone="brand"` (with `SectionHeading invert`) sparingly, at most one band between hero and footer. Let layouts wrap and stack, and support viewports down to 320px with no horizontal overflow.

## Shape

`--radius: 0.625rem` (10px) drives the scale:

| Utility | Size | Role |
| --- | --- | --- |
| `rounded-sm` | 6px | Small inner elements, menu items |
| `rounded-md` | 8px | **Controls**: buttons, inputs, toggles, inner action tiles |
| `rounded-lg` | 10px | Icon tiles, logo, search field |
| `rounded-xl` | 14px | **Cards** (and the card's stretched-link focus ring) |
| `rounded-full` | pill | Chips, eyebrows, avatars, status dots |

Match radius to role: cards use `xl`, controls use `md`, and only chips/circular controls use pills.

## Elevation and motion

Cards are nearly flat: `border` + `shadow-xs` is the resting state. Shadows carry meaning:

| Level | Classes | Use |
| --- | --- | --- |
| Resting | `shadow-xs` | Cards, buttons, inputs |
| Hover lift | `hover:-translate-y-0.5 hover:shadow-md` (`shadow-lg` on primary cards) + `hover:border-ring/50` | Interactive cards only |
| Overlay | `shadow-lg` (from Radix primitives) | Menus, sheets, dialogs, command palette |
| Showcase | `shadow-2xl shadow-black/30` | The hero search card on the brand band only |

The sticky header uses translucency rather than a shadow: `bg-background/85 backdrop-blur` with `border-b`.

Motion is short and functional. Use `transition-colors`/`transition-all` at default duration, the accordion keyframes (0.2s ease-out), `tw-animate-css` enter/exit on overlays, and a small arrow nudge (`translate-x-0.5 -translate-y-0.5`) on hover. Scrolling is smooth via `scroll-smooth`. `motion` is installed, but anything beyond these must respect `prefers-reduced-motion`.

## Iconography

- **Phosphor** (`@phosphor-icons/react`), always imported with the `Icon` suffix (`ArrowRightIcon`).
- Sizes: `size-3`/`size-3.5` inline with `text-xs`, `size-4` default (button icons size automatically), `size-5` inside icon tiles.
- Use `weight="fill"` for status and emphasis glyphs (siren, map pin, shield). Leave everything else at regular weight.
- Directional meaning: `ArrowRightIcon` for in-app navigation, `ArrowUpRightIcon` for "opens a source/destination".
- **Icon tile:** `flex size-10–11 items-center justify-center rounded-lg bg-accent text-accent-foreground`. On card hover it flips to `bg-primary text-primary-foreground`, and on brand surfaces it uses `bg-white/10`.
- Decorative SVG gets `aria-hidden`. The hero contour rings (`text-brand-muted/15`) are the one ornamental motif and stay on brand bands.

## Components

### Button ([`ui/button.tsx`](../../src/components/ui/button.tsx))

| Variant | Use |
| --- | --- |
| `default` | The one primary action in a region |
| `secondary` | Supporting action on light surfaces |
| `outline` | Neutral alternative, filters |
| `ghost` | Toolbar/nav/icon actions |
| `link` | Inline text actions |
| `destructive` | Irreversible or error actions |
| `inverse` | Primary action **on brand surfaces** |
| `inverse-outline` | Secondary action **on brand surfaces** |

Sizes are `sm` (32px), `default` (36px), `lg` (40px), `icon` (36px) and `icon-sm` (32px). All sizes use the `md` radius and `font-semibold`. For links styled as buttons, use `asChild` with `<Link>`. Focus is `ring-[3px] ring-ring/50`.

### Card ([`ui/card.tsx`](../../src/components/ui/card.tsx))

- Anatomy: `CardHeader` (icon tile, `CardTitle`, `CardDescription`, optional `CardAction` arrow), then `CardContent` (`mt-auto` to pin it to the bottom), then `CardFooter` (`border-t` + `SourceLink`).
- **Whole-card link:** give the card `relative group` and put the real `<Link>` inside the title with `after:absolute after:inset-0 after:rounded-xl` and the focus ring on `after:`. Raise secondary links in the card to `relative z-10`.
- **Feature card:** `border-transparent bg-primary text-primary-foreground` with focus `ring-white/50`. Use one per grid at most.

### Badge ([`ui/badge.tsx`](../../src/components/ui/badge.tsx))

- Variants are `default`, `secondary`, `outline` and `destructive`. Badges default to the `md` radius.
- **Eyebrow:** `secondary` + `rounded-full px-2.5 text-[11px] font-semibold uppercase tracking-wider`. On brand it uses `bg-white/10 text-brand-foreground`.
- **Chip** (clickable): `asChild` around a `<button>`, `secondary` + `rounded-full px-3 py-1 cursor-pointer`.

### Section helpers ([`site/section.tsx`](../../src/components/site/section.tsx))

- Every homepage block is `<Section id tone>` → `<Container>` → `<SectionHeading eyebrow title description>` → content.
- `SectionHeading` puts the title on the left and a `max-w-sm` description on the right from `md` up. Pass `invert` on brand bands.
- `SourceLink` renders `text-xs` muted text with an `ArrowUpRightIcon`, and opens external URLs in a new tab.

### Navigation and shell

- **Top bar:** an emergency strip (`bg-destructive/90`, `SirenIcon`), then a brand row with location and Manila time.
- **Header:** sticky and translucent, with the `Logo` (36px icon + two-line wordmark), `NavigationMenu` at `xl`, and below that a `Sheet` menu.
- Nav dropdown items are a `text-sm font-semibold` title over a `text-xs` muted, `line-clamp-2` description.
- Language toggle: a `ToggleGroup` with `text-xs font-semibold` items. Unavailable locales are disabled, wrapped in a focusable span with a tooltip that explains why.
- **Skip link** to `#main` is the first focusable element and must stay.

### Search

`ServiceSearchProvider` exposes `open(query?)` from anywhere, and the ⌘K `Command` dialog holds the results. The field triggers (`h-12 rounded-lg border-input bg-background`) are buttons that open the dialog. They aren't free inputs. Popular-search chips open the dialog prefilled. Keep result counts, empty states and keyboard behavior intact.

### Other primitives

Accordion, Alert, Avatar, Command, Dialog, Input, Label, NavigationMenu, Progress, RadioGroup, Separator, Sheet, Toggle/ToggleGroup and Tooltip come from shadcn and are used as is. Change their look through tokens or a new CVA variant, not per-call-site overrides.

### Data visualization

Use Recharts with `--chart-1…5` in order (forest first). Charts need a text alternative or a visible data summary, and must stay legible in both themes.

## Accessibility checklist

- Visible `focus-visible` ring on everything interactive. This includes stretched card links (ring on `after:`) and focusable wrappers.
- Aim for WCAG AA contrast: 4.5:1 for text, 3:1 for large text and control boundaries. Check `muted-foreground` on `muted`/`accent`, and `/70` text on `brand`, in **both** themes.
- Icon-only controls need `aria-label`. Decorative SVG gets `aria-hidden` and logo images get `alt=""` next to visible text.
- Targets should be 44px where practical. Current button heights (32–40px) fall short, so prefer `lg` for touch-primary actions and add padding to hit areas in mobile menus.
- Text must reflow at 320px and 200% zoom. Long labels wrap rather than truncate, except one-line status strips, which keep the full text available.
- Respect `prefers-reduced-motion` for any motion beyond hover color/position nudges.

## Contribution checklist

- [ ] Use semantic color utilities only. Add no hex/oklch values in components.
- [ ] Define a new token in `:root`, `.dark`, and `@theme inline`, and document it here in the same change.
- [ ] Check radius and elevation by role: `rounded-xl` cards, `rounded-md` controls, pills for chips, and shadows only from the table above.
- [ ] Build new homepage blocks from `Section`/`Container`/`SectionHeading`, with a `SourceLink` for factual content.
- [ ] Check light and dark mode, keyboard flow, 320px width, and long localized labels.
- [ ] Run:

```sh
pnpm lint
pnpm build
```

## What changed from the previous guide

The earlier guide (removed during the shadcn rebuild) defined a separate `portal-*` layer. This version keeps its intent and drops the parallel tokens:

| Previous | Now | Notes |
| --- | --- | --- |
| Hex `--portal-*` palette (`#f7f6f1` canvas, `#164a2b` forest, `#4f8f62` ring…) aliased into shadcn tokens | OKLCH values directly on shadcn semantic tokens, plus `--brand`, `--brand-foreground`, `--brand-muted` | Same warm canvas / forest green / sage character |
| Dark mode "out of scope" | Full `.dark` theme with toggle | Every new token needs a dark value |
| 1180px content container | `max-w-7xl` (1280px) | Widened in `8290148` |
| Radii 12px card / 8px control / pill | `rounded-xl` (14px) card / `rounded-md` (8px) control / pill | Same role-based rule |
| Flat cards, no shadow | `shadow-xs` resting, lift on hover | Elevation still reserved for meaning |
| Custom `text-portal-*` scale, 22px/500 section headings, 12px minimum | Tailwind scale; bold 3xl–4xl section titles; 11px eyebrows only | Bolder, more editorial hierarchy |
| Opt-in `appearance="portal"` on Button/Input | Variants built into the primitives (`inverse`, `inverse-outline`) | No legacy styles left to protect |
| `design-system.test.ts` token guardrails | None yet | Worth re-adding a declaration-level test for `index.css` |

Carried over unchanged: Manrope only, green reserved for meaningful states, real labels and non-color cues, emergency red is not a brand accent, no booking-style patterns, and municipal content over decoration.
