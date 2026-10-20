import AxeBuilder from '@axe-core/playwright'

import { expect, test } from './fixtures'

test.use({ showWelcome: true })

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']

for (const theme of ['light', 'dark'] as const) {
  test(`the welcome dialog has no WCAG A/AA violations (${theme})`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: theme })
    await page.goto('/')
    await expect(page.getByRole('dialog', { name: 'Welcome to Better Naguilian' })).toBeVisible()
    const results = await new AxeBuilder({ page }).withTags(TAGS).include('[role="dialog"]').analyze()
    expect(results.violations.map((v) => v.id)).toEqual([])
  })
}

test('the welcome dialog shows once per session', async ({ page }) => {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Welcome to Better Naguilian' })
  await dialog.getByRole('button', { name: 'Explore the site' }).click()
  await expect(dialog).toBeHidden()
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await page.reload()
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(dialog).toBeHidden()
})

test('“Don’t show again” keeps the welcome dialog closed in a new session', async ({ page, context }) => {
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Welcome to Better Naguilian' })
  await dialog.getByLabel('Don’t show again').check()
  await dialog.getByRole('button', { name: 'Explore the site' }).click()
  await expect(dialog).toBeHidden()

  // a new tab starts a new sessionStorage but shares localStorage
  const next = await context.newPage()
  await next.goto('/')
  await expect(next.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(next.getByRole('dialog')).toBeHidden()
})
