# Better Naguilian Logo

The logo is a one-colour lockup: a Naguilian municipal outline with a burnay jar for basi and a river band cut through it, next to the wordmark "Better / Naguilian". It replaces the earlier green tile.

## Elements

- **Municipal outline.** The boundary of Naguilian, simplified for the logo. Its edges are smoothed into curves, so it reads as drawn rather than traced.
- **Burnay jar (basi).** The clay jar, a symmetric shape that overlaps the outline's right edge. A 2-unit gap separates it from the outline.
- **River band.** A wave of even width that crosses the outline from left to right and cuts it into an upper and a lower part.
- **Wordmark.** "Better" and "Naguilian" in Manrope ExtraBold, converted to outlines so the logo needs no font at runtime.

The outline and the jar are the mark. The mark alone is used wherever space is tight (header, footer, favicon, app icons).

## Colour rule

- The logo is **one colour**. Every fill is `currentColor`, so it takes the colour of the text around it and works in light mode, dark mode and on brand surfaces.
- Set the colour with a semantic text utility: `text-primary` on page surfaces, `text-brand-foreground` on brand surfaces. Never hardcode a colour in the component.
- Only the favicon and the PWA icons carry a fixed colour, because they are image files outside the app's CSS. Their hex values are the primary token (light and dark) from [`src/index.css`](../../src/index.css).
- Do not recolour the parts separately or add a second colour, a gradient, or a background tile.

## Component

[`src/components/site/logo.tsx`](../../src/components/site/logo.tsx) exports `Logo`:

- `variant="mark"` (default) renders the outline and jar only.
- `variant="full"` renders the mark with the wordmark.
- The SVG is decorative (`aria-hidden`). The link around it must carry the accessible name, for example the visible text "Better Naguilian".
- Size with a height class (`h-9`). The aspect ratio comes from the component, so the width follows.

## Files

| File | Use |
| --- | --- |
| `src/components/site/logo.tsx` | The inline logo used in the header, footer and welcome dialog |
| `public/naguilian-icon.svg` | Favicon (`index.html`). Mark only, primary green, dark-mode primary under `prefers-color-scheme: dark`. The jar is enlarged and the band thickened so it stays readable at 16px |
| `public/pwa-192.png`, `public/pwa-512.png` | PWA icons (`vite.config.ts` manifest). Mark in primary green on the warm off-white background, with about 20% padding so the 512px icon also works as maskable |
| `for-review/logo-v2-burnay-bw.svg` | The chosen source artwork (one colour, black on transparent) |

The app has no apple-touch-icon yet. Add one only when a reference to it exists.

## Data credit

The outline is derived from published boundary data. It is not an official map or seal.

> Municipal boundary: NAMRIA and PSA, via OCHA COD-AB (CC BY-IGO 3.0), https://data.humdata.org/dataset/cod-ab-phl; simplified by Better Naguilian volunteers.

The logo is **not derived from the official municipal seal**. Do not use it as a substitute for the seal in official documents.
