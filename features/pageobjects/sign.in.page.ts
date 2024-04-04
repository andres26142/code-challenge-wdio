import { driver, $ } from '@wdio/globals'
import ActionHelper, {} from '../../helpers/actionHelpers'
class SigninPage{
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
}
export default new SigninPage();
