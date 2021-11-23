# @regrapes/eslint-config
REGRAPES best practice eslint config

## Installation
Install using npm as dev dependency:
```bash
npm i -D @regrapes/eslint-config
```

## Usage
The eslint rules are splitted to fit most use cases

### Basic *(without React and Prettier)*
`package.json`:
```json
{
  "eslintConfig": {
    "extends": "@regrapes/eslint-config"
  }
}
```

### with Prettier
this package comes with a prettier configuration. Simply add the following line to your `package.json`:
```json
{
  "prettier": "@regrapes/eslint-config/prettier"
}
```

If you want eslint to lint prettier rules, also add
```json
{
  "eslintConfig": {
    "extends": [
        "@regrapes/eslint-config",
        "@regrapes/eslint-config/rules/prettier"
    ]
  }
}
```

**Note:** 
Keep in mind that prettier linting can make a significant performance impact.
If you expirience slow linting, remove the eslint rule and refer to [vscode.md](./docs/vscode.md).

If you want eslint to lint prettier only in your CI pipelines due to performance issues use the rule
`@regrapes/eslint-config/rules/prettier-ci`

### with React
`package.json`:
```json
{
  "eslintConfig": {
    "extends": [
      "@regrapes/eslint-config",
      "@regrapes/eslint-config/rules/react",
    ]
  }
```

## Lint Script *(CI)*
`package.json`:
```json
{
  "scripts": {
    "lint": "eslint --max-warnings 0 --ext js,jsx,ts,tsx --cache src"
  }
```

`--max-warnings 0` ensures that CI pipelines will fail on any warning

## git
Add `.eslintcache` to your `.gitignore`
