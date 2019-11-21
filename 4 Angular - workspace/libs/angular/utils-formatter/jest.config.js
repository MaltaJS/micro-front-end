module.exports = {
  name: 'angular-utils-formatter',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/angular/utils-formatter',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
