import { HomePage } from '../PageModel/HomePage';
import  {SignInPage} from './../PageModel/SignInPage'
import { test, expect } from '@playwright/test'
import { baseTest } from '../Fixtures/Fixture';
import { globalSetup } from '../GlobalSetup/globalSetup';
import addToCart from "./../TestData/addToCart.json"

/**
 * E2E test that logs in and adds a product to cart.
 * Uses environment variables for credentials and target URL.
 * Data-driven by TestData/addToCart.json.
 */
test("@addToCartLogin to Application", async ({ page }) => {
    console.log(addToCart);
    let signInPage = new SignInPage(page);
    await signInPage.goto(process.env.URL);
    await signInPage.openSignIn();
    await signInPage.enterUserName(process.env.URNAME);
    await signInPage.enterPassword(process.env.PASSWORD);
    await signInPage.signIn();
    let homepage = new HomePage(page);
    await homepage.addToCartTheProduct(addToCart['productName']);
    await page.waitForTimeout(5000);
})

/**
 * HerokuApp page object for navigation and page content verifications.
 */
class HerokuAppPage {
    /**
     * @param {import('@playwright/test').Page} page - Playwright page instance
     */
    constructor(page) {
        this.page = page;
        this.url = 'https://the-internet.herokuapp.com';
    }

    /**
     * Navigate to the Herokuapp home page.
     */
    async navigate() {
        await this.page.goto(this.url);
    }

    /**
     * Read the main heading text from the page.
     * @returns {Promise<string>} landing heading text
     */
    async getHeadingText() {
        return await this.page.locator('h1').innerText();
    }
}

/**
 * Validate Herokuapp home page is accessible and correct heading is displayed.
 */
test('Herokuapp page object should navigate to herokuapp url', async ({ page }) => {
    const herokuPage = new HerokuAppPage(page);
    await herokuPage.navigate();

    await expect(page).toHaveURL(/the-internet.herokuapp.com/);
    expect(await herokuPage.getHeadingText()).toBe('Welcome to the-internet');
});

/**
 * Fixture-powered test using baseTest fixture object injections.
 * - loginPage: automatically signs in to automationexercise.com
 * - homePage: exposes page object methods for actions like add-to-cart
 */
baseTest("@addToCartWithFixtures", async ({ homePage, loginPage, page }) => {
  // use existing fixture behavior, verify we are logged in by checking dashboard header
  await expect(page.locator(".logged-in")).toBeVisible();

  // perform action through homePage object
  await homePage.addToCartTheProduct(addToCart.productName);

  // sanity assertion: product-added modal or cart count update
  await expect(page.locator(".cart-info")).toContainText("1");
  await page.waitForTimeout(2000);
});

// baseTest("Test with Custom Fixture",async()=>{
//     console.log(process.env)
//     globalSetup();
//     console.log(process.env)
//     console.log("UserName :"+process.env.URNAME);
//     console.log("Password:"+process.env.PASSWORD);
//     console.log("URL:"+process.env.URL);
//     //await homePage.addToCartTheProduct('Blue Top');
// })
      

test("Digest Authentication test", async ({ page }) => {