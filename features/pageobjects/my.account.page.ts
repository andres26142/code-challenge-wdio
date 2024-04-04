import { driver, $ } from '@wdio/globals'
import ActionHelper, {} from '../../helpers/actionHelpers'
class MyAccountPage{
    public get signOutButton() {
        return driver.isIOS
        ? $('-ios class chain:**/XCUIElementTypeButton[`label == "SignOut"`]')
        : $('android=new UiSelector().resourceIdMatches(".*:id/Sign OutButton")')
    }
    public get signInButton () {
        return driver.isIOS
        ? $('-ios class chain:**/XCUIElementTypeButton[`label == "SignIn"`]')
        : $('android=new UiSelector().resourceIdMatches(".*:id/Sign InButton")')
    }
    public get headerText() {
        return driver.isIOS
        ? $('-ios class chain:**/XCUIElementTypeStaticText[`label == "MyAccount"`]')
        : $('android=new UiSelector().resourceIdMatches(".*:id/MyAccount")')
    }
    async swipeFromHeaderText() {
        const headerText = await this.headerText;
    
        const elemRect =await driver.getElementRect(await headerText.elementId);
        console.log("value of elemRect ", elemRect);
        const elemXCenter = Math.round(elemRect.x + (elemRect).width / 2);
        console.log("Element X center ", elemXCenter);
        const elemYCenter = Math.round((elemRect).y + (elemRect).height / 2);
        console.log("Element Y center ", elemYCenter);
    
        const newYPosition = 300;
        await ActionHelper.swipe(
          { x: elemXCenter, y: elemYCenter },
          { x: elemXCenter, y: newYPosition }
        );
    }
}
export default new MyAccountPage();