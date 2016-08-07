// var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');
//
// chai.use(chaiAsPromised);
// var expect = chai.expect;

describe('Main page', function() {
  var title = browser.getTitle();
  var username = element(by.model('main.username'));
  var submit = element(by.id('submit'));
  var result = element(by.binding('main.result'));

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('should have a title', function() {
    expect(title).
      toEqual('MEAN App');
  });

  it('should return the submitted username', function() {
    username.sendKeys('test');

    submit.click();

    result.getText().
      toEqual('test');
  });
});
