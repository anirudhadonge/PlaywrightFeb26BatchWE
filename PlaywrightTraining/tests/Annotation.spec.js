import { test, expect } from "@playwright/test";

// test.describe("This is a descript method",async()=>{

//     test.beforeAll("This is a before all method",async()=>{
//         console.log("Before All");
//     })
//     test.beforeEach("This is a before each method",async()=>{
//         console.log("Before Each");
//     })

//     test.afterAll("This is a After all method",async()=>{
//         console.log("After All");
//     })
//     test.afterEach("This is a After each method",async()=>{
//         console.log("After Each");
//     })
// test("Test1",async()=>{
//     console.log("this is test1")
// })
// test("Test2",async()=>{
//     console.log("this is test2")
// })
// test("Test3",async()=>{
//     console.log("this is test3")
// })

// })
let webPage;
let webContext;
let newPage;
test.beforeEach("This is a before each method", async ({ page, context }) => {
  webPage = page;
  webContext = context;
  await test.step("Navigate to https://the-internet.herokuapp.com/ ", async () => {
    await webPage.goto("https://the-internet.herokuapp.com/");
  });
});

test("Handeling New Page", async ({ page, context }) => {
  await test.step("Click on Multi Window Link", async () => {
    await webPage.locator('[href="/windows"]').click();
  });

  await test.step("Click Link to Open the new tab", async () => {
    const pageEvent = webContext.waitForEvent("page");
    await webPage.locator('[href="/windows/new"]').click();
    newPage = await pageEvent;
  });

  await test.step("Validate new tab is open", async () => {
    let text = await newPage.locator(".example h3").textContent();
    console.log(text);
    await expect(newPage.locator(".example h3")).toHaveText("New Window");
  });
});
