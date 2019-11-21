module.exports = {
  name: 'client-angular',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/client/angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
