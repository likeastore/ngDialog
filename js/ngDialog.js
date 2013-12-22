/*
 * ngDialog - easy modals and popup windows
 * http://github.com/likeastore/ngDialog
 * (c) 2013 MIT License, https://likeastore.com
 */

(function (window, angular, undefined) {
	'use strict';

	var module = angular.module('ngDialog', []);
	var $el = angular.element;
	var isDef = angular.isDefined;
	var style = (document.body || document.documentElement).style;
	var animationEndSupport = isDef(style.animation) || isDef(style.WebkitAnimation) || isDef(style.MozAnimation) || isDef(style.MsAnimation) || isDef(style.OAnimation);
	var animationEndEvent = 'animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend';

	module.provider('ngDialog', function () {
		var defaults = {
			className: 'ngdialog-theme-default',
			plain: false,
			showClose: true,
			closeByDocument: true,
			closeByEscape: true
		};

		this.$get = ['$document', '$templateCache', '$compile', '$q', '$http', '$rootScope', '$timeout',
			function ($document, $templateCache, $compile, $q, $http, $rootScope, $timeout) {
				var $body = $document.find('body');
				var $dialog;

				var privateMethods = {
					onDocumentClick: function (event) {
						var isOverlay = $el(event.target).hasClass('ngdialog-overlay');
						var isCloseBtn = $el(event.target).hasClass('ngdialog-close');

						if (isOverlay || isCloseBtn) {
							publicMethods.close();
						}
					},

					onDocumentKeyup: function () {
						if (event.keyCode === 27) {
							publicMethods.close();
						}
					}
				};

				var publicMethods = {
					/*
					 * @param {Object} options:
					 * - template {String} - id of ng-template, url for partial, plain string (if enabled)
					 * - plain {Boolean} - enable plain string templates, default false
					 * - scope {Object}
					 * - controller {String}
					 * - className {String} - dialog theme class
					 * - showClose {Boolean} - show close button, default true
					 * - closeByEscape {Boolean} - default true
					 * - closeByDocument {Boolean} - default true
					 *
					 * @return {Object} dialog
					 */
					open: function (options) {
						options = options || {};
						angular.extend(options, defaults);

						var scope = options.scope && angular.isObject(options.scope) || $rootScope.$new();

						//debugger;
						$q.when(loadTemplate(options.template)).then(function (template) {
							//debugger;
							if (options.showClose) {
								template += '<div class="ngdialog-close"></div>';
							}

							$dialog = $el('<div class="ngdialog"></div>');
							$dialog.html('<div class="ngdialog-overlay"></div><div class="ngdialog-content">' + template + '</div>');

							if (options.className) {
								$dialog.addClass(options.className);
							}

							$timeout(function () {
								$compile($dialog)(scope);
							});

							scope.$on('$destroy', function () {
								$dialog.remove();
							});

							$body.addClass('ngdialog-open').append($dialog);

							if (options.closeByEscape) {
								$dialog.bind('keyup', privateMethods.onDocumentKeyUp);
							}

							if (options.closeByDocument) {
								$dialog.bind('click', privateMethods.onDocumentClick);
							}

							return publicMethods;
						});

						function loadTemplate (tmpl) {
							if (!tmpl) {
								return 'Empty template';
							}

							if (angular.isString(tmpl) && options.raw) {
								return tmpl;
							}

							return $templateCache.get(tmpl) || $http.get(tmpl, { cache: true });
						}
					},

					/*
					 * @return {Object} dialog
					 */
					close: function () {
						$dialog.unbind('keyup', privateMethods.onDocumentKeyup)
							.unbind('click', privateMethods.onDocumentClick)
							.removeClass('ngdialog-open');

						if (animationEndSupport) {
							$dialog.unbind(animationEndEvent).bind(animationEndEvent, function () {
								$dialog.remove();
							}).addClass('ngdialog-closing');
						} else {
							$dialog.remove();
						}

						return publicMethods;
					}
				};

				return publicMethods;
			}];
	});

	module.directive('ngDialog', function () {});

})(window, window.angular);
