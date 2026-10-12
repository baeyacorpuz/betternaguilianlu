import { test as base, expect } from '@playwright/test'

export const SERVICE_ID = 'issuance-of-mayors-clearance'
export const SERVICE_NAME = 'Issuance of Mayor’s Clearance'

export const ROUTES = [
  { path: '/', heading: /Better Naguilian/ },
  { path: '/services', heading: /services/i },
  { path: `/services/${SERVICE_ID}`, heading: SERVICE_NAME },
  { path: '/emergency', heading: 'Emergency hotlines' },
  { path: '/government/leadership', heading: /./ },
  { path: '/government/officials', heading: /./ },
  { path: '/government/barangays', heading: /./ },
  { path: '/government/history', heading: /./ },
  { path: '/contact', heading: /./ },
  { path: '/legislative', heading: 'What the Sangguniang Bayan is deciding' },
  { path: '/transparency', heading: 'Follow Naguilian’s public money' },
  { path: '/about', heading: /./ },
] as const

/** Fails a test on uncaught page errors and console errors (outside third-party embeds). */
export const test = base.extend<{ failOnErrors: void }>({
  failOnErrors: [
    async ({ page }, use) => {
      const errors: string[] = []
      page.on('pageerror', (e) => errors.push(e.message))
      page.on('console', (m) => {
        if (m.type() === 'error' && !/openstreetmap|ERR_INTERNET_DISCONNECTED|net::ERR/.test(m.text())) errors.push(m.text())
      })
      await use()
      expect(errors, 'console or page errors').toEqual([])
    },
    { auto: true },
  ],
})

export { expect }
