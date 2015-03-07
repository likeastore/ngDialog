describe("ngDialog", function () {
  var any = jasmine.any,
      spy = jasmine.createSpy;

  beforeEach(module('ngDialog'));

  afterEach(inject(function (ngDialog, $document) {
    ngDialog.closeAll();
    [].slice.call(
      $document.find('body').children()
    )
    .map(angular.element)
    .forEach(function (elm) {
      if (elm.hasClass('ngdialog')) {
        // yuck
        elm.triggerHandler('animationend');
      }
    });
  }));

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

  describe("with a plain template", function () {
    var elm
    beforeEach(inject(function (ngDialog, $timeout, $document, $rootScope) {
      var id = ngDialog.open({
        template: "<div><p>some text {{1 + 1}}</p></div>",
        plain: true
      }).id;
      $timeout.flush();
      elm = $document[0].getElementById(id);
    }));

    it('should have compiled the html', inject(function($document) {
      expect(elm.textContent).toEqual('some text 2');
    }));
  });

  describe("with a plain template URL", function () {
    var elm;
    beforeEach(inject(function (ngDialog, $timeout, $document, $rootScope, $httpBackend) {
      $httpBackend.whenGET('test.html').respond("<div><p>some text {{1 + 1}}</p></div>");
      var id = ngDialog.open({
        templateUrl: "test.html"
      }).id;
      $httpBackend.flush();
      $timeout.flush();
      elm = $document[0].getElementById(id);
    }));

    it('should have compiled the html', inject(function($document) {
      expect(elm.textContent).toEqual('some text 2');
    }));
  });
});