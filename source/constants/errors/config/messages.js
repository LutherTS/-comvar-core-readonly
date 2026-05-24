import { errorsConfigMessages } from "../../../comment-variables/index.js";

// /* config error messages */

// export const configEffectivelyEmpty =
//   errorsConfigMessages.configEffectivelyEmpty.value;

/* messages for static errors - libraries */

export const librariesCouldntZod =
  errorsConfigMessages.librariesCouldntZod.value;

// zod static error messages

export const librariesShouldBeRecord =
  errorsConfigMessages.librariesShouldBeRecord.value;
export const librariesMustSubKey =
  errorsConfigMessages.librariesMustSubKey.value;
export const librariesRecordMustBeRecords =
  errorsConfigMessages.librariesRecordMustBeRecords.value;
export const librariesMustKey = errorsConfigMessages.librariesMustKey.value;
export const librariesValuesMustBeStrings =
  errorsConfigMessages.librariesValuesMustBeStrings.value;

// static error messages arrays and sets

export const librariesStaticErrorMessages = /** @type {const} */ ([
  librariesShouldBeRecord,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesMustKey,
  librariesValuesMustBeStrings,
]);
export const librariesStaticErrorMessagesSet = new Set(
  librariesStaticErrorMessages,
);

// /* messages for static errors - lintConfigImports */

// export const lintConfigImportsCouldntZod =
//   errorsConfigMessages.lintConfigImportsCouldntZod.value;

// // zod static error messages

// export const lintConfigImportsShouldBeBoolean =
//   errorsConfigMessages.lintConfigImportsShouldBeBoolean.value;

// // static error messages arrays and sets

// export const lintConfigImportsStaticErrorMessages = /** @type {const} */ ([
//   lintConfigImportsShouldBeBoolean,
// ]);
// export const lintConfigImportsStaticErrorMessagesSet = new Set(
//   lintConfigImportsStaticErrorMessages,
// );

// /* messages for static errors - myIgnoresOnly */

// export const myIgnoresOnlyCouldntZod =
//   errorsConfigMessages.myIgnoresOnlyCouldntZod.value;

// // zod static error messages

// export const myIgnoresOnlyShouldBeBoolean =
//   errorsConfigMessages.myIgnoresOnlyShouldBeBoolean.value;

// // static error messages arrays and sets

// export const myIgnoresOnlyStaticErrorMessages = /** @type {const} */ ([
//   myIgnoresOnlyShouldBeBoolean,
// ]);
// export const myIgnoresOnlyStaticErrorMessagesSet = new Set(
//   myIgnoresOnlyStaticErrorMessages,
// );

// /* messages for static errors - ignores */

// export const ignoresCouldntZod = errorsConfigMessages.ignoresCouldntZod.value;

// // zod static error messages

// export const ignoresShouldBeArray =
//   errorsConfigMessages.ignoresShouldBeArray.value;
// export const ignoresValuesMustBeStrings =
//   errorsConfigMessages.ignoresValuesMustBeStrings.value;
// export const ignoresValuesMustBeUnique =
//   errorsConfigMessages.ignoresValuesMustBeUnique.value;

// // static error messages arrays and sets

// export const ignoresStaticErrorMessages = /** @type {const} */ ([
//   ignoresShouldBeArray,
//   ignoresValuesMustBeStrings,
//   ignoresValuesMustBeUnique,
// ]);
// export const ignoresStaticErrorMessagesSet = new Set(
//   ignoresStaticErrorMessages,
// );

// /* messages for static errors - composedVariablesExclusives */

// export const composedVariablesExclusivesCouldntZod =
//   errorsConfigMessages.composedVariablesExclusivesCouldntZod.value;

// // zod static error messages

// export const composedVariablesExclusivesShouldBeArray =
//   errorsConfigMessages.composedVariablesExclusivesShouldBeArray.value;
// export const composedVariablesExclusivesValuesMustBeStrings =
//   errorsConfigMessages.composedVariablesExclusivesValuesMustBeStrings.value;
// export const composedVariablesExclusivesValuesMustBeUnique =
//   errorsConfigMessages.composedVariablesExclusivesValuesMustBeUnique.value;

// // static error messages arrays and sets

// export const composedVariablesExclusivesStaticErrorMessages =
//   /** @type {const} */ ([
//     composedVariablesExclusivesShouldBeArray,
//     composedVariablesExclusivesValuesMustBeStrings,
//     composedVariablesExclusivesValuesMustBeUnique,
//   ]);
// export const composedVariablesExclusivesStaticErrorMessagesSet = new Set(
//   composedVariablesExclusivesStaticErrorMessages,
// );
