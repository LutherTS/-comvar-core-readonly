import assert from "node:assert";

import { allStaticErrorMessages_errorStatuses } from "../../constants/errors/index.js";

/**
 * @typedef {import("../../typedefs/index.js").AllStaticErrorMessages_ErrorStatuses__Key} AllStaticErrorMessages_ErrorStatuses__Key
 * @typedef {import("../../typedefs/index.js").ResolveConfigReturnType} ResolveConfigReturnType
 */

/* assert */

export const assertErrorWithMessage =
  /** @template {AllStaticErrorMessages_ErrorStatuses__Key} T */ (
    /** @type {Awaited<ResolveConfigReturnType>} */ resolveConfigResults,
    /** @type {T} */ expectedMessage,
  ) => {
    assert.strictEqual(resolveConfigResults.success, false);
    assert.strictEqual(
      resolveConfigResults.errors.some(
        (e) =>
          e.message === `ERROR. ${expectedMessage}` &&
          e.status === allStaticErrorMessages_errorStatuses[expectedMessage],
      ),
      true,
    );
  };

export const assertFailureWithMessage =
  /** @template {AllStaticErrorMessages_ErrorStatuses__Key} T */ (
    /** @type {Awaited<ResolveConfigReturnType>} */ resolveConfigResults,
    /** @type {T} */ expectedMessage,
  ) => {
    assert.strictEqual(resolveConfigResults.success, false);
    assert.strictEqual(
      resolveConfigResults.errors.some(
        (e) =>
          e.message === expectedMessage &&
          e.status === allStaticErrorMessages_errorStatuses[expectedMessage],
      ),
      true,
    );
  };
