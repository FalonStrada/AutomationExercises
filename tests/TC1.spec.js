import { expect, test } from "@playwright/test"

test("Register User flow", async ({ page }) => {

await page.goto('https://automationexercise.com/');


//Click on Signup button
await page.getByRole('link', { name: 'Signup / Login' }).click();

//Verify 'New User Signup!' is visible
await expect(page.getByText('New User Signup!')).toBeVisible();

//Enter valid name and Email
await page.getByPlaceholder('Name').fill('Rogelio Labagna');
await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('mailinator1@mailinator.com');
await page.getByRole('button', { name: 'Signup' }).click();

//Fill account info
await page.getByLabel('Mr.').check();
await page.getByLabel('Password *').fill('12345678');
await page.getByLabel('First name *').fill('Rogelio');
await page.getByLabel('Last name *').fill('Labagna');
await page.getByLabel('Address * (Street address, P.').fill('Franklin Delano 1234');
await page.getByLabel('State *').fill('California');
await page.getByLabel('City *').fill('LA');
await page.locator('#zipcode').fill('12345');
await page.getByLabel('Mobile Number *').fill('1734746464');
await page.getByRole('button', { name: 'Create Account' }).click();
await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
await page.getByRole('link', { name: 'Continue' }).click();

await page.getByRole('link', { name: 'Delete Account' }).click();
await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
await page.getByRole('link', { name: 'Continue' }).click();



})
