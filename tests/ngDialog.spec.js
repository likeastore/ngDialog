describe("ngDialog", function () {
  var any = jasmine.any,
      spy = jasmine.createSpy;

  beforeEach(module('ngDialog'));

  it('should inject the ngDialog service', inject(function(ngDialog) {
    expect(ngDialog).toBeDefined();
  }));

  describe("no options", function () {
    var inst, elm;
    beforeEach(inject(function (ngDialog, $document, $timeout) {
      inst = ngDialog.open();
      $timeout.flush();
      elm = $document[0].getElementById(inst.id);
    }));

    it('should have returned a dialog instance object', function() {
      expect(inst).toBeDefined();
    });

    it('should include a document id', function() {
      expect(inst.id).toEqual('ngdialog1');
    });

    it('should add an id to the DOM with ', function() {
      expect(elm).toBeDefined();
    });

    it('should have an empty template', function() {
      expect(elm.textContent).toEqual('Empty template');
    });
  });

});