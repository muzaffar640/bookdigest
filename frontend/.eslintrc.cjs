module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
  overrides: [
    {
      files: ["**/*.cjs"],
      env: {
        node: true,
      },
    },
  ],
};
// module.exports = {
//   // ...
//   env: {
//     // If you don't want to change this to `node: true` globally
//     es2022: true,
//   },
//     // then add this:
//   overrides: [
//     {
//       files: ['**/*.cjs'],
//       env: {
//         node: true,
//       },
//     },
//   ],
// }
