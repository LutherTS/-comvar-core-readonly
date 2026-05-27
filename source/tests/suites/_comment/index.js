import { describe, it } from "node:test";
import assert from "node:assert";

import { _COMMENT } from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js")._COMMENTType} _COMMENTType
 */

export const $COMMENTSuite = (/** @type {_COMMENTType} */ $COMMENT) => {
  describe(_COMMENT, () => {
    // initial tests
    it(`should be a string`, () => {
      const $COMMENTType = typeof $COMMENT;
      assert.strictEqual($COMMENTType, "string");
    });
  });
};
