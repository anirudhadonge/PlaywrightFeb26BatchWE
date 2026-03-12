import {test,expect} from '@playwright/test'
/**
 * Locator : Playwright object which keeps the information about the html element
 * 
 			○ Locate by role
			○ Locate by label : If i want to interact with an input which has a label tag with it.
			○ Locate by placeholder
			○ Locate by text
			○ Locate by alt text
			○ Locate by title
			○ Locate by test id
            Locator Method where we will be using css or xpath
Locate by CSS or XPath
 */


test.only("Test for Locator",async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    //await page.getByRole("checkbox").nth(0).check();
    //await page.getByPlaceholder('Enter your company').nth(0).fill('Alphabet');
    //await page.getByText('Submit').click();
    //await page.getByTitle('Email').nth(0).pressSequentially("Anirudha.donge@gmail.com");
    //await page.getByTestId('sh_email1').pressSequentially("Anirudha.donge@gmail.com")
    await page.locator("//input[@name='email']").pressSequentially("Anirudha.donge@gmail.com");
})

test("Test for Get by Label",async({page})=>{
     await page.goto("https://the-internet.herokuapp.com/login");
     await page.getByLabel('Username').fill("tomsmith");
})