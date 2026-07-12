import { describe, it } from "node:test";
import assert from "node:assert";

import { PACKAGE_JSON_FILE_NAME } from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").PackageJsonFileName} PackageJsonFileName
 */

/* packageJsonFileNameSuite */

export const packageJsonFileNameSuite = (
  /** @type {PackageJsonFileName} */ packageJsonFileName,
) => {
  describe(PACKAGE_JSON_FILE_NAME, () => {
    // initial tests
    it(`should be a string`, () => {
      const packageJsonFileNameType = typeof packageJsonFileName;
      assert.strictEqual(packageJsonFileNameType, "string");
    });
  });
};
