import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']

test('the welcome dialog shows on first visit', async ({ page }) => {
  await page.goto('/')
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading', { name: 'Welcome to Better Naguilian' })).toBeVisible()
})

test('closing the dialog reveals the page h1', async ({ page }) => {
  await page.goto('/')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()

  // Click the "Explore the site" button to dismiss
  await dialog.getByRole('button', { name: 'Explore the site' }).click()
  await expect(dialog).not.toBeVisible()

  // Now the page h1 should be visible
  await expect(page.getByRole('heading', { level: 1, name: /Better Naguilian/ })).toBeVisible()
})

test('with "Don\'t show again" checked it stays hidden in a new page', async ({ page, context }) => {
  await page.goto('/')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()

  // Check "Don't show again" — use ID selector since shadcn checkbox doesn't respond to role query
  const checkbox = page.locator('#welcome-dont-show')
  await checkbox.check()

  // Close the dialog
  await dialog.getByRole('button', { name: 'Explore the site' }).click()
  await expect(dialog).not.toBeVisible()

  // Open a new page in the same context (same localStorage, fresh sessionStorage)
  const nextPage = await context.newPage()
  await nextPage.goto('/')

  // Dialog should not appear because localStorage keeps it dismissed
  await expect(nextPage.getByRole('dialog')).not.toBeVisible()
  await expect(nextPage.getByRole('heading', { level: 1, name: /Better Naguilian/ })).toBeVisible()
  await nextPage.close()
})

test('the dialog has no WCAG A/AA violations', async ({ page }) => {
  await page.goto('/')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()

  const results = await new AxeBuilder({ page })
    .withTags(TAGS)
    .analyze()
  const summary = results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`)
  expect(summary).toEqual([])
})
