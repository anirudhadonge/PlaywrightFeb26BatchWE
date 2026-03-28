import { BasePage } from "./BasePage";

 export class HeaderPage extends BasePage{

    homePageLink = '[href="/"]';
    productsLink = '[href="/products"]'
    cartLink = '[href="/view_cart"]'
    signInLink = '[href="/login"]'
    signOutLink = '[href="/logout"]'
    constructor(page){
        super(page);
    }

    async openHome(){
        await this.clickOnElement(this.homePageLink);
    }

    async openProducts(){
        await this.clickOnElement(this.productsLink);
    }

    async viewCart(){
        await this.clickOnElement(this.cartLink);
    }

    async openSignIn(){
        await this.clickOnElement(this.signInLink);
    }

    async signOut(){
        await this.clickOnElement(this.signOutLink);
    }
}