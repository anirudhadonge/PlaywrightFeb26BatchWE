import { HeaderPage } from "./HeaderPage";


export class HomePage extends HeaderPage{

    productName = ".productinfo.text-center p"
    constructor(page){
        super(page);
    }

    async addToCartTheProduct(name){
        let locator = `${this.productName}:has-text('${name}') + a.btn.btn-default.add-to-cart`
        await this.clickOnElement(locator,);
    }
}