import{page} from '@playwright/test'

export class BasePage{
    constructor(page){
        this.page = page;
    }

    getLocator(locatorString){
        return page.locator(locatorString);
    }

    async clickOnElement(locator){
        console.log("Clicking on the locator "+locator);
        await this.getLocator(locator).click();
    }

    async fill(locator,value){
        await this.getLocator(locator).fill(value);
    }

    async preseSequentially(locator,value,delayTime=0){
        await this.getLocator(locator).preseSequentially(value,{delay:delayTime})
    }
}