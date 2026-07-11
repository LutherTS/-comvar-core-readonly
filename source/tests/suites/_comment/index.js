import { describe, it } from "node:test";
import assert from "node:assert";

import { _COMMENT } from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").$COMMENT__Type} $COMMENT__Type
 */

export const $COMMENTSuite = (/** @type {$COMMENT__Type} */ $COMMENT) => {
  describe(_COMMENT, () => {
    // initial tests
    it(`should be a string`, () => {
      const $COMMENTType = typeof $COMMENT;
      assert.strictEqual($COMMENTType, "string");
    });
  });
};
