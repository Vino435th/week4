import {test, expect} from '@playwright/test';

test('To test the frames', async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");

    // after click change the text
    const frame = await page.frameLocator("(//iframe)[1]");
    const frame_one = await frame.locator("#Click");
    await frame_one.click();
    const text = await frame_one.innerText();
    console.log(text);
    await expect(text).toContain("Hurray! You Clicked Me.");

    //Total count
    const allframe = page.frames();
    const countframe = allframe.length;
    console.log(`Total count of frame is ${countframe}`);
    
    //Nested frames

    const card_one = await page.locator(".card").filter({hasText: "Click Me (Inside Nested frame)"});
    const card_two =  card_one.frameLocator("iframe");
    const card_three =  card_two.frameLocator("iframe");
    const card_four=  card_three.locator("#Click");
    await card_four.click();

    const textChange = await card_four.innerText();
    console.log(textChange);
    await expect(textChange).toContain("Hurray! You Clicked Me.");

})