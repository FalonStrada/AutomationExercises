import { expect, test } from "@playwright/test"

test("test cases tab", async ({ page }) => {

await page.goto('https://automationexercise.com/');

const headerVisible = await page.isVisible('.container');
//await expect(page.locator('.container > h1')).toBeVisible(); NO PUDE LOGRAR VALIDAR EL TITULOOOOO!!!
await page.getByRole('link', { name: 'Test Cases', exact: true }).click();







})