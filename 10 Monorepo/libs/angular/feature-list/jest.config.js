module.exports = {
  name: 'angular-feature-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/angular/feature-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
