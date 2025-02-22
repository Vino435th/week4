import {test, expect} from '@playwright/test';
import { log } from 'node:console';

test('To test the drop down', async({page})=>{

    page.goto("https://leafground.com/select.xhtml");
    await page.waitForTimeout(3000);
    const title = await page.title();
    await expect(title).toBe("Select Components");
    console.log(title);
    const uiTool = await page.selectOption("//select[@class='ui-selectonemenu']", {label:"Playwright"});
    console.log(uiTool);
    
    const dropdown = await page.locator('.ui-selectonemenu>option');
    const dropdowncount = await dropdown.count();
    console.log(dropdowncount);

    for(let i=0;i<dropdowncount;i++){
console.log(await dropdown.nth(i).innerText());
    }

await page.waitForTimeout(5000);
    await page.locator("//label[@id='j_idt87:country_label']").click();
    await page.waitForTimeout(3000);
    await page.locator("//li[text()='India']").click();
    await page.locator("(//input[@type='text'])[1]").click();
    const city = await page.locator('//label[@id="j_idt87:city_label"]')
    await expect(city).toBeVisible(); 
    console.log("City dropdown loaded.");   

    await page.locator("//button[@type='button']").click();
    await page.locator("//li[text()='Appium']").click();
    await page.waitForTimeout(3000);
    await page.locator("//button[@type='button']").click();
    await page.locator("//li[text()='Selenium WebDriver']").click();
    
    await page.waitForTimeout(3000);
    await page.locator("//button[@type='button']").click();
    await page.locator("//li[text()='Playwright']").click();
    await page.waitForTimeout(5000);

    //await page.locator("(//label[contains(@class,'ui-selectonemenu-label')])[3]").click();
    await page.locator("//label[@id='j_idt87:lang_label']").click();
    //await page.waitForTimeout(3000);
    await page.locator("//li[text()='English']").click();
   const languagedropdown = await page.locator("(//ul[@role='listbox'])[2]//li");
   const languagedropdownCount = await languagedropdown.count();
   console.log(languagedropdownCount);

   for(let index=0;index<languagedropdownCount;index++){
    console.log(await languagedropdown.nth(index).innerText());
    
   }
   
//
await page.locator("//label[@id='j_idt87:value_label']").click();
    await page.locator("//li[text()='Two']").click();
    await page.waitForTimeout(2000);
})