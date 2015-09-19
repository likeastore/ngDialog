describe('ngDialog open', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000/example/index.html');
  });

  it('should open from functions', function() {
    element(by.css('#via-service')).click();

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element(by.css('.ngdialog'))), 5000);

    element(by.css('.data-passed-through')).getText()
      .then(function(text) {
        expect(text).toBe('Data passed through: from a service');
      });
  });
});
