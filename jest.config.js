module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: [
    'src/index.js',
    'src/components/layouts/',
    'src/components/app.js',
    'src/components/routes.js',
    'src/api/index.js',
    'src/i18n/',
    '.mock.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tests/mocks/fileMock.js',
  },
};
