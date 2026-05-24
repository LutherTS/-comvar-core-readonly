import {
  // configEffectivelyEmpty,
  librariesCouldntZod,
  librariesShouldBeRecord,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesMustKey,
  librariesValuesMustBeStrings,
  // lintConfigImportsCouldntZod,
  // lintConfigImportsShouldBeBoolean,
  // myIgnoresOnlyCouldntZod,
  // myIgnoresOnlyShouldBeBoolean,
  // ignoresCouldntZod,
  // ignoresShouldBeArray,
  // ignoresValuesMustBeStrings,
  // ignoresValuesMustBeUnique,
  // composedVariablesExclusivesCouldntZod,
  // composedVariablesExclusivesShouldBeArray,
  // composedVariablesExclusivesValuesMustBeStrings,
  // composedVariablesExclusivesValuesMustBeUnique,
} from "./messages.js";
import {
  // CONFIG_EMPTY,
  LIBRARIES_INVALID,
  LIBRARIES_NOT_RECORD,
  LIBRARIES_NOT_SUBKEY_CONFORM,
  LIBRARIES_RECORD_NOT_RECORDS,
  LIBRARIES_NOT_KEY_CONFORM,
  LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS,
  // LINTCONFIGIMPORTS_INVALID,
  // LINTCONFIGIMPORTS_NOT_BOOLEAN,
  // MYIGNORESONLY_INVALID,
  // MYIGNORESONLY_NOT_BOOLEAN,
  // IGNORES_INVALID,
  // IGNORES_NOT_ARRAY,
  // IGNORES_VALUES_NOT_STRINGS,
  // IGNORES_VALUES_NOT_UNIQUE,
  // COMPOSEDVARIABLESEXCLUSIVES_INVALID,
  // COMPOSEDVARIABLESEXCLUSIVES_NOT_ARRAY,
  // COMPOSEDVARIABLESEXCLUSIVES_VALUES_NOT_STRINGS,
  // COMPOSEDVARIABLESEXCLUSIVES_VALUES_NOT_UNIQUE,
} from "./statuses.js";

/* error messages to error statuses */

export const librariesStaticErrorMessages_errorStatuses = Object.freeze({
  [librariesShouldBeRecord]: LIBRARIES_NOT_RECORD,
  [librariesMustSubKey]: LIBRARIES_NOT_SUBKEY_CONFORM,
  [librariesRecordMustBeRecords]: LIBRARIES_RECORD_NOT_RECORDS,
  [librariesMustKey]: LIBRARIES_NOT_KEY_CONFORM,
  [librariesValuesMustBeStrings]: LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS,
});

// export const lintConfigImportsStaticErrorMessages_errorStatuses = Object.freeze(
//   {
//     [lintConfigImportsShouldBeBoolean]: LINTCONFIGIMPORTS_NOT_BOOLEAN,
//   },
// );

// export const myIgnoresOnlyStaticErrorMessages_errorStatuses = Object.freeze({
//   [myIgnoresOnlyShouldBeBoolean]: MYIGNORESONLY_NOT_BOOLEAN,
// });

// export const ignoresStaticErrorMessages_errorStatuses = Object.freeze({
//   [ignoresShouldBeArray]: IGNORES_NOT_ARRAY,
//   [ignoresValuesMustBeStrings]: IGNORES_VALUES_NOT_STRINGS,
//   [ignoresValuesMustBeUnique]: IGNORES_VALUES_NOT_UNIQUE,
// });

// export const composedVariablesExclusivesStaticErrorMessages_errorStatuses =
//   Object.freeze({
//     [composedVariablesExclusivesShouldBeArray]:
//       COMPOSEDVARIABLESEXCLUSIVES_NOT_ARRAY,
//     [composedVariablesExclusivesValuesMustBeStrings]:
//       COMPOSEDVARIABLESEXCLUSIVES_VALUES_NOT_STRINGS,
//     [composedVariablesExclusivesValuesMustBeUnique]:
//       COMPOSEDVARIABLESEXCLUSIVES_VALUES_NOT_UNIQUE,
//   });

export const configStaticErrorMessages_errorStatuses = Object.freeze({
  // ...composedVariablesExclusivesStaticErrorMessages_errorStatuses,
  // ...{
  //   [composedVariablesExclusivesCouldntZod]:
  //     COMPOSEDVARIABLESEXCLUSIVES_INVALID,
  // },
  // ...ignoresStaticErrorMessages_errorStatuses,
  // ...{ [ignoresCouldntZod]: IGNORES_INVALID },
  // ...myIgnoresOnlyStaticErrorMessages_errorStatuses,
  // ...{ [myIgnoresOnlyCouldntZod]: MYIGNORESONLY_INVALID },
  // ...lintConfigImportsStaticErrorMessages_errorStatuses,
  // ...{ [lintConfigImportsCouldntZod]: LINTCONFIGIMPORTS_INVALID },
  ...librariesStaticErrorMessages_errorStatuses,
  ...{ [librariesCouldntZod]: LIBRARIES_INVALID },
  // ...{ [configEffectivelyEmpty]: CONFIG_EMPTY },
});
