// jest.config.js

module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
      '^axios$': './__mocks__/axios',
    },
  };
  