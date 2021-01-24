describe('Uber website', function() {
  beforeEach(browser => browser.url("https://www.uber.com/fr/fr/"))

  test('Check title page', function (browser) {
    browser.waitForElementVisible('html')
    browser.assert.titleContains('Uber')
    browser.expect.element('#main').to.be.present
    browser.end();
  });

  test('Check buttons (connection and inscription)', function (browser) {
    browser
    .waitForElementVisible('html')
    browser.expect.element('#main > nav > div > ul.bm.d4.d5.d6.d7.d8.bc.bh.du.dv.db.b7.b6.b8.bj > li:nth-child(1) > button').to.be.present
    browser.expect.element('#main > nav > div > ul.bm.d4.d5.d6.d7.d8.bc.bh.du.dv.db.b7.b6.b8.bj > li:nth-child(2) > button').to.be.present
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
