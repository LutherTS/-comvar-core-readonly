import { describe, it } from "node:test";
import assert from "node:assert";

import { DEFAULT_CONFIG_FILE_NAME } from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").DefaultConfigFileName} DefaultConfigFileName
 */

/* defaultConfigFileNameSuite */

export const defaultConfigFileNameSuite = (
  /** @type {DefaultConfigFileName} */ defaultConfigFileName,
) => {
  describe(DEFAULT_CONFIG_FILE_NAME, () => {
    // initial tests
    it(`should be a string`, () => {
      const defaultConfigFileNameType = typeof defaultConfigFileName;
      assert.strictEqual(defaultConfigFileNameType, "string");
    });
  });
};
