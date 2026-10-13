import { ROUTES, expect, test } from './fixtures'

for (const route of ROUTES) {
  test(`${route.path} renders its heading and title`, async ({ page }) => {
    await page.goto(route.path)
    await expect(page.getByRole('heading', { level: 1, name: route.heading })).toBeVisible()
    await expect(page).toHaveTitle(/Better Naguilian/)
  })
}

test('unknown pages show the friendly 404', async ({ page }) => {
  await page.goto('/this-page-does-not-exist')
  await expect(page.getByRole('heading', { level: 1, name: 'We couldn’t find that page' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Emergency hotlines' }).last()).toHaveAttribute('href', '/emergency')
  await page.getByRole('link', { name: 'All services' }).last().click()
  await expect(page).toHaveURL(/\/services$/)
})

test('unknown service ids show the service not-found message', async ({ page }) => {
  await page.goto('/services/not-a-real-service')
  await expect(page.getByRole('heading', { level: 1, name: 'Service not found' })).toBeVisible()
})

test('the service search opens from the keyboard and navigates', async ({ page, isMobile }) => {
  test.skip(isMobile, 'keyboard shortcut is desktop-only')
  await page.goto('/')
  await page.keyboard.press('Control+k')
  const dialog = page.getByRole('dialog')
  await dialog.getByRole('combobox').fill('mayor clearance')
  await dialog.getByRole('option').first().click()
  await expect(page).toHaveURL(/\/services/)
})
