import url from "url";
import path from "path";

import { describe, it } from "node:test";
import assert from "node:assert";

import { resolveConfigReadonly } from "../../source/library/index.js"; // dev
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
  // configEmpty,
} from "../constants/errors/config/messages.js";

import {
  RESOLVE_CONFIG_READONLY,
  CONFIG_PATH,
  LIBRARIES,
} from "./constants/index.js";

import {
  assertErrorWithMessage,
  assertFailureWithMessage,
  // assertWarningWithMessage,
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

const configSuccessEnPath = path.join(
  currentDirectoryPath,
  "./configs/success-en.js",
);
const configSuccessFrPath = path.join(
  currentDirectoryPath,
  "./configs/success-fr.js",
);

const configEmptyPath = path.join(
  currentDirectoryPath,
  "./configs/config-empty.js",
);
const configOtherThanLibrariesPath = path.join(
  currentDirectoryPath,
  "./configs/config-other-than-l.js",
);

describe(RESOLVE_CONFIG_READONLY, () => {
  // initial tests

  it("should be a function", () => {
    const resolveConfigReadonlyType = typeof resolveConfigReadonly;
    assert.strictEqual(resolveConfigReadonlyType, "function");
  });

  it(`should be named \`${RESOLVE_CONFIG_READONLY}\``, () => {
    const resolveConfigReadonlyName = resolveConfigReadonly.name;
    assert.strictEqual(resolveConfigReadonlyName, RESOLVE_CONFIG_READONLY);
  });

  // input validations tests

  it(`should error if \`${CONFIG_PATH}\` param is not a string`, async () => {
    const resolveConfigReadonlyResults = await resolveConfigReadonly(2);
    assertErrorWithMessage(
      resolveConfigReadonlyResults,
      configPathSupposedToBeString,
    );
  });

  it(`should error if \`${CONFIG_PATH}\` param does not end with \`${DOT_JS}\``, async () => {
    const resolveConfigReadonlyResults =
      await resolveConfigReadonly("not-javascript.ts");
    assertErrorWithMessage(
      resolveConfigReadonlyResults,
      configPathSupposedToBeDotJs,
    );
  });

  it(`should error if \`${CONFIG_PATH}\` is not found`, async () => {
    const resolveConfigReadonlyResults =
      await resolveConfigReadonly("does-not-exist.js");
    assertErrorWithMessage(resolveConfigReadonlyResults, noConfigFileFound);
  });

  // input operations tests

  it(`should error if the config module is not resolved`, async () => {
    const resolveConfigReadonlyResults =
      await resolveConfigReadonly(configFatalPath);
    assertErrorWithMessage(
      resolveConfigReadonlyResults,
      configModuleCouldntResolve,
    );
  });

  it(`should fail if the default exported config is not an object`, async () => {
    const resolveConfigReadonlyResults =
      await resolveConfigReadonly(defaultNotObjectPath);
    assertFailureWithMessage(resolveConfigReadonlyResults, configMustBeObject);
  });
  it(`should fail the same if the config module doesn't have a default export`, async () => {
    const resolveConfigReadonlyResults =
      await resolveConfigReadonly(configNoDefaultPath);
    assertFailureWithMessage(resolveConfigReadonlyResults, configMustBeObject);
  });

  // config validations tests

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
    assertFailureWithMessage(resolveConfigReadonlyResults, librariesMustSubKey);
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

  it(`should succeed here (with EN data)`, async () => {
    const resolveConfigReadonlyResults =
      await resolveConfigReadonly(configSuccessEnPath);
    assert.strictEqual(resolveConfigReadonlyResults.success, true);
    assert.strictEqual(!!resolveConfigReadonlyResults.config, true);
    assert.strictEqual(!!resolveConfigReadonlyResults.libraries, true);
  });
  it(`should succeed here (with FR data)`, async () => {
    const resolveConfigReadonlyResults =
      await resolveConfigReadonly(configSuccessFrPath);
    assert.strictEqual(resolveConfigReadonlyResults.success, true);
    assert.strictEqual(!!resolveConfigReadonlyResults.config, true);
    assert.strictEqual(!!resolveConfigReadonlyResults.libraries, true);
  });

  it(`should succeed here if the config is empty`, async () => {
    const resolveConfigReadonlyResults =
      await resolveConfigReadonly(configEmptyPath);
    assert.strictEqual(resolveConfigReadonlyResults.success, true);
    assert.strictEqual(!!resolveConfigReadonlyResults.config, true);
    assert.strictEqual(resolveConfigReadonlyResults.libraries, null);
  });

  it(`should succeed here if the config has other keys than \`${LIBRARIES}\` without \`${LIBRARIES}\``, async () => {
    const resolveConfigReadonlyResults = await resolveConfigReadonly(
      configOtherThanLibrariesPath,
    );
    assert.strictEqual(resolveConfigReadonlyResults.success, true);
    assert.strictEqual(!!resolveConfigReadonlyResults.config, true);
    assert.strictEqual(resolveConfigReadonlyResults.libraries, null);
  });
});
