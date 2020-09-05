module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
    "^.+\\.test.ts$": "ts-jest"
  },
  moduleFileExtensions: ["js", "svelte", "ts"],
  testPathIgnorePatterns: ["node_modules", "cypress"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ["node_modules"],
  collectCoverage: true,
  // jest-dom adds custom jest matchers for asserting on DOM nodes.
  // allows you to do things like:
  // expect(element).toHaveTextContent(/react/i)
  // learn more: https://github.com/testing-library/jest-dom
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};