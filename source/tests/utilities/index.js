import assert from "node:assert";

import { allStaticErrorMessages_errorStatuses } from "../../constants/errors/index.js";

/**
 * @typedef {import("../../typedefs/index.js").AllStaticErrorMessages_ErrorStatuses__Key} AllStaticErrorMessages_ErrorStatuses__Key
 * @typedef {import("../../typedefs/index.js").ResolveConfigReadonlyReturnType} ResolveConfigReadonlyReturnType
 */

/* assert */

/**
 * $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE
 *
 * @param resolveConfigReadonlyResults $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#RESOLVECONFIGREADONLYRESULTS
 * @param expectedMessage - $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE
 * @returns $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE
 */
export const assertFailureWithMessage =
  /** @template {AllStaticErrorMessages_ErrorStatuses__Key} T */ (
    /** @type {Awaited<ResolveConfigReadonlyReturnType>} */ resolveConfigReadonlyResults,
    /** @type {T} */ expectedMessage,
  ) => {
    assert.strictEqual(resolveConfigReadonlyResults.success, false);
    assert.strictEqual(
      resolveConfigReadonlyResults.errors.some(
        (e) =>
          e.message === expectedMessage &&
          e.status === allStaticErrorMessages_errorStatuses[expectedMessage],
      ),
      true,
    );
  };

/**
 * $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTERRORWITHMESSAGE
 *
 * @param resolveConfigReadonlyResults - $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#RESOLVECONFIGREADONLYRESULTS
 * @param expectedMessage - $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE
 * @returns $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTERRORWITHMESSAGE
 */
export const assertErrorWithMessage =
  /** @template {AllStaticErrorMessages_ErrorStatuses__Key} T */ (
    /** @type {Awaited<ResolveConfigReadonlyReturnType>} */ resolveConfigReadonlyResults,
    /** @type {T} */ expectedMessage,
  ) => {
    assert.strictEqual(resolveConfigReadonlyResults.success, false);
    assert.strictEqual(
      resolveConfigReadonlyResults.errors.some(
        (e) =>
          e.message === `ERROR. ${expectedMessage}` &&
          e.status === allStaticErrorMessages_errorStatuses[expectedMessage],
      ),
      true,
    );
  };

/**
 * $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHSTATUS
 *
 * @param resolveConfigReadonlyResults - $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#RESOLVECONFIGREADONLYRESULTS
 * @param expectedStatus - $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDSTATUS
 * @returns $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHSTATUS
 */
export const assertFailureWithStatus = async (
  /** @type {Awaited<ResolveConfigReadonlyReturnType>} */ resolveConfigReadonlyResults,
  /** @type {string} */ expectedStatus,
) => {
  assert.strictEqual(resolveConfigReadonlyResults.success, false);
  assert.strictEqual(
    resolveConfigReadonlyResults.errors.some((e) => e.status === expectedStatus),
    true,
  );
};
