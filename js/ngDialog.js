/*
 * ngDialog - easy modals and popup windows
 * http://github.com/likeastore/ngDialog
 * (c) 2013 MIT License, https://likeastore.com
 */

(function (window, angular, undefined) {
	'use strict';

	angular.module('ngDialog', []).provider('ngDialog', function () {
		var $el = angular.element;
		var settings = {};

		this.$get = ['$document', '$templateCache', '$compile', '$q', '$rootScope',
			function ($document, $templateCache, $compile, $q, $rootScope) {
				var privateMethods = {
					onDocumentClick: function () {

					},

					onDocumentKeyup: function () {

					}
				};

				var publicMethods = {
					open: function () {

					},

					close: function () {

					},

					ready: function () {

					},

					loading: function () {

					}
				};

				return publicMethods;
			}];
	});


})(window, window.angular);
