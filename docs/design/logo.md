# Better Naguilian Logo

The logo is version 6, the owner-approved artwork. It is a Naguilian municipal outline with a burnay jar for basi and a river band cut across it, next to the wordmark "Better / Naguilian lu.org". It replaces the earlier v2 lockup and the green tile.

## Elements

- **Municipal outline.** The boundary of Naguilian, simplified for the logo. Its edges are straight, so the shape reads as a simplified map.
- **Burnay jar (basi).** The clay jar, a rounded, symmetric shape. It overlaps the outline's right edge, and a 2-unit gap separates it from the outline so the two read as separate objects.
- **River band.** A wave of even width that crosses the outline from left to right and cuts it into an upper and a lower part.
- **Wordmark.** "Better" on the first line and "Naguilian lu.org" on the second. It is set in Manrope ExtraBold (SIL OFL) and converted to outlined paths, so the logo needs no font at runtime.

The outline and the jar are the mark. The site header uses the full lockup with the wordmark. The mark alone is used wherever space is tight (footer, welcome dialog, favicon, app icons).

## Colourways

The master artwork comes in two colourways and one-colour version. The sources are in [`logo/`](logo/).

| Colourway | Colours | Masters |
| --- | --- | --- |
| Site green | Outline `#0f492e`, band `#9ac3a7`, jar `#3a8357`, "Better" `#0e1913`, "Naguilian lu.org" `#0f492e` | [`logo-green-full.svg`](logo/logo-green-full.svg), [`logo-green-icon.svg`](logo/logo-green-icon.svg) |
| BetterGov | Blue `#0032a0`, yellow `#f2c91d` | [`logo-bettergov-full.svg`](logo/logo-bettergov-full.svg), [`logo-bettergov-icon.svg`](logo/logo-bettergov-icon.svg) |
| One colour | Black on transparent. The site renders this version in the current text colour | [`logo-bw.svg`](logo/logo-bw.svg) |

The site uses only the one-colour version. The two colourways are reference artwork for other uses.

## Colour rule

- The logo is **one colour** on the site. Every fill is `currentColor`, so it takes the colour of the text around it and works in light mode, dark mode and on brand surfaces.
- Set the colour with a semantic text utility: `text-primary` on page surfaces, `text-brand-foreground` on brand surfaces. Never hardcode a colour in the component.
- Only the favicon and the PWA icons carry a fixed colour, because they are image files outside the app's CSS. Their hex values are the primary token (light and dark) from [`src/index.css`](../../src/index.css).
- Do not recolour the parts separately or add a second colour, a gradient, or a background tile. The two-colour site green and the BetterGov colourway are master artwork only.

## Component

[`src/components/site/logo.tsx`](../../src/components/site/logo.tsx) exports `Logo`:

- `variant="mark"` (default) renders the outline and jar only.
- `variant="full"` renders the mark with the wordmark.
- The SVG is decorative (`aria-hidden`). The link around it must carry the accessible name, for example the visible text "Better Naguilian".
- Size with a height class (`h-9`). The aspect ratio comes from the component, so the width follows.

## Favicon and app icons

- **Favicon.** `public/naguilian-icon.svg` is the mark only, built from the v6 favicon master with its enlarged jar. It uses the primary green `#0f492e`, and `#7bcc98` under `prefers-color-scheme: dark`.
- **PWA icons.** `public/pwa-192.png` and `public/pwa-512.png` are the one-colour mark in `#0f492e` on `#fafbf8` (the manifest `background_color`). The mark is 70% of the icon height and centred, so it stays inside the central 80% circle that maskable icons keep safe.

## Files

| File | Use |
| --- | --- |
| `docs/design/logo/logo-green-full.svg` | Site-green master, mark and wordmark |
| `docs/design/logo/logo-green-icon.svg` | Site-green master, mark only |
| `docs/design/logo/logo-bettergov-full.svg` | BetterGov master, mark and wordmark |
| `docs/design/logo/logo-bettergov-icon.svg` | BetterGov master, mark only |
| `docs/design/logo/logo-bw.svg` | One-colour master (black). The geometry in `logo.tsx` comes from this file |
| `src/components/site/logo.tsx` | The inline logo used in the header, footer and welcome dialog |
| `public/naguilian-icon.svg` | Favicon (`index.html`). Mark only, primary green, dark-mode primary under `prefers-color-scheme: dark` |
| `public/pwa-192.png`, `public/pwa-512.png` | PWA icons (`vite.config.ts` manifest) |

The app has no apple-touch-icon yet. Add one only when a reference to it exists.

## Data credit

The outline is derived from published boundary data. It is not an official map or seal.

> Municipal boundary: NAMRIA and PSA, via OCHA COD-AB (CC BY-IGO 3.0), using the faeldon/philippines-psgc-shapefiles release, https://data.humdata.org/dataset/cod-ab-phl; simplified by Better Naguilian volunteers.

The logo is **not derived from the official municipal seal**. Do not use it as a substitute for the seal in official documents.
