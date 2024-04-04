import { Given, When, Then} from '@wdio/cucumber-framework';
import ActionHelper, {} from '../../helpers/actionHelpers'
import SigninPage from '../pageobjects/sign.in.page';
import MyAccountPage from '../pageobjects/my.account.page';
import PasswordErrorPage from '../pageobjects/password.error.page';
import user from '../../data/user.json';

let username: string=""
let password: string=""

Given(/^The user is currently signed out of the application$/, async () => {
  await ActionHelper.launchApp();
});

Given('the user has arrived on the apps Sign In page', async () => {
  await SigninPage.waitForSignInButtonToBeVisible(5);
})

When('the username is entered into the username field', async () => {
  await SigninPage.enterUsernameField(username);
})

Given('the password is valid', async () => {
  password=await user.user.valid_password;
})

When('the password is entered into the password field', async () => {
  await SigninPage.enterPasswordField(password);
})

Given('the username is valid', async () => {
  username=await user.user.username;
})

Then('the Sign Out button appears on My Account \(scroll down)', async () => {
  await MyAccountPage.swipeFromHeaderText()
  expect(MyAccountPage.signOutButton).toBeDisabled();
})

Then('the user is successfully signed into the application', async () => {
  expect(await MyAccountPage.headerText).toBeDisplayed();
})

When('the user taps the Sign In button', async () => {
  await SigninPage.tapSignInButton();
})

Then('the correct error message for invalid password appears', async () => {
  expect(await PasswordErrorPage.errorMessage()).toContain("We can't find an account with that email and password combination");
})

Given('the password is invalid', async () => {
  password= await user.user.invalid_password;
})
