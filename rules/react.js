module.exports = {
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/no-array-index-key': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
