import { describe, it } from "node:test";
import assert from "node:assert";

import { SUBKEY_SEPARATOR } from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").SubkeySeparator} SubkeySeparator
 */

export const subkeySeparatorSuite = (
  /** @type {SubkeySeparator} */ subkeySeparator,
) => {
  describe(SUBKEY_SEPARATOR, () => {
    // initial tests
    it(`should be a string`, () => {
      const subkeySeparatorType = typeof subkeySeparator;
      assert.strictEqual(subkeySeparatorType, "string");
    });
  });
};
