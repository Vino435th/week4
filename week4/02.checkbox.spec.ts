import {test, expect} from '@playwright/test';

test('To test the checkbox', async({page})=>{

await page.goto("https://leafground.com/checkbox.xhtml");
//await page.waitForTimeout(10000);
const title = await page.title();
  await expect(title).toBe("CheckBox Components");
   console.log(title);
await page.locator(".card").filter({hasText: "Basic Checkbox"}).locator("//div[contains(@class,'ui-chkbox-box')]").click();

await page.locator(".card").filter({hasText: "Notification"}).locator("//div[contains(@class,'ui-chkbox-box')]").click();

expect(page.isVisible("//span[@class='ui-growl-title']"))
await page.waitForTimeout(12000);
await page.locator("((//table[@role='presentation'])[5]//div)[4]").click();

await page.locator("((//div[@class='card'])[4]//div)[5]").click();

expect(page.isVisible("//div[@class='ui-growl-message']/p"));
await page.waitForTimeout(12000);

await page.locator(".ui-toggleswitch-slider").click();
expect(page.isVisible("//div[@role='alert']"));
//await page.waitForTimeout(12000);

expect(page.isDisabled("//span[text()='Disabled']/parent::div"));

await page.locator("//span[@class='ui-icon ui-icon-triangle-1-s']").click();
await page.waitForTimeout(3000)
await page.locator("(//input[@type='text'])[3]").fill("Miami")
await page.locator("(//label[text()='Miami'])[2]").click();
await page.locator("//span[@class='ui-icon ui-icon-triangle-1-s']").click();
//await page.waitForTimeout(3000)
await page.close();

})