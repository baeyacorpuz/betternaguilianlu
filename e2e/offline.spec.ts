import { SERVICE_ID, SERVICE_NAME, expect, test } from './fixtures'

test('service pages and hotlines open with no connection once the app is installed', async ({ page, context }) => {
  await page.goto('/')
  // wait until the service worker has installed and controls the page
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready
    if (!navigator.serviceWorker.controller) {
      await new Promise((resolve) => navigator.serviceWorker.addEventListener('controllerchange', resolve, { once: true }))
    }
  })

  await context.setOffline(true)

  await page.goto(`/services/${SERVICE_ID}`)
  await expect(page.getByRole('heading', { level: 1, name: SERVICE_NAME })).toBeVisible()
  await expect(page.getByRole('status').filter({ hasText: 'You’re offline.' })).toBeVisible()

  await page.goto('/emergency')
  await expect(page.locator('main a[href="tel:911"]')).toBeVisible()

  await page.goto('/services?category=business')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

  await context.setOffline(false)
})
