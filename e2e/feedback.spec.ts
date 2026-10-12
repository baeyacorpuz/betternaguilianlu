import { SERVICE_ID, SERVICE_NAME, expect, test } from './fixtures'

test('a resident can confirm a service is accurate, and it is remembered', async ({ page }) => {
  await page.goto(`/services/${SERVICE_ID}`)
  await page.getByRole('button', { name: 'Yes, it matched' }).click()
  await expect(page.getByRole('status').filter({ hasText: 'Thanks for checking' })).toBeVisible()
  await page.reload()
  await expect(page.getByText('Thanks for checking')).toBeVisible()
  await page.getByRole('button', { name: 'Change my answer' }).click()
  await expect(page.getByRole('button', { name: 'Yes, it matched' })).toBeVisible()
})

test('reporting outdated info builds a pre-filled email and GitHub issue', async ({ page }) => {
  await page.goto(`/services/${SERVICE_ID}`)
  await page.getByRole('button', { name: 'No, something changed' }).click()
  await expect(page.getByRole('button', { name: 'Send by email' })).toBeDisabled()

  await page.getByLabel('The fee was different').check()
  await page.getByLabel('What did you see? (optional)').fill('Fee is now PHP 150.00')

  const email = page.getByRole('link', { name: 'Send by email' })
  const href = decodeURIComponent((await email.getAttribute('href')) ?? '')
  expect(href).toMatch(/^mailto:/)
  expect(href).toContain(`Outdated info: ${SERVICE_NAME}`)
  expect(href).toContain('The fee was different')
  expect(href).toContain('Fee is now PHP 150.00')

  const github = page.getByRole('link', { name: 'Report on GitHub' })
  expect(await github.getAttribute('href')).toMatch(/github\.com\/.+\/issues\/new\?title=/)
})
