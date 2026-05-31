import url from "url";
import path from "path";

import { describe, it } from "node:test";

import {
  librariesShouldBeRecord,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesMustKey,
  librariesValuesMustBeStrings,
  librariesValuesCannotBeEmptyStrings,
} from "../../../constants/errors/config/messages.js";

import { RESOLVE_CONFIG_READONLY, LIBRARIES } from "../../constants/index.js";

import { assertFailureWithMessage } from "../../utilities/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").ResolveConfigReadonly} ResolveConfigReadonly
 */

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const librariesKeyNotRecordPath = path.join(
  currentDirectoryPath,
  "./configs/libraries-key-not-record.js",
);
const librariesKeyNotSubkeyPath = path.join(
  currentDirectoryPath,
  "./configs/libraries-key-not-subkey.js",
);
const librariesKeyNotRecordsPath = path.join(
  currentDirectoryPath,
  "./configs/libraries-key-not-records.js",
);
const librariesKeyNotKeyPath = path.join(
  currentDirectoryPath,
  "./configs/libraries-key-not-key.js",
);
const librariesKeyNotStringsPath = path.join(
  currentDirectoryPath,
  "./configs/libraries-key-not-strings.js",
);
const librariesKeyEmptyStringsPath = path.join(
  currentDirectoryPath,
  "./configs/libraries-key-empty-strings.js",
);

export const configValidationsSuite = (
  /** @type {ResolveConfigReadonly} */ resolveConfigReadonly,
) => {
  describe(`${RESOLVE_CONFIG_READONLY} - config validations`, () => {
    it(`should fail if the config's \`${LIBRARIES}\` key's value, when provided, is not a record`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(
        librariesKeyNotRecordPath,
      );
      assertFailureWithMessage(
        resolveConfigReadonlyResults,
        librariesShouldBeRecord,
      );
    });
    it(`should fail if the config's \`${LIBRARIES}\` key's record has keys not subkey-conform`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(
        librariesKeyNotSubkeyPath,
      );
      assertFailureWithMessage(
        resolveConfigReadonlyResults,
        librariesMustSubKey,
      );
    });
    it(`should fail if the config's \`${LIBRARIES}\` key's record's values are not records`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(
        librariesKeyNotRecordsPath,
      );
      assertFailureWithMessage(
        resolveConfigReadonlyResults,
        librariesRecordMustBeRecords,
      );
    });
    it(`should fail if the config's \`${LIBRARIES}\` key's record's records have keys not key-conform`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(
        librariesKeyNotKeyPath,
      );
      assertFailureWithMessage(resolveConfigReadonlyResults, librariesMustKey);
    });
    it(`should fail if the config's \`${LIBRARIES}\` key's record's records' values are not strings`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(
        librariesKeyNotStringsPath,
      );
      assertFailureWithMessage(
        resolveConfigReadonlyResults,
        librariesValuesMustBeStrings,
      );
    });
    it(`should fail if the config's \`${LIBRARIES}\` key's record's records' values are empty strings`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(
        librariesKeyEmptyStringsPath,
      );
      assertFailureWithMessage(
        resolveConfigReadonlyResults,
        librariesValuesCannotBeEmptyStrings,
      );
    });
  });
};
