import { expect, test } from './fixtures'

test('every page shows tap-to-call 911 in the top bar', async ({ page }) => {
  await page.goto('/services')
  const strip = page.getByRole('list', { name: 'Emergency hotlines' })
  await expect(strip.getByRole('link', { name: '911' })).toHaveAttribute('href', 'tel:911')
  await page.getByRole('link', { name: 'All hotlines' }).click()
  await expect(page).toHaveURL(/\/emergency$/)
})

test('the hotlines page lists callable numbers with sources', async ({ page }) => {
  await page.goto('/emergency')
  const calls = page.locator('main a[href^="tel:"]')
  expect(await calls.count()).toBeGreaterThanOrEqual(6)
  for (const href of await calls.evaluateAll((els) => els.map((e) => e.getAttribute('href')))) {
    expect(href).toMatch(/^tel:[0-9,]+$/)
  }
  await expect(page.getByRole('link', { name: /Bureau of Fire Protection/ }).first()).toBeVisible()
  await expect(page.getByText(/Volunteers checked these numbers on/)).toBeVisible()
})
