module.exports = {
  'Searching Google' : function (browser) {
    browser
      .url('http://google.com')
      .assert.title('Google')
      .assert.visible('input[name="q"]')
      .end();
  },
  'Searching Google again' : function (browser) {
    browser
      .url('http://google.com')
      .assert.title('Google');

    browser.pause(15000);

    browser
      .assert.visible('input[name="q"]')
      .end();
  }
};
