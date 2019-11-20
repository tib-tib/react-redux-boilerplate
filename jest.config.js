module.exports = {
  verbose: true,
  roots: [
    '<rootDir>/src',
    '<rootDir>/test',
  ],
  testMatch: [
    '*.spec.(ts|tsx)',
    '**/*.spec.(ts|tsx)',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
  ],
  coveragePathIgnorePatterns: [
    './src/index.ts',
    './src/store/index.ts',
  ],
  coverageReporters: [
    'text',
    'text-summary',
  ],
};
