module.exports = {
  extends: [
    'plugin:fp/recommended',
  ],
  plugins: ['fp'],
  rules: {
    'fp/no-mutation': ['error', { commonjs: true }],
    'fp/no-unused-expression': 'off',
    'fp/no-rest-parameters': 'off',
    'fp/no-nil': 'off',
    'fp/no-throw': 'off'
  },
}
