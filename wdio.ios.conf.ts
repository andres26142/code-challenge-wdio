import { config as baseConf} from './wdio.conf.ts'
import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {
    ...baseConf,
    capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': '116bae680180c9962f171d2b6ab0402a38b63f28',
    'appium:platformVersion': '17',
    "appium:bundleId": "com.tz.ticketmaster",
    'appium:automationName': 'XCUITest',
    'appium:noReset': false,
    'appium:autoAcceptAlerts': true,
    'appium:autoGrantPermissions': true,
}]
}