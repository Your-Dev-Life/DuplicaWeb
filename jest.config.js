module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: [
    'src/index.js',
    'src/components/layouts/',
    'src/components/app.js',
    'src/components/routes.js',
  ],
};
