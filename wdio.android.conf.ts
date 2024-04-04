import { config as baseConf} from './wdio.conf.ts'
import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {
    ...baseConf,
    capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'ZY22FP4XHK',
    'appium:platformVersion': '13.0',
    "appium:appPackage": "com.tz.ticketmaster",
    "appium:appActivity": "com.tz.ticketmaster.MainActivity",
    'appium:automationName': 'UiAutomator2',
    'appium:noReset': false,
    'appium:autoAcceptAlerts': true,
    'appium:autoGrantPermissions': true,
}]
}