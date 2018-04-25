import { AppPage } from './app.po';
import { browser, element, by } from 'protractor/built';

describe('accounts-portal-app', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title Accounts portal', () => {
    expect(browser.getTitle()).toEqual('Accounts portal');
  });
  it('should render login page', function () {
    const currentUrl = browser.driver.getCurrentUrl();
    expect(currentUrl).toMatch('/login');
  });

});
