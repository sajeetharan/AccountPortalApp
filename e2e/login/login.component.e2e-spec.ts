import { browser, element, by } from 'protractor';
import { LoginPage } from '../login/login.po';
import { AppPage } from '../app.po';

function waitForUrlToChangeTo(urlRegex) {
    let currentUrl;

    return browser.getCurrentUrl().then(function storeCurrentUrl(url) {
        currentUrl = url;
    }
    ).then(function waitForUrlToChangeTo() {
        return browser.wait(function waitForUrlToChangeTo() {
            return browser.getCurrentUrl().then(function compareCurrentUrl(url) {
                return url === urlRegex;
            });
        });
    }
        );
}
describe('Login component', () => {
    let loginPage: LoginPage;
    let appPage: AppPage;
    let nameInput;
    let passwordInput;
    let loginForm;

    beforeAll(() => {
        loginPage = new LoginPage();
        appPage = new AppPage();
        loginPage.logout();
        browser.get('/login');
        nameInput = element(by.name('username'));
        passwordInput = element(by.name('password'));
        loginForm = element(by.css('form'));
    });

    it('has the correct DOM title', () => {
        appPage.expectDOMTitleToBe('Accounts portal');
    });

    describe('error alert', () => {
        beforeEach(() => {
            nameInput.clear();
            passwordInput.clear();
        });

        it('fails login and displays error message', () => {
            const name = 'Sundt';
            passwordInput.sendKeys(name);
            passwordInput.sendKeys('invalidpass');
            loginForm.submit();
            appPage.waitForErrorTextToBe('Username or password is incorrect.');
        });
    });

    describe('Authenticate and navigate to dashboar', () => {
        beforeEach(() => {
            nameInput.clear();
            passwordInput.clear();
        });

        it('Performs login and navigate to dashboard', () => {
            const loginURL = browser.getCurrentUrl();
            loginPage.login('Sundt', 'Sundt');
            browser.sleep(5000);
            expect(browser.getCurrentUrl()).toContain('dashboard');

        });


    });
});
