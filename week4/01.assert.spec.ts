import {test, expect} from '@playwright/test';
import {log} from 'node:console'
test('To test the assertions', async({page})=>{

   await page.goto("https://leafground.com/button.xhtml");

   await page.locator(".card").filter({hasText: "Click and Confirm title."}).locator("//span[text()='Click']").click();
   await page.waitForTimeout(10000);
  await expect(page.url()).toContain("https://leafground.com/dashboard.xhtml");
   //await page.waitForTimeout(10000);
   const title = await page.title();
  await expect(title).toBe("Dashboard");
   console.log(title);

   await page.goBack();
   //await page.waitForTimeout(30000);
   const title1 = await page.title();
 await  expect(title1).toBe("Button");
   console.log(title1);
   //
await page.getByPlaceholder('Search...').click();
await expect(page.locator("//button[@disabled='disabled']")).toBeDisabled({timeout: 15000});

 await  page.locator(".card").filter({hasText: "Click Image Button and Click on any hidden button"}).locator("//button[@type='button']").click();
 await  expect(page.locator(".ui-overlaypanel-content")).toBeVisible();

 await  page.locator(".card").filter({hasText: "Click Image Button and Click on any hidden button"}).locator("//button[@type='button']").click();
   
//const roundcount = page.locator(".card").filter({hasText: "How many rounded buttons are there?"}).getByRole
const roundcount = page.locator("(//div[@class='card'])[7]//button")
const count = await roundcount.count();
console.log(count);
})