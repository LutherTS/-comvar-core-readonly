import { describe } from "node:test";

import { resolveConfigReadonly } from "../../source/library/index.js"; // dev
// import { resolveConfigReadonly } from "../../tsdown/index.mjs"; // prod // DOESN'T WORK BECAUSE OF freshImport. BUNDLING MIGHT NOT BE A GOOD IDEA HERE.
// This also means being selective about the `files` key in `package.json` in order to include neither tests nor typedefs.

import { RESOLVE_CONFIG_READONLY } from "./constants/index.js";

import { initialSuite } from "./suites/initial/index.js";
import { inputValidationsSuite } from "./suites/input-validations/index.js";
import { inputOperationsSuite } from "./suites/input-operations/index.js";
import { configValidationsSuite } from "./suites/config-validations/index.js";
import { configOperationsSuite } from "./suites/config-operations/index.js";

describe(RESOLVE_CONFIG_READONLY, () => {
  // initial tests
  initialSuite(resolveConfigReadonly);

  // input validations tests
  inputValidationsSuite(resolveConfigReadonly);

  // input operations tests
  inputOperationsSuite(resolveConfigReadonly);

  // config validations tests
  configValidationsSuite(resolveConfigReadonly);

  // config operations tests
  configOperationsSuite(resolveConfigReadonly);
});
