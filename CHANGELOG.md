# 0.3.11
- [x] prevent the modal from closing if preCloseCallback returns a falsy value

# 0.3.10
- [x] fix negative dialogs count

# 0.3.9
- [x] fix destroy scope with animation for multiple dialog [ISSUE-125](https://github.com/likeastore/ngDialog/issues/125)

# 0.3.8

- [x] Make ngDialog work with AngularJS 1.3 when `$compileProvider` debug info is disabled - `$compileProvider.debugInfoEnabled(false)`.

# 0.3.7

- [x] support for [UMD pattern](https://github.com/umdjs/umd)
- [x] get rid of `module` variable in source code
- [x] get rid of `window` dependency in flavor of `$window`

# 0.3.6

- [x] finally (after many requests) `$scope.ngDialogData` holds reference to the objects passed instead of copying them.

# 0.3.5

- [x] fix for HammerJS 1.1 breaking dialog

# 0.3.4

- [x] add support for `overlay` option (https://github.com/likeastore/ngDialog/issues/117)

# 0.3.3

- [x] successful tests and support for Angular.js `1.3.x`

# 0.3.2

- [x] fixed an issue with Hammer.js manager

# 0.3.1

- [x] `ngDialog.closing` event
- [x] `closeByNavigation` option
- [x] `templateUrl` option

# 0.3.0

- [x] `.openConfirm()` method
- [x] `.setForceBodyReload()` method
- [x] add support for `.setDefaults()` method
- [x] fix scroll jump bug
- [x] fix event broadcasting to occur at the times they should
- [x] fix for `ngDialogData` being passed after controller instantiation
- [x] allow objects for `ngDialogData`
- [x] `cache` option
- [x] `preCloseCallback` option
- [x] `appendTo` option
- [x] `name` option
- [x] minor code fixes and optimizations, examples improvements

# 0.2.2
