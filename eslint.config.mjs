import eslint from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json", // required for type-aware rules
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y
    },
    // merge recommended configs in the right order
    rules: {
      // ...eslint.configs.recommended.rules,
      // ...tseslint.configs.recommendedTypeChecked[0].rules,
      // ...reactPlugin.configs.recommended.rules,
      // ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_", // Ignores variables starting with an underscore
          varsIgnorePattern: "^_" // Ignores variables starting with an underscore
        }
      ]
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
