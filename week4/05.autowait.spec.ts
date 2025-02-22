import {test, expect} from '@playwright/test';

test('To test the elements in auto waits', async({page})=>{

await page.goto("https://leafground.com/waits.xhtml");

//Visibility
await page.locator(".card").filter({hasText: "Wait for Visibility"}).getByRole("button").filter({hasText: "Click"}).click();
await expect(page.locator(".card").filter({hasText: "Wait for Visibility"}).getByRole("button").filter({hasText: "I am here"})).toBeVisible({timeout: 12000});

//Invisibility

await page.locator(".card").filter({hasText: "Wait for Invisibility"}).getByRole("button").filter({hasText: "Click"}).click();
await expect(page.locator(".card").filter({hasText: "Wait for Invisibility"}).getByRole("button").filter({hasText: "I am about to hide"})).toBeHidden({timeout: 12000});

//wait for element clickable

await page.locator(".card").filter({hasText: "Wait for Clickability"}).getByRole("button").filter({hasText: "Click First Button"}).click();
await expect(page.locator(".card").filter({hasText: "Wait for Clickability"}).getByRole("button").filter({hasText: "Click Second"})).toBeVisible({timeout: 10000});
await page.locator(".card").filter({hasText: "Wait for Clickability"}).getByRole("button").filter({hasText: "Click Second"}).click();

//Text changes
await page.locator(".card").filter({hasText: "Wait for Text Change"}).getByRole("button").filter({hasText: "Click"}).click();
await expect(page.locator(".card").filter({hasText: "Wait for Text Change"}).getByRole("button").filter({hasText: "Did you notice?"})).toBeVisible({timeout: 12000});
})