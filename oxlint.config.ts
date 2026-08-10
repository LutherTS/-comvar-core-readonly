import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  ignorePatterns: [
    "tsdown/library/index.mjs",
    "source/tests/suites/input-operations/configs/fatal.js",
    "not-comments.config.js",
  ],
  overrides: [
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
