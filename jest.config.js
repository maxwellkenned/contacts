module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/__test__/setupTests.ts'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary']
}
