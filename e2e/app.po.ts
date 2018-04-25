import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  public expectDOMTitleToBe(title: string): void {
    expect(browser.getTitle()).toBe(title);
  }
  public waitForErrorTextToBe(text: string): void {
    const alertEl = element(by.css('.alert-danger'));
    browser.wait(
      () => ExpectedConditions.textToBePresentInElement(alertEl, text),
      5000,
      `Error alert should contain "${text}" within 5 seconds`
    );
  }

}
