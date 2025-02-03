import eslintJs from "@eslint/js"
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import { default as eslintReact, default as tseslint } from 'typescript-eslint'
export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      eslintJs.configs.recommended,
      tseslint.configs.recommended,
      eslintReact.configs.recommended
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        projectService: true
      }
    },
    plugins: [{
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
      "react"
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      indent: ['error', 2],
      "no-unused-vars": ["error", {
        vars: "all",
        args: "after-used",
        caughtErrors: "all",
        ignoreRestSiblings: false,
        reportUsedIgnorePattern: false
      }],
      "function-paren-newline": ["error", "never"],
    },
  },
)