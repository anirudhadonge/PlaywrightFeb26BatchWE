import {test, expect} from '@playwright/test' //esmodule import export 
import { BasePage } from '../PageModel/BasePage';


test("Click Action test",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("[href='/checkboxes']").click();
})

/**
 * Fill : replica copy and paste, it clears the textbox and paste the new value . Input , textbox 
 * Press Sequentially: Replicate the human typing action. All the html tag, It does not clear the existing values or text
 */
test('Fill and Press Sequentially ',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login");

    let basePage = new BasePage(page);
    await page.waitForTimeout(3000);
    await basePage.preseSequentially("#username",'tomsmith',500)
    //await page.locator("#username").pressSequentially('tomsmith',{delay:500});
    await page.waitForTimeout(3000);
    await basePage.fill("#password",'SuperSecretPassword!');
    //await page.locator("#password").fill('SuperSecretPassword!');
    await page.waitForTimeout(3000);
})

test("Select value from drop down",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/dropdown"]').click();
    let select = page.locator("select#dropdown");
    await page.waitForTimeout(3000);
    await select.selectOption({label:"Option 1"})
    await page.waitForTimeout(3000);
    await select.selectOption({value:'2'});
    await page.waitForTimeout(3000);
    await select.selectOption({index:1});
    await page.waitForTimeout(3000);
})

test.only('Interaction with Check Box',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/checkboxes"]').click();
    await page.waitForTimeout(3000);
    await page.locator("#checkboxes input").nth(0).check(); //actions
    await page.waitForTimeout(3000);
    await page.locator("#checkboxes input").nth(1).uncheck(); //actions
    await expect(page.locator("#checkboxes input").nth(0)).toBeChecked(); //Validation
    await expect(page.locator("#checkboxes input").nth(1)).not.toBeChecked(); // validation
    await page.waitForTimeout(3000);
})