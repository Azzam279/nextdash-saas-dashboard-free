const nextConfig = require("eslint-config-next");
const prettierConfig = require("eslint-config-prettier");
const tseslint = require("typescript-eslint");
const unusedImports = require("eslint-plugin-unused-imports");

module.exports = [
  ...nextConfig,
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "unused-imports": unusedImports,
    },
    rules: {
      ...prettierConfig.rules,
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "import/prefer-default-export": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
