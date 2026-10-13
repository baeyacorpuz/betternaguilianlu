import AxeBuilder from '@axe-core/playwright'

import { ROUTES, expect, test } from './fixtures'

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']

for (const theme of ['light', 'dark'] as const) {
  for (const route of [...ROUTES, { path: '/missing-page', heading: /./ }]) {
    test(`${route.path} has no WCAG A/AA violations (${theme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme })
      await page.goto(route.path)
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
      const results = await new AxeBuilder({ page })
        .withTags(TAGS)
        // the OpenStreetMap iframe is third-party content
        .exclude('iframe[title^="Map"]')
        .analyze()
      const summary = results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`)
      expect(summary).toEqual([])
    })
  }
}
