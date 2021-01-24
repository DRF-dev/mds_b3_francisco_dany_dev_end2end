describe('Uber website', function() {
  beforeEach(browser => browser.url("https://www.uber.com/fr/fr/"))

  test('Check title page', function (browser) {
    browser.waitForElementVisible('html')
    browser.assert.titleContains('Uber')
    browser.expect.element('main').to.be.present
    browser.end();
  });

  /* browser
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end(); */
});
