import { driver, $ } from '@wdio/globals'
import ActionHelper, {} from '../../helpers/actionHelpers'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SigninPage{
    /**
     * define selectors using getter methods
     */
    public get emailField () {
        return driver.isIOS ?$('-ios class chain:**/XCUIElementTypeTextField[`label == "EmailField"`]')
        :$('android=new UiSelector().resourceIdMatches(".*:id/EmailField")');
    }

    public get passwordField () {
        return driver.isIOS ?$('-ios class chain:**/XCUIElementTypeSecureTextField[`label ==Password Field"`]')
        :$('android=new UiSelector().resourceIdMatches(".*:id/Password Field")');
    }

    public get signInBtn () {
        return driver.isIOS ? $('-ios class chain:**/XCUIElementTypeButton[`label == "SignIn"`]')
        :$('android=new UiSelector().resourceIdMatches(".*:id//Sign In Button")');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login () {
        console.log("finished wait");
    }
    public async waitForSignInButtonToBeVisible(seconds: number){
        const signInBtn = await this.signInBtn;
        await ActionHelper.waitForELementToBeDisplayed(signInBtn,seconds);
    }
    public async enterUsernameField(username:string){
        await this.emailField.setValue(username);
    }
    public async enterPasswordField(password:string){
        await this.passwordField.setValue(password);
    }
    public async tapSignInButton(){
        (await this.signInBtn).click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
}

export default new SigninPage();
