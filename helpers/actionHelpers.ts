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
                // a. Create the event
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    // b. Move finger into start position
                    { type: 'pointerMove', duration: 0, x: from.x, y: from.y },
                    // c. Finger comes down into contact with screen
                    { type: 'pointerDown', button: 0 },
                    // d. Pause for a little bit
                    { type: 'pause', duration: 100 },
                    // e. Finger moves to end position
                    //    We move our finger from the center of the element to the
                    //    starting position of the element.
                    //    Play with the duration to make the swipe go slower / faster
                    { type: 'pointerMove', duration: 1000, x: to.x, y: to.y },
                    // f. Finger gets up, off the screen
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
        // Add a pause, just to make sure the swipe is done
        await driver.pause(1000);
    }
}
