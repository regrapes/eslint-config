module.exports = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules', 'build', 'dist'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    }
  },
  env: {
    es2021: true
  },
  plugins: ['@typescript-eslint', 'standard', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  rules: {
    complexity: ['error', 10],
    camelcase: 'off',
    'no-unused-expressions': 'off',
    'valid-typeof': 'off',
    'no-invalid-this': 'off',
    'no-unused-vars': 'off',
    'no-extra-boolean-cast': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    'no-else-return': 'off',
    'no-multiple-empty-lines': 'error',
    'no-underscore-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-nested-ternary': 'off',
    'no-undef': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        "assertionStyle": "never"
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      },
    ],
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-default': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': ['error', { js: 'never', ts: 'never', jsx: 'never', tsx: 'never' }],
    'max-len': ['error', 130, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'arrow-parens': ['error', 'as-needed'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'no-confusing-arrow': 'off',
    'function-paren-newline': 'off',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    indent: ['error', 2, {
      ignoredNodes: [
        'ConditionalExpression', 
        'ConditionalExpression > ObjectExpression', 
        'ConditionalExpression > NewExpression > ObjectExpression'
      ],
      SwitchCase: 1,
      flatTernaryExpressions: true,
      offsetTernaryExpressions: true
    }],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true,
      allowUnboundThis: true
    }],
    quotes: ['error', 'single', { allowTemplateLiterals: false }],
    'quote-props': [ 'error', 'as-needed' ],
    'no-console': [ 'warn', {
      allow: [
        'info',
        'warn',
        'error',
      ]
    }],
    'no-useless-constructor': 'off',
    'import/extensions': 'off',
  },
}
