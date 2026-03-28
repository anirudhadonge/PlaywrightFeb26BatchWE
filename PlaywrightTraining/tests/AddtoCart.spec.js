import { HomePage } from '../PageModel/HomePage';
import  {SignInPage} from './../PageModel/SignInPage'
import {test} from '@playwright/test'
import { baseTest } from '../Fixtures/Fixture';
import { globalSetup } from '../GlobalSetup/globalSetup';
import addToCart from "./../TestData/addToCart.json"

test("Login to Application",async({page})=>{
    console.log(addToCart);
    let signInPage =  new SignInPage(page);
    await signInPage.goto(process.env.URL);
    await signInPage.openSignIn();
    await signInPage.enterUserName(process.env.URNAME);
    await signInPage.enterPassword(process.env.PASSWORD);
    await signInPage.signIn();
    let homepage = new HomePage(page);
    await homepage.addToCartTheProduct(addToCart['productName']);
    await page.waitForTimeout(5000);
})

// baseTest("Test with Custom Fixture",async()=>{
//     console.log(process.env)
//     globalSetup();
//     console.log(process.env)
//     console.log("UserName :"+process.env.URNAME);
//     console.log("Password:"+process.env.PASSWORD);
//     console.log("URL:"+process.env.URL);
//     //await homePage.addToCartTheProduct('Blue Top');
// })