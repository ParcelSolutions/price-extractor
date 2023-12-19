module.exports = {
  reporter: 'spec',
  require: [
    'ts-node/register',
    'source-map-support/register'
  ],
  recursive: true,
  spec: 'src/test/**/*.spec.ts'
};
