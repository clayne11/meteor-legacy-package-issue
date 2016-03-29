Package.describe({
  name: 'test:package-two',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  configure(api);
});

Package.onTest(function(api) {
  configure(api);
  api.use('sanjo:jasmine@0.20.3');
});

function configure(api) {
  api.versionsFrom('1.1.0.2');

  api.use('ecmascript');
  api.use('test:package-one');

  api.addFiles('index.js');
}
