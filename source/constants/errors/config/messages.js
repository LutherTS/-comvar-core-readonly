import { errorsConfigMessages } from "../../../comment-variables/index.js";

/* config error messages */

/* messages for static errors - libraries */

export const librariesCouldntZod =
  errorsConfigMessages.librariesCouldntZod.value;

// zod static error messages

export const librariesShouldBeRecord =
  errorsConfigMessages.librariesShouldBeRecord.value;
export const librariesMustNotBeEmpty =
  errorsConfigMessages.librariesMustNotBeEmpty.value;
export const librariesMustSubKey =
  errorsConfigMessages.librariesMustSubKey.value;
export const librariesRecordMustBeRecords =
  errorsConfigMessages.librariesRecordMustBeRecords.value;
export const librariesRecordsMustNotBeEmpty =
  errorsConfigMessages.librariesRecordsMustNotBeEmpty.value;
export const librariesMustKey = errorsConfigMessages.librariesMustKey.value;
export const librariesValuesMustBeStrings =
  errorsConfigMessages.librariesValuesMustBeStrings.value;
export const librariesValuesCannotBeEmptyTrimmed =
  errorsConfigMessages.librariesValuesCannotBeEmptyTrimmed.value;

// static error messages arrays and sets

export const librariesStaticErrorMessages = /** @type {const} */ ([
  librariesShouldBeRecord,
  librariesMustNotBeEmpty,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesRecordsMustNotBeEmpty,
  librariesMustKey,
  librariesValuesMustBeStrings,
  librariesValuesCannotBeEmptyTrimmed,
]);
export const librariesStaticErrorMessagesSet = new Set(
  librariesStaticErrorMessages,
);
