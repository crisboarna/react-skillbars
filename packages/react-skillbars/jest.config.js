module.exports = {
  displayName: 'react-skillbars',
  preset: './jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      diagnostics: {
        ignoreCodes: ['TS151001'],
      },
    },
  },
  testEnvironment: 'jsdom',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/react/',
    '@testing-library/jest-dom/extend-expect',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 94,
      lines: 98,
      statements: 98,
    },
  },
};
