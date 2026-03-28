import { chromium, firefox, test, webkit ,expect} from "@playwright/test";

test("Browser invocation test", async () => {
  let browserName = "firefox";
  const browser = await invokeBrowser(browserName)
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("/login"); 
  await expect(page.locator(".radius")).toBeVisible();
  await page.waitForTimeout(3000);
});

async function invokeBrowser(browserName) {
  switch (browserName) {
    case "chromium":
      return await chromium.launch();
    case "firefox":
      return await firefox.launch();
    case "webkit":
      return webkit.launch();
    default:
        return chromium.launch();
  }
}
