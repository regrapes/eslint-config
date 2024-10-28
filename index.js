import * as parser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import neostandard, { plugins } from 'neostandard'
import tseslint from 'typescript-eslint'

const prettierConfig = {
  ...eslintPluginPrettier,
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        tabWidth: 2,
        useTabs: false,
        printWidth: 130,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'avoid',
      },
    ],
  },
}

const reactConfig = {
  plugins: {
    'react-refresh': reactRefresh,
    'react-hooks': reactHooks,
    react: plugins.react,
  },
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-handler-names': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': 'warn',
  },
}

export default ({ prettier, react }) => [
  ...neostandard({
    noStyle: true,
  }),
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...global.es2020,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-unused-vars': 'off',
      'no-empty': 'off',
      'arrow-body-style': ['warn', 'as-needed'],
      'import/consistent-type-specifier-style': 'off',
      'import/no-named-as-default-member': 'off',
      'import/default': 'off',
      'import/named': 'off',
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '~/**',
              group: 'internal',
            },
          ],
          named: {
            enabled: true,
            types: 'types-last',
          },
          alphabetize: {
            order: 'asc',
          },
          groups: ['external', 'builtin', 'internal', 'parent', 'index', 'object', 'sibling'],
        },
      ],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    ignores: ['dist', 'build', 'node_modules'],
  },
  ...(prettier ? [prettierConfig] : []),
  ...(react ? [reactConfig] : []),
]

export { plugins }
