module.exports = process.env.CI
  ? {
      extends: ["./prettier.js"],
    }
  : {};
