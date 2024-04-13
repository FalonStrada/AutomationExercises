import { expect, test } from "@playwright/test"

test("Add product in the Cart", async ({ page }) => {

await page.goto('https://automationexercise.com/');
await expect(page.getByText('Full-Fledged practice website')).toBeVisible();

await page.getByRole('link', {name: 'Products'}).click()
await expect(page.getByText('All Products')).toBeVisible()

//Click sobre los detalles del producto seleccionado
await page.locator('.choose > .nav > li > a').first().click()
await page.locator('.overlay-content > .btn').first().click();
await page.getByRole('button', { name: 'Continue Shopping' }).click();





})