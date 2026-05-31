import { describe, it } from "node:test";
import assert from "node:assert";

import { RESOLVE_CONFIG_READONLY } from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").ResolveConfigReadonly} ResolveConfigReadonly
 */

export const initialSuite = (/** @type {ResolveConfigReadonly} */ resolveConfigReadonly) => {
  describe(`${RESOLVE_CONFIG_READONLY} - initial`, () => {
    it("should be a function", () => {
      const resolveConfigReadonlyType = typeof resolveConfigReadonly;
      assert.strictEqual(resolveConfigReadonlyType, "function");
    });

    it(`should be named \`${RESOLVE_CONFIG_READONLY}\``, () => {
      const resolveConfigReadonlyName = resolveConfigReadonly.name;
      assert.strictEqual(resolveConfigReadonlyName, RESOLVE_CONFIG_READONLY);
    });
  });
};
