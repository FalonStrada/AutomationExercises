import { expect, test } from "@playwright/test"

test("Contact us form", async ({ page }) => {

await page.goto('https://automationexercise.com/');

await page.getByRole('link', { name: 'Contact us' }).click();

await expect(page.getByText('GET IN TOUCH')).toBeVisible();

//Fill form 
await page.getByPlaceholder('Name').fill('Carlos');
await page.getByPlaceholder('Email', { exact: true }).fill('mensajeame@mailinator.com');
await page.getByPlaceholder('Subject').fill('Any');
await page.getByPlaceholder('Your Message Here').fill('lorem ipsum dor');

page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
});

await page.getByRole('button', { name: 'Submit' }).click();
await page.getByRole('link', { name: 'Home' }).click();
})