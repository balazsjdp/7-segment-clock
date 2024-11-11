module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // Adjusts for line-ending issues
        semi: true, // Enforces semicolons
      },
    ],
  },
};
