describe('ngDialog', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000/example/paddingTest.html');
  });

  it('should add padding to the body tag when a scrollbar is present', function() {
    expect( $('body').getCssValue('padding-right') ).toBe( "0px" );
    $('.openPaddingLink').click();
    browser.sleep( 500 );
    expect( $('body').getCssValue('padding-right') ).not.toBe( "0px" );
    $('.ngdialog-overlay').click();
    browser.sleep( 500 );
    expect( $('body').getCssValue('padding-right') ).toBe( "0px" );
  });

  it('should communicate the body padding to the application', function() {
    expect( $('body').getCssValue('padding-right') ).toBe( "0px" );
    expect( $('body').getCssValue('padding-right') ).toBe( $('.paddingHeader').getCssValue('padding-right') );
    $('.openPaddingLink').click();
    browser.sleep( 500 );
    expect( $('body').getCssValue('padding-right') ).not.toBe( "0px" );
    expect( $('body').getCssValue('padding-right') ).toBe( $('.paddingHeader').getCssValue('padding-right') );
    $('.ngdialog-overlay').click();
    browser.sleep( 500 );
    expect( $('body').getCssValue('padding-right') ).toBe( "0px" );
    expect( $('body').getCssValue('padding-right') ).toBe( $('.paddingHeader').getCssValue('padding-right') );
  });
});
