module.exports.config = {
  allScriptsTimeout: 11000,
  specs: ['tests/protractor/test.js'],
  multiCapabilities: [{
    'browserName': 'chrome'
  }],
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  mocks: {
    dir: 'mocks',
    default: []
  },
  seleniumAddress: 'http://chromestandalone:4444/wd/hub',
  plugins: [{
      path: 'node_modules/protractor/plugins/accessibility',
      chromeA11YDevTools: {
        treatWarningsAsFailures: false
      }
    },
    {
      path: 'node_modules/protractor/plugins/ngHint',
      asTests: true
    },
    {
      path: 'node_modules/protractor/plugins/console',
      failOnWarning: false,
      failOnError: false
    }]
};
