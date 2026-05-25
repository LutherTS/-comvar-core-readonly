import url from "url";
import path from "path";

import { describe, it } from "node:test";
import assert from "node:assert";

import { resolveConfig } from "../../source/library/index.js"; // dev
// import { resolveConfig } from "../../tsdown/index.mjs"; // prod // DOESN'T WORK BECAUSE OF freshImport. BUNDLING MIGHT NOT BE A GOOD IDEA HERE.
// This also means being selective about the `files` key in `package.json` in order to include neither tests nor typedefs.

import { DOT_JS } from "../constants/index.js";
import {
  configPathSupposedToBeString,
  configPathSupposedToBeDotJs,
  noConfigFileFound,
  configModuleCouldntResolve,
  configMustBeObject,
} from "../constants/errors/input/messages.js";
import {
  librariesShouldBeRecord,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesMustKey,
  librariesValuesMustBeStrings,
} from "../constants/errors/config/messages.js";

import { RESOLVE_CONFIG, CONFIG_PATH, LIBRARIES } from "./constants/index.js";

import {
  assertErrorWithMessage,
  assertFailureWithMessage,
} from "./utilities/index.js";

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const configFatalPath = path.join(currentDirectoryPath, "./configs/fatal.js");

const defaultNotObjectPath = path.join(
  currentDirectoryPath,
  "./configs/default-not-object.js",
);
const configNoDefaultPath = path.join(
  currentDirectoryPath,
  "./configs/no-default.js",
);

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

describe(RESOLVE_CONFIG, () => {
  // initial tests

  it("should be a function", () => {
    const resolveConfigType = typeof resolveConfig;
    assert.strictEqual(resolveConfigType, "function");
  });

  it(`should be named \`${RESOLVE_CONFIG}\``, () => {
    const resolveConfigName = resolveConfig.name;
    assert.strictEqual(resolveConfigName, RESOLVE_CONFIG);
  });

  // input validations tests

  it(`should error if \`${CONFIG_PATH}\` param is not a string`, async () => {
    const resolveConfigResults = await resolveConfig(2);
    assertErrorWithMessage(resolveConfigResults, configPathSupposedToBeString);
  });

  it(`should error if \`${CONFIG_PATH}\` param does not end with \`${DOT_JS}\``, async () => {
    const resolveConfigResults = await resolveConfig("not-javascript.ts");
    assertErrorWithMessage(resolveConfigResults, configPathSupposedToBeDotJs);
  });

  it(`should error if \`${CONFIG_PATH}\` is not found`, async () => {
    const resolveConfigResults = await resolveConfig("does-not-exist.js");
    assertErrorWithMessage(resolveConfigResults, noConfigFileFound);
  });

  // input operations tests

  it(`should error if the config module is not resolved`, async () => {
    const resolveConfigResults = await resolveConfig(configFatalPath);
    assertErrorWithMessage(resolveConfigResults, configModuleCouldntResolve);
  });

  it(`should fail if the default exported config is not an object`, async () => {
    const resolveConfigResults = await resolveConfig(defaultNotObjectPath);
    assertFailureWithMessage(resolveConfigResults, configMustBeObject);
  });
  it(`should fail the same if the config module doesn't have a default export`, async () => {
    const resolveConfigResults = await resolveConfig(configNoDefaultPath);
    assertFailureWithMessage(resolveConfigResults, configMustBeObject);
  });

  // config validations tests

  it(`should fail if the config's \`${LIBRARIES}\` key's value, when provided, is not a record`, async () => {
    const resolveConfigResults = await resolveConfig(librariesKeyNotRecordPath);
    assertFailureWithMessage(resolveConfigResults, librariesShouldBeRecord);
  });
  it(`should fail if the config's \`${LIBRARIES}\` key's record has keys not subkey-conform`, async () => {
    const resolveConfigResults = await resolveConfig(librariesKeyNotSubkeyPath);
    assertFailureWithMessage(resolveConfigResults, librariesMustSubKey);
  });
  it(`should fail if the config's \`${LIBRARIES}\` key's record's values are not records`, async () => {
    const resolveConfigResults = await resolveConfig(
      librariesKeyNotRecordsPath,
    );
    assertFailureWithMessage(
      resolveConfigResults,
      librariesRecordMustBeRecords,
    );
  });
  it(`should fail if the config's \`${LIBRARIES}\` key's record's records have keys not key-conform`, async () => {
    const resolveConfigResults = await resolveConfig(librariesKeyNotKeyPath);
    assertFailureWithMessage(resolveConfigResults, librariesMustKey);
  });
  it(`should fail if the config's \`${LIBRARIES}\` key's record's records' values are not strings`, async () => {
    const resolveConfigResults = await resolveConfig(
      librariesKeyNotStringsPath,
    );
    assertFailureWithMessage(
      resolveConfigResults,
      librariesValuesMustBeStrings,
    );
  });
});
