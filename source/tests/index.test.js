import url from "url";
import path from "path";

import { describe, it } from "node:test";
import assert from "node:assert";

import { resolveConfig } from "../../source/library/index.js"; // dev
// import { resolveConfig } from "../../tsdown/index.mjs"; // prod // DOESN'T WORK BECAUSE OF freshImport. BUNDLING MIGHT NOT BE A GOOD IDEA HERE.
// This also means I'll need to be selective about the `files` key in `package.json` in order include neither tests nor typedefs.

import { DOT_JS } from "../constants/index.js";
// import { errorNotStandardized } from "../constants/errors/index.js";
import {
  configPathSupposedToBeString,
  configPathSupposedToBeDotJs,
  noConfigFileFound,
  configModuleCouldntResolve,
  configMustBeObject,
  // variationsDataTogether,
  // variationsShouldBeObject,
  // dataShouldBeObject,
} from "../constants/errors/input/messages.js";
import {
  librariesShouldBeRecord,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesMustKey,
  librariesValuesMustBeStrings,
  // lintConfigImportsShouldBeBoolean,
  // myIgnoresOnlyShouldBeBoolean,
  // ignoresShouldBeArray,
  // ignoresValuesMustBeStrings,
  // ignoresValuesMustBeUnique,
  // composedVariablesExclusivesShouldBeArray,
  // composedVariablesExclusivesValuesMustBeStrings,
  // composedVariablesExclusivesValuesMustBeUnique,
  // configEffectivelyEmpty,
} from "../constants/errors/config/messages.js";

import {
  RESOLVE_CONFIG,
  CONFIG_PATH,
  // VARIATIONS,
  // DATA,
  LIBRARIES,
  // LINT_CONFIG_IMPORTS,
  // MY_IGNORES_ONLY,
  // IGNORES,
  // COMPOSED_VARIABLES_EXCLUSIVES,
} from "./constants/index.js";

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

// const badLintConfigImportsKeyPath = path.join(
//   currentDirectoryPath,
//   "./configs/bad-lci-key.js",
// );

// const badMyIgnoresOnlyKeyPath = path.join(
//   currentDirectoryPath,
//   "./configs/bad-mio-key.js",
// );

// const ignoresKeyNotArrayPath = path.join(
//   currentDirectoryPath,
//   "./configs/ignores-key-not-array.js",
// );
// const ignoresKeyNotStringsPath = path.join(
//   currentDirectoryPath,
//   "./configs/ignores-key-not-strings.js",
// );
// const ignoresKeyNotUniquePath = path.join(
//   currentDirectoryPath,
//   "./configs/ignores-key-not-unique.js",
// );

// const composedVariablesExclusivesKeyNotArrayPath = path.join(
//   currentDirectoryPath,
//   "./configs/cve-key-not-array.js",
// );
// const composedVariablesExclusivesKeyNotStringsPath = path.join(
//   currentDirectoryPath,
//   "./configs/cve-key-not-strings.js",
// );
// const composedVariablesExclusivesKeyNotUniquePath = path.join(
//   currentDirectoryPath,
//   "./configs/cve-key-not-unique.js",
// );

// const variationsNoDataPath = path.join(
//   currentDirectoryPath,
//   "./configs/v-true-d-false.js",
// );
// const dataNoVariationsPath = path.join(
//   currentDirectoryPath,
//   "./configs/v-false-d-true.js",
// );
// const variationsKeyNotObjectPath = path.join(
//   currentDirectoryPath,
//   "./configs/variations-key-not-object.js",
// );
// const dataKeyNotObjectPath = path.join(
//   currentDirectoryPath,
//   "./configs/data-key-not-object.js",
// );
// const variationsDataFaultyValuesPath = path.join(
//   currentDirectoryPath,
//   "./configs/v-d-faulty-values.js",
// );

// const configEmptyPath = path.join(
//   currentDirectoryPath,
//   "./configs/config-empty.js",
// );
// const configEffectivelyEmptyPath = path.join(
//   currentDirectoryPath,
//   "./configs/config-effectively-empty.js",
// );

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

  // it(`should fail if the config's \`${VARIATIONS}\` key is provided without ${DATA}`, async () => {
  //   const resolveConfigResults = await resolveConfig(variationsNoDataPath);
  //   assertFailureWithMessage(resolveConfigResults, variationsDataTogether);
  // });
  // it(`should fail if the config's \`${DATA}\` key is provided without ${VARIATIONS}`, async () => {
  //   const resolveConfigResults = await resolveConfig(dataNoVariationsPath);
  //   assertFailureWithMessage(resolveConfigResults, variationsDataTogether);
  // });
  // it(`should fail if the config's \`${VARIATIONS}\` key's value is not an object`, async () => {
  //   const resolveConfigResults = await resolveConfig(
  //     variationsKeyNotObjectPath,
  //   );
  //   assertFailureWithMessage(resolveConfigResults, variationsShouldBeObject);
  // });
  // it(`should fail if the config's \`${DATA}\` key's value is not an object`, async () => {
  //   const resolveConfigResults = await resolveConfig(dataKeyNotObjectPath);
  //   assertFailureWithMessage(resolveConfigResults, dataShouldBeObject);
  // });
  // it(`should fail if the config's \`${VARIATIONS}\` and \`${DATA}\` keys are provided with faulty values, albeit with unstandardized errors`, async () => {
  //   const resolveConfigResults = await resolveConfig(
  //     variationsDataFaultyValuesPath,
  //   );
  //   assertFailureWithMessage(resolveConfigResults, errorNotStandardized);
  // }); // The errors come from the checks on undefined, but users don't need to know about passing falsy values.

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

  // it(`should fail if the config's \`${LINT_CONFIG_IMPORTS}\` key's value, when provided, is not a boolean`, async () => {
  //   const resolveConfigResults = await resolveConfig(
  //     badLintConfigImportsKeyPath,
  //   );
  //   assertFailureWithMessage(
  //     resolveConfigResults,
  //     lintConfigImportsShouldBeBoolean,
  //   );
  // });

  // it(`should fail if the config's \`${MY_IGNORES_ONLY}\` key's value, when provided, is not a boolean`, async () => {
  //   const resolveConfigResults = await resolveConfig(badMyIgnoresOnlyKeyPath);
  //   assertFailureWithMessage(
  //     resolveConfigResults,
  //     myIgnoresOnlyShouldBeBoolean,
  //   );
  // });

  // it(`should fail if the config's \`${IGNORES}\` key's value, when provided, is not an array`, async () => {
  //   const resolveConfigResults = await resolveConfig(ignoresKeyNotArrayPath);
  //   assertFailureWithMessage(resolveConfigResults, ignoresShouldBeArray);
  // });
  // it(`should fail if the config's \`${IGNORES}\` key's array's values are not strings`, async () => {
  //   const resolveConfigResults = await resolveConfig(ignoresKeyNotStringsPath);
  //   assertFailureWithMessage(resolveConfigResults, ignoresValuesMustBeStrings);
  // });
  // it(`should fail if the config's \`${IGNORES}\` key's array's values are not unique`, async () => {
  //   const resolveConfigResults = await resolveConfig(ignoresKeyNotUniquePath);
  //   assertFailureWithMessage(resolveConfigResults, ignoresValuesMustBeUnique);
  // });

  // it(`should fail if the config's \`${COMPOSED_VARIABLES_EXCLUSIVES}\` key's value, when provided, is not an array`, async () => {
  //   const resolveConfigResults = await resolveConfig(
  //     composedVariablesExclusivesKeyNotArrayPath,
  //   );
  //   assertFailureWithMessage(
  //     resolveConfigResults,
  //     composedVariablesExclusivesShouldBeArray,
  //   );
  // });
  // it(`should fail if the config's \`${COMPOSED_VARIABLES_EXCLUSIVES}\` key's array's values are not strings`, async () => {
  //   const resolveConfigResults = await resolveConfig(
  //     composedVariablesExclusivesKeyNotStringsPath,
  //   );
  //   assertFailureWithMessage(
  //     resolveConfigResults,
  //     composedVariablesExclusivesValuesMustBeStrings,
  //   );
  // });
  // it(`should fail if the config's \`${COMPOSED_VARIABLES_EXCLUSIVES}\` key's array's values are not unique`, async () => {
  //   const resolveConfigResults = await resolveConfig(
  //     composedVariablesExclusivesKeyNotUniquePath,
  //   );
  //   assertFailureWithMessage(
  //     resolveConfigResults,
  //     composedVariablesExclusivesValuesMustBeUnique,
  //   );
  // });

  // it(`should error if the config is empty`, async () => {
  //   const resolveConfigResults = await resolveConfig(configEmptyPath);
  //   assertErrorWithMessage(resolveConfigResults, configEffectivelyEmpty);
  // });
  // it(`should error if the config is effectively empty`, async () => {
  //   const resolveConfigResults = await resolveConfig(
  //     configEffectivelyEmptyPath,
  //   );
  //   assertErrorWithMessage(resolveConfigResults, configEffectivelyEmpty);
  // });
});
