// ...existing code...
module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: "detect" } },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs"],
  rules: {
    // indentation
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-tabs": "error",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],

    // React rules
    "react/prop-types": "off", // turn off prop-types checks for plain JS projects
    "react/react-in-jsx-scope": "off", // not required with new JSX runtimes
    "react/jsx-no-target-blank": "off",

    // Hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // stylistic / sensible defaults
    "comma-dangle": ["error", "never"],
    "no-console": "off",
  },
};
