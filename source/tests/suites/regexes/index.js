import { describe, it } from "node:test";
import assert from "node:assert";

import {
  CONFIG_DATA_KEY_REGEX,
  CONFIG_DATA_SUBKEY_REGEX,
  FLATTENED_CONFIG_DATA_KEY_LOCAL_REGEX,
  FLATTENED_CONFIG_DATA_KEY_GLOBAL_REGEX,
  FLATTENED_CONFIG_DATA_PLACEHOLDER_LOCAL_REGEX,
  FLATTENED_CONFIG_DATA_PLACEHOLDER_GLOBAL_REGEX,
} from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").ConfigDataKeyRegex} ConfigDataKeyRegex
 * @typedef {import("../../../types/index.ts").ConfigDataSubkeyRegex} ConfigDataSubkeyRegex
 * @typedef {import("../../../types/index.ts").FlattenedConfigDataKeyLocalRegex} FlattenedConfigDataKeyLocalRegex
 * @typedef {import("../../../types/index.ts").FlattenedConfigDataKeyGlobalRegex} FlattenedConfigDataKeyGlobalRegex
 * @typedef {import("../../../types/index.ts").FlattenedConfigDataPlaceholderLocalRegex} FlattenedConfigDataPlaceholderLocalRegex
 * @typedef {import("../../../types/index.ts").FlattenedConfigDataPlaceholderGlobalRegex} FlattenedConfigDataPlaceholderGlobalRegex
 */

export const regexSuites = (
  /** @type {ConfigDataKeyRegex} */ configDataKeyRegex,
  /** @type {ConfigDataSubkeyRegex} */ configDataSubkeyRegex,
  /** @type {FlattenedConfigDataKeyLocalRegex} */ flattenedConfigDataKeyLocalRegex,
  /** @type {FlattenedConfigDataKeyGlobalRegex} */ flattenedConfigDataKeyGlobalRegex,
  /** @type {FlattenedConfigDataPlaceholderLocalRegex} */ flattenedConfigDataPlaceholderLocalRegex,
  /** @type {FlattenedConfigDataPlaceholderGlobalRegex} */ flattenedConfigDataPlaceholderGlobalRegex,
) => {
  describe(CONFIG_DATA_KEY_REGEX, () => {
    // initial tests
    it(`should be a regex`, () => {
      assert.strictEqual(configDataKeyRegex instanceof RegExp, true);
    });

    // validations tests
    it(`should pass when testing its example`, () => {
      const example = "config data-key";
      assert.strictEqual(configDataKeyRegex.test(example), true);
    });
  });

  describe(CONFIG_DATA_SUBKEY_REGEX, () => {
    // initial tests
    it(`should be a regex`, () => {
      assert.strictEqual(configDataSubkeyRegex instanceof RegExp, true);
    });

    // validations tests
    it(`should pass when testing its example`, () => {
      const example = "CONFIG_DATA_SUBKEY";
      assert.strictEqual(configDataSubkeyRegex.test(example), true);
    });
  });

  describe(FLATTENED_CONFIG_DATA_KEY_LOCAL_REGEX, () => {
    // initial tests
    it(`should be a regex`, () => {
      assert.strictEqual(
        flattenedConfigDataKeyLocalRegex instanceof RegExp,
        true,
      );
    });

    // validations tests
    it(`should pass when testing its example`, () => {
      const example = "FLATTENED#CONFIG#DATA#KEY";
      assert.strictEqual(flattenedConfigDataKeyLocalRegex.test(example), true);
    });
  });

  describe(FLATTENED_CONFIG_DATA_KEY_GLOBAL_REGEX, () => {
    // initial tests
    it(`should be a regex`, () => {
      assert.strictEqual(
        flattenedConfigDataKeyGlobalRegex instanceof RegExp,
        true,
      );
    });

    // validations tests
    it(`should pass when testing its example`, () => {
      const example = "FLATTENED#CONFIG#DATA#KEY";
      assert.strictEqual(flattenedConfigDataKeyGlobalRegex.test(example), true);
    });
  });

  describe(FLATTENED_CONFIG_DATA_PLACEHOLDER_LOCAL_REGEX, () => {
    // initial tests
    it(`should be a regex`, () => {
      assert.strictEqual(
        flattenedConfigDataPlaceholderLocalRegex instanceof RegExp,
        true,
      );
    });

    // validations tests
    it(`should pass when testing its example`, () => {
      const example = "$COMMENT#FLATTENED#CONFIG#DATA#PLACEHOLDER#LOCAL#REGEX";
      assert.strictEqual(
        flattenedConfigDataPlaceholderLocalRegex.test(example),
        true,
      );
    });
  });

  describe(FLATTENED_CONFIG_DATA_PLACEHOLDER_GLOBAL_REGEX, () => {
    // initial tests
    it(`should be a regex`, () => {
      assert.strictEqual(
        flattenedConfigDataPlaceholderGlobalRegex instanceof RegExp,
        true,
      );
    });

    // validations tests
    it(`should pass when testing its example`, () => {
      const example = "$COMMENT#FLATTENED#CONFIG#DATA#PLACEHOLDER#GLOBAL#REGEX";
      assert.strictEqual(
        flattenedConfigDataPlaceholderGlobalRegex.test(example),
        true,
      );
    });
  });
};
