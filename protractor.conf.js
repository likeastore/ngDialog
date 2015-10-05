var args = process.argv.slice(2);
var plugins = [];

var useA11y = args.indexOf('--a11y') > -1;
var useConsole = args.indexOf('--console-warning') > -1 || args.indexOf('--console-error') > -1;

if (useA11y) {
    plugins.push({
        path: 'node_modules/protractor/plugins/accessibility',
        chromeA11YDevTools: {
            treatWarningsAsFailures: true
        }
    });
}

if (useConsole) {
    plugins.push({
        path: 'node_modules/protractor/plugins/console',
        failOnWarning: args.indexOf('--console-warning') > -1,
        failOnError: args.indexOf('--console-error') > -1
    });
}

var multiCapabilities = [{
    browserName: 'chrome'
}, {
    browserName: 'firefox'
}];

if (!useA11y) {
    multiCapabilities.push({
       browserName: 'safari'
    });
}

if (!useA11y && !useConsole) {
    multiCapabilities.push({
        browserName: 'internet explorer',
        version: 10
    });
    multiCapabilities.push({
        browserName: 'internet explorer',
        version: 11
    });
}

multiCapabilities.forEach(function(capability) {
    capability['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
    capability.name = 'ngDialog Protractor ' +  process.env.TRAVIS_JOB_NUMBER;
});

module.exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    allScriptsTimeout: 11000,
    specs: ['tests/protractor/**/*.js'],
    multiCapabilities: multiCapabilities,
    framework: 'jasmine',
    jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
    },
    sauceSeleniumAddress: 'localhost:4445/wd/hub',
    plugins: plugins
};
