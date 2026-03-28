import { HeaderPage } from "./HeaderPage";


export class SignInPage extends HeaderPage{
    emailTextBox = '[action="/login"] [name="email"]';
    passwordTextBox = '[action="/login"] [name="password"]';
    signInButton = '[data-qa="login-button"]';
    constructor(page){
        super(page)
    }

    async enterUserName(userName){
        await this.fill(this.emailTextBox,userName);
    }

    async enterPassword(password){
        await this.fill(this.passwordTextBox,password);
    }

    async signIn(){
        await this.clickOnElement(this.signInButton);
    }
}