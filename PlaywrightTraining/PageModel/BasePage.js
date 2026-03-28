import {test } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url){
    await this.page.goto(url);
  }

  getLocator(locatorString) {
    return this.page.locator(locatorString);
  }

  async clickOnElement(locator,index=0) {
    console.log("Clicking on the locator " + locator);
    await this.getLocator(locator).nth(index).click();
  }

  async fill(locator, value) {
    await this.getLocator(locator).fill(value);
  }

  async pressSequentially(locator, value, delayTime = 0) {
    await this.getLocator(locator).pressSequentially(value, {
      delay: delayTime,
    });
  }

  async uploadFiles(files, locatorString) {
    const fse = this.page.waitForEvent("filechooser");
    await this.page.locator(locatorString).click();
    const fc = await fse;
    await fc.setFiles(files);
  }

  async downloadFile(locatorString,path) {
    const dwnE = this.page.waitForEvent("download");
    await this.page.locator(locatorString).click();
    const dwn = await dwnE;
    await dwn.saveAs(path+ dwn.suggestedFilename())
  }

  async frameLocator(locatorString){
    return page.frameLocator(locatorString)
  }

  async dragAndDrop(source, destination){
     await this.page.locator(source).dragTo(this.page.locator(destination));
  }
}
