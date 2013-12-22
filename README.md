# ngDialog

Modal dialogs and popups provider for [Angular.js](http://angularjs.org/) applications.

ngDialog is small (~2Kb), has minimalistic API, highly customizable through themes and has only Angular.js as dependency.

### [Demo](ngdialog.github.io)

## Install

You can download all necessary ngDialog files manually or install it with bower:

```bash
bower install ngDialog
```

## Usage

You need only to include ``ngDialog.js`` and  ``ngDialog.css`` (as minimal setup) to your project and then you can start using ``ngDialog`` provider in your directives, controllers and services. For example in controllers:

```javascript
var app = angular.module('exampleApp', ['ngDialog']);

app.controller('MainCtrl', function ($scope, ngDialog) {
	$scope.clickToOpen = function () {
		ngDialog.open({ template: 'popupTmpl.html' });
	};
});
```

## API

ngDialog service provides easy to use and minimalistic API, but in the same time it's powerful enough. Here is the list of accessible methods that you can use:

### ``.open(options)``

Method allows to open dialog window, creates new dialog instance on each call. It accepts ``options`` object as the only argument.

##### Options:

##### ``template {String}``

Dialog template can be loaded through ``path`` to external html template or ``<script>`` tag with ``text/ng-template``:

```html
<script type="text/ng-template" id="templateId">
	<h1>Template heading</h1>
	<p>Content goes here</p>
</script>
```

```javascript
ngDialog.open({ template: 'templateId' });
```

Also it is possible to use simple string as template together with ``plain`` option.

##### ``plain {Boolean}``

If ``true`` allows to use plain string as template, default ``false``:

```javascript
ngDialog.open({
	template: '<p>my template</p>',
	plain: true
});
```

##### ``scope {Object}``

If not delegated new empty scope is created inside dialog window via ``$rootScope.new()``.

##### ``controller {String}``

Name of controller that will be used for dialog window if necessary.

##### ``className {String}``

This option allows to controll dialog look, you can use built-in [themes](https://github.com/likeastore/ngDialog#themes) or create your own styled modals.

This example enables one of built-in ngDialog themes - ``ngdialog-theme-flat`` (do not forget to include necessary css files):

```javascript
ngDialog.open({
	template: 'templateId',
	className: 'ngdialog-theme-flat'
});
```

Check [themes](https://github.com/likeastore/ngDialog#themes) block to learn more.

##### ``showClose {Boolean}``

If ``false`` it allows to hide close button on modals, default ``true``.

##### ``closeByEscape {Boolean}``

It allows to close modals by clicking ``Esc`` button, default ``true``.

This will close all open modals if there several of them open at the same time.

##### ``closeByDocument {Boolean}``

It allows to close modals by clicking on overlay background, default ``true``.

### ``.close(id)``

Method accepts dialog's ``id`` as string argument to close specific dialog window, if ``id`` is not specified it will close all currently active modals (same behavior as ``.closeAll()``).

### ``.closeAll()``

Method manages closing all active modals on the page.

## Directive

By default ngDialog module is served with ``ngDialog`` directive which can be used as attribute for buttons, links, etc. Almost all ``.open()`` options are available through tag attributes as well, the only difference is that ``ng-template`` id or path of template file is required.

Some imaginary button, for example, will look like:

```html
<button type="button"
	ng-dialog="templateId.html"
	ng-dialog-class="ngdialog-theme-flat"
	ng-dialog-controller="ModalCtrl">
	Open modal text
</button>
```

## Themes

Currently ngDialog supports..


## Licence

MIT Licensed

Copyright (c) 2013, Likeastore.com <info@likeastore.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
