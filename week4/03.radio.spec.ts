import {test, expect} from '@playwright/test';

test('To assert the radio buttons', async({page})=>{
   
    page.goto("https://leafground.com/radio.xhtml");
    await page.waitForTimeout(3000);
    const title = await page.title();
    await expect(title).toBe("Radio Components");
    console.log(title);

    const checked = await page.locator("//input[@id='j_idt87:console2:2']").isChecked();
    await expect(checked).toBe(true);
    console.log(checked);

    await page.waitForTimeout(10000);
    await page.locator("(//label[text()='Chrome'])[1]").click();
    const radio = await page.locator("//input[@id='j_idt87:console1:0']").isChecked();
    await expect(radio).toBe(true)
    console.log(radio);
    await page.waitForTimeout(5000);

    await page.locator("//label[text()='Chennai']").click();
    await page.waitForTimeout(5000);
    const age = await page.locator("//input[@id='j_idt87:age:1']").isChecked();
    await expect(age).toBe(true);
    console.log(age);
})