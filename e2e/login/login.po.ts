import { browser, element, by } from 'protractor';

export class LoginPage {

    public login(username: string, password: string) {

        element(by.name('username')).sendKeys(username);
        element(by.name('password')).sendKeys(password);
        console.log('sending credentials');
        element(by.id('loginbtn')).click();
    }

    public logout() {
        const logoutLink = element(by.cssContainingText('a', 'Logout'));
        browser.isElementPresent(logoutLink)
            .then(isPresent => {
                if (isPresent) {
                    logoutLink.click();
                }
            });
    }
}
