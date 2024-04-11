import { expect, test } from "@playwright/test"

test("Search Product", async ({ page }) => {

await page.goto('https://automationexercise.com/');

await page.getByRole('link', {name: 'Products'}).click()
await expect(page.getByText('All Products')).toBeVisible()
await page.getByPlaceholder('Search Product').fill('dress')
await page.locator('//button[@id="submit_search"]').click()

const productDetailsLocator = page.locator('.features_items');
await expect(productDetailsLocator).toBeVisible();




})