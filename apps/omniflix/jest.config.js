module.exports = {
  name: 'omniflix',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/omniflix',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
