import { test } from "@playwright/test";
import { SignInPage } from "../PageModel/SignInPage";
import { HomePage } from "../PageModel/HomePage";

export const baseTest = test.extend({
  homePage: async ({ page }, use) => {
    let homePage = new HomePage(page);

    use(homePage);
  },

  loginPage: async ({ page }, use) => {
    let loginPage = new SignInPage(page);
    await loginPage.goto("https://www.automationexercise.com/");
    await loginPage.openSignIn();
    await loginPage.enterUserName("anirudha.donge@gmail.com");
    await loginPage.enterPassword("password25");
    await loginPage.signIn();
    use(loginPage);
  },
});
