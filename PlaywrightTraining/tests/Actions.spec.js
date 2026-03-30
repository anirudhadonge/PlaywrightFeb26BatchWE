import { test, expect } from "@playwright/test"; //esmodule import export
import { BasePage } from "../PageModel/BasePage";

test.describe("Grouping of test", async () => {
  test.beforeAll("Before All Method", async () => {
    console.log("Before All Method");
  });
  test.beforeEach("Navigating to Hero Kua App", async ({ page }) => {
    console.log("Before Each Method");
    await page.goto("https://the-internet.herokuapp.com/");
  });

  test.afterEach("This is after each method", async () => {
    console.log("This is after each method");
  });

  test("Click Action test", async ({ page }) => {
    await page.locator("[href='/checkboxes']").click();
  });

  /**
   * Fill : replica copy and paste, it clears the textbox and paste the new value . Input , textbox
   * Press Sequentially: Replicate the human typing action. All the html tag, It does not clear the existing values or text
   */
  test("Fill and Press Sequentially ", async ({ page }) => {
    let basePage = new BasePage(page);
    await page.waitForTimeout(3000);
    await basePage.pressSequentially("#username", "tomsmith", 500);
    //await page.locator("#username").pressSequentially('tomsmith',{delay:500});
    await page.waitForTimeout(3000);
    await basePage.fill("#password", "SuperSecretPassword!");
    //await page.locator("#password").fill('SuperSecretPassword!');
    await page.waitForTimeout(3000);
  });

  test("Select value from drop down", async ({ page }) => {
    await page.locator('[href="/dropdown"]').click();
    let select = page.locator("select#dropdown");
    await page.waitForTimeout(3000);
    await select.selectOption({ label: "Option 1" });
    await page.waitForTimeout(3000);
    await select.selectOption({ value: "2" });
    await page.waitForTimeout(3000);
    await select.selectOption({ index: 1 });
    await page.waitForTimeout(3000);
  });

  test("Interaction with Check Box", async ({ page }) => {
    await page.locator('[href="/checkboxes"]').click();
    // await page.locator("#checkboxes input").nth(0).check(); //actions
    // await page.locator("#checkboxes input").nth(0).uncheck(); //actions
    await page.locator("#checkboxes input").nth(1).uncheck(); //actions
    await expect.soft(page.locator("#checkboxes input").nth(0)).toBeChecked(); //Validation
    await expect
      .soft(page.locator("#checkboxes input").nth(1))
      .not.toBeChecked(); // validation
  });
});

test("@smoke @p1 File Upload Test", async ({ page }) => {
  test.slow(); //10*3 = 30sec
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/upload"]').click();
  //If the button that uploads the file is of input type
  //await page.locator("#file-upload").setInputFiles("./../PlaywrightTraining/Files/Git_Overview.pdf");
  let basePage = new BasePage(page);
  await basePage.uploadFiles(
    "./../PlaywrightTraining/Files/Git_Overview.pdf",
    "#file-upload",
  );
  // const fse = page.waitForEvent('filechooser');
  // await page.locator("#file-upload").click();
  // const fc = await fse;
  // await fc.setFiles(["./../PlaywrightTraining/Files/Git_Overview.pdf","./../PlaywrightTraining/Files/Git_Overview.pdf"]);
  await page.waitForTimeout(5000);
});

test("@smoke Download Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/download"]').click();
  let basePage = new BasePage(page);
  await basePage.downloadFile(
    '[href="download/sample-upload.txt"]',
    "./../PlaywrightTraining/Files/",
  );
  // const downloadEvent = page.waitForEvent('download');
  // await page.locator('[href="download/test_upload.txt"]').click()
  // const download = await downloadEvent;
  // await download.saveAs("./../PlaywrightTraining/Files/"+download.suggestedFilename());
});

test("Working with Frames", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/frames"]').click();
  await page.locator('[href="/iframe"]').click();
  let basePage = new BasePage(page);
  let frame = await basePage.frameLocator("#mce_0_ifr");
  await expect(frame.locator("#tinymce p")).toBeVisible();
});

test("Working with Alerts", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  dialog(true, page);
  await page.locator('[onclick="jsAlert()"]').click();
  await expect(page.locator("#result")).toHaveText(
    "You successfully clicked an alert",
  );
  await page.waitForTimeout(5000);
});

test("Working with js Confirm", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  dialog(true, page);
  // page.on('dialog',dialog=>{
  //     dialog.accept()
  //     dialog.dismiss()
  // })
  await page.locator('[onclick="jsConfirm()"]').click();
  //await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
  await page.waitForTimeout(5000);
});



test("Working with js Prompt", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  page.on("dialog", (dialog) => {
    dialog.accept("This is a playwright demo class");
  });
  await page.locator('[onclick="jsPrompt()"]').click();
  //await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
  await page.waitForTimeout(5000);
});

function dialog(flag, page) {
  if (flag) {
    page.on("dialog", (dialog) => {
      dialog.accept();
    });
  } else {
    page.on("dialog", (dialog) => {
      dialog.dismiss();
    });
  }
}

test("test For Handeling Basic Authencation",{
  tag:"@smoke"
} ,async ({ page }) => {
  //   const context = await browser.newContext({
  //     // httpCredentials: {
  //     //   username: "admin",
  //     //   password: "admin",
  //     // },
  //   });
  //   const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/digest_auth"]').click();
  await expect(page.locator(".example p")).toContainText("Congratulations!");
  await page.waitForTimeout(5000);
});



test("Hover test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/hovers"]').click();
  await page.getByAltText("User Avatar").hover();
  await page.waitForTimeout(5000);
  //   await page.locator('[href="/users/1"]').click();
  //   await expect(page.locator('body h1')).toBeVisible();
});

test("Drag and Drop test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.waitForLoadState("load", { timeout: 5000 });
  await page.locator('[href="/drag_and_drop"]').click();
  let basePage = new BasePage(page);
  await basePage.dragAndDrop("#column-a", "#column-b");
  //await page.locator("#column-a").dragTo(page.locator("#column-b"));
  await page.waitForTimeout(3000);
  await page.locator("#column-a").waitFor();
  await expect(page.locator("#column-a")).toHaveText("B");
  await expect(page.locator("#column-b")).toHaveText("A");
});

test("Herokuapp navigation test", async ({ page }) => {
  class HerokuappPage {
    constructor(page) {
      this.page = page;
      this.url = "https://the-internet.herokuapp.com/";
      this.header = "h1";
    }

    async goto() {
      await this.page.goto(this.url);
    }

    async getHeaderText() {
      return await this.page.locator(this.header).textContent();
    }
  }

  const herokuappPage = new HerokuappPage(page);
  await herokuappPage.goto();

  await expect(page).toHaveURL(/the-internet\.herokuapp\.com\/|the-internet\.herokuapp\.com\//); // fallback check
  await expect(page).toHaveURL(/the-internet\.herokuapp\.com/);
  await expect(herokuappPage.getHeaderText()).resolves.toContain("Welcome to the-internet");
});


test("Asserions demo", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await expect(page.locator("#content1 h2")).toBeVisible();
});

test("Form Authentication Login Test", async ({ page }) => {
  // Navigate to Herokuapp home
  await page.goto("https://the-internet.herokuapp.com/");

  // Click on Form Authentication link
  await page.locator('[href="/login"]').click();

  // Fill username and password
  await page.locator("#username").fill("tomsmith");
  await page.locator("#password").fill("SuperSecretPassword!");

  // Click login button
  await page.locator('button[type="submit"]').click();

  // Validate login success
  await expect(page.locator(".flash.success")).toContainText("You logged into a secure area!");
  await expect(page.locator("h2")).toHaveText("Secure Area");
});
