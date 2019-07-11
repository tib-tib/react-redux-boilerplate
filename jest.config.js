module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./setupTests.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coveragePathIgnorePatterns: [
    './src/index.js',
    './src/store.js',
    './src/routes.js',
    './src/reducers/index.js',
  ],
  coverageReporters: [
    'html',
    'text',
    'text-summary',
  ],
};
