import { driver, $ } from '@wdio/globals'
class PasswordErrorPage{
    public get invalidEmailError() {
        return driver.isIOS
        ? $('-ios class chain:**/XCUIElementTypeStaticText[`label == "LongError String For Invalid Email"`]')
        : $('android=new UiSelector().resourceIdMatches(".*:id/Long ErrorString For Invalid Email")')}
    public get invalidPasswordError() {
        return driver.isIOS
        ? $('-ios class chain:**/XCUIElementTypeStaticText[`label == "LongError String For Invalid Password"`]')
        : $('android=new UiSelector().resourceIdMatches(".*:id/Long ErrorString For Invalid Password")')}
    public get forgotPasswordButton() {
        return driver.isIOS
        ? $('-ios class chain:**/XCUIElementTypeButton[`label == "ForgotPassword"`]')
        : $('android=new UiSelector().resourceIdMatches(".*:id/ForgotPassword Button")')}
    public async errorMessage():Promise<string> {
            return (await this.invalidPasswordError).getText();
        }
}
export default new PasswordErrorPage()