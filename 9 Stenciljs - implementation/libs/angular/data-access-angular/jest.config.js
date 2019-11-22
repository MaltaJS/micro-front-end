module.exports = {
  name: 'angular-data-access-angular',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/angular/data-access-angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
