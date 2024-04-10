import { expect, test } from "@playwright/test"

test("test cases tab", async ({ page }) => {

await page.goto('https://automationexercise.com/');

await page.getByRole('link', { name: 'Test Cases',exact:true}).click();







})