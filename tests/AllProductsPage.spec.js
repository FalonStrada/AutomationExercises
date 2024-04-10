import { expect, test } from "@playwright/test"

test("Verify All Products page", async ({ page }) => {

await page.goto('https://automationexercise.com/');

await page.getByRole('link', {name: 'Products'}).click()
await expect(page.getByText('All Products')).toBeVisible()

//Click sobre los detalles del producto seleccionado
await page.locator('.choose > .nav > li > a').first().click()

//Validar que los datos del producto estan visibles
const productDetailsLocator = page.locator('.product-details');
await expect(productDetailsLocator).toBeVisible();








})