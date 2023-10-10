const { test, expect} =require('@playwright/test')
exports.LoginPage=
class LoginPage{
    constructor(page){
        this.page=page;
        this.signIn='#nav-link-accountList';
        this.username='#ap_email';
        this.password='#ap_password';
        this.continue='//input[@type="submit"]';
        this.signInFinal='//input[@id="signInSubmit"]';
        this.keepSignIn='//input[@type="checkbox"]';
    }
        //to perform the action define the function or methods
    
    async gotoLoginPage(url){
        await this.page.goto(url);
        //await expect(this.page).toHaveTitle('Amazon Sign In');
       await expect(this.page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    }

    async Login(username,password){
        await this.page.locator(this.signIn).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.continue).click();
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.keepSignIn).click();
        await this.page.locator(this.signInFinal).click();
    }
}