import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  ignorePatterns: ["source/tests/suites/input-operations/configs/fatal.js"],
  overrides: [
    {
      files: ["source/library/utilities/fresh-import-b.js"],
      rules: {
        "eslint/no-unused-vars": "off", // for unused try-catch error
      },
    },
    {
      jsPlugins: ["eslint-plugin-tsdoc"],
      files: ["core-readonly.d.ts", "core-readonly.public.d.ts"],
      rules: {
        "tsdoc/syntax": "error",
        "typescript/no-useless-empty-export": "off",
      },
    },
  ],
});
