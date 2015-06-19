# 0.4.0

- [x] new `resolve` option for defining locals for ngDialog controller by [@rur](https://github.com/rur) ([PR-182](https://github.com/likeastore/ngDialog/pull/182))
- [x] support for `controllerAs` pattern by [@andrewogburn](https://github.com/andrewogburn) and [@sprbikkel](https://github.com/sprbikkel) ([PR-205](https://github.com/likeastore/ngDialog/pull/205), [PR-224](https://github.com/likeastore/ngDialog/pull/224))
- [x] added accessibility improvements (keyboard focus management / ARIA attribute) by [@richardszalay](https://github.com/richardszalay) ([PR-166](https://github.com/likeastore/ngDialog/pull/166))
- [x] added `isOpen(id)` public method by [@kasimoglou](https://github.com/kasimoglou) ([PR-219](https://github.com/likeastore/ngDialog/pull/219)) 
- [x] fix for `esc` should only close top dialog by [@jemise111](https://github.com/jemise111) ([PR-226](https://github.com/likeastore/ngDialog/pull/226))
- [x] fix for flickering dialogs in Internet Explorer by [@MvHMontySCOUT](https://github.com/MvHMontySCOUT) ([PR-207](https://github.com/likeastore/ngDialog/pull/207), discussion - [ISSUE-142](https://github.com/likeastore/ngDialog/issues/142))
- [x] fix issue when opening multiple dialogs simultaneously by [@bchelli](https://github.com/bchelli) ([PR-221](https://github.com/likeastore/ngDialog/pull/221))
- [x] various minor bug fixes, general improvements and examples updates

Thanks everybody, you're awesome! :dancer: :+1:

# 0.3.12

- [x] better `box-sizing` policy

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
