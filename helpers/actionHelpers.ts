import { driver } from '@wdio/globals'
interface XY {
    x:number;
    y:number;
}
export default class ActionHelper{
    static launchApp() {
        driver.launchApp();
    }
    static explicitWait(seconds: number){
        driver.pause(seconds*1000)
        console.log('Finished waits')
    }
    static async checkIfDisplayed (element:WebdriverIO.Element){
        if (await element.isDisplayed()) {
            throw new Error(`The element '${element}' is not visible.`);
        }
    }
    static async waitForELementToBeDisplayed (element:WebdriverIO.Element, seconds:number){
        element.waitForDisplayed({timeout:seconds*1000})
    }
    static async swipe (from: XY, to: XY) {
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: from.x, y: from.y },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 1000, x: to.x, y: to.y },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
        await driver.pause(1000);
    }
}
