# VSCode config

to configure you ESLint editor plugin to lint `.js` and `.ts`,
add the following to your global or project `settings.json`:

```json
"eslint.options": {
  "extensions": [
    ".js",
    ".ts",
  ]
},
"eslint.validate": [
  "javascript",
  "typescript",
]
```