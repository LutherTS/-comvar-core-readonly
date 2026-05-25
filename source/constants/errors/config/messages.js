import { errorsConfigMessages } from "../../../comment-variables/index.js";

/* config error messages */

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
