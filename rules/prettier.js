module.exports = {
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true,
        allowUnboundThis: true,
      },
    ],
  },
};
