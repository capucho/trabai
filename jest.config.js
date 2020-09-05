module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  reporters: ['default'],
  testRegex: '(/__tests__/.*|(.|/)(test|spec)).tsx?$',
  preset: 'ts-jest',
  testEnvironment: 'node',
};
