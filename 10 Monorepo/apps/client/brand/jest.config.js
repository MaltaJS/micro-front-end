module.exports = {
  name: 'client-brand',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/client/brand',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
