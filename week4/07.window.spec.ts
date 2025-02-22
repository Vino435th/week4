import {expect, test} from '@playwright/test'

test('To test the window', async({page, context})=>{

  await page.goto("https://login.salesforce.com/")
  await page.locator("#username").fill("vinoth@testleaf.com");
  await page.locator("#password").fill("Vino435th@6199");
  await page.locator("#Login").click();
  await page.waitForSelector(".slds-icon-waffle", {timeout : 60000});

  const [newWindow] = await Promise.all([
   context.waitForEvent('page'), page.getByText("Learn More",{exact: true}).click()
  ])
  
  await expect(newWindow).toHaveURL("https://www.salesforce.com/service/cloud/")
  
    const title = await newWindow.title();
    console.log(title);

})