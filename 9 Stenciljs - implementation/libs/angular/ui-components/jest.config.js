module.exports = {
  name: 'angular-ui-components',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/angular/ui-components',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
