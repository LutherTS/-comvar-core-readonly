import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "source/library/index.js",
  outDir: "tsdown",
  dts: false,
  unbundle: true, // I might have to make a script to add fresh-import-b in this. ...Or maybe for this specific project I should not use tsdown, and not bundle at all. Which is one more sound reason why @comvar/core-readonly is a thing in the first place.
});
