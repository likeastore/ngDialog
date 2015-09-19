module.exports.config = {
  allScriptsTimeout: 11000,
  specs: ['tests/protractor/**/*.js'],
  multiCapabilities: [{
    'browserName': 'firefox'
  }],
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  mocks: {
    dir: 'mocks',
    default: []
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  plugins: [{
      path: 'node_modules/protractor/plugins/accessibility',
      chromeA11YDevTools: {
        treatWarningsAsFailures: true
      }
    },
    {
      path: 'node_modules/protractor/plugins/console',
      failOnWarning: false,
      failOnError: false
    }]
};
