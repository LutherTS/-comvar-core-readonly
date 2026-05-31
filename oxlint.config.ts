import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  rules: {
    "eslint/no-unused-vars": "off", // for JSDoc
    "typescript/no-useless-empty-export": "off", // for API Extractor
  },
  ignorePatterns: ["source/tests/suites/input-operations/configs/fatal.js"],
  overrides: [
    {
      jsPlugins: ["eslint-plugin-tsdoc"],
      files: ["core-readonly.public.d.ts"],
      rules: { "tsdoc/syntax": "error" },
    },
  ],
});
