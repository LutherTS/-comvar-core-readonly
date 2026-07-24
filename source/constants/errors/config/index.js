import {
  librariesCouldntZod,
  librariesShouldBeRecord,
  librariesMustNotBeEmpty,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesRecordsMustNotBeEmpty,
  librariesMustKey,
  librariesValuesMustBeStrings,
  librariesValuesCannotBeEmptyTrimmed,
} from "./messages.js";
import {
  LIBRARIES_INVALID,
  LIBRARIES_NOT_RECORD,
  LIBRARIES_EMPTY,
  LIBRARIES_NOT_SUBKEY_CONFORM,
  LIBRARIES_RECORD_NOT_RECORDS,
  LIBRARIES_RECORDS_EMPTY,
  LIBRARIES_NOT_KEY_CONFORM,
  LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS,
  LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_TRIMMED,
} from "./statuses.js";

/* error messages to error statuses */

export const librariesStaticErrorMessages_errorStatuses = Object.freeze({
  [librariesShouldBeRecord]: LIBRARIES_NOT_RECORD,
  [librariesMustNotBeEmpty]: LIBRARIES_EMPTY,
  [librariesMustSubKey]: LIBRARIES_NOT_SUBKEY_CONFORM,
  [librariesRecordMustBeRecords]: LIBRARIES_RECORD_NOT_RECORDS,
  [librariesRecordsMustNotBeEmpty]: LIBRARIES_RECORDS_EMPTY,
  [librariesMustKey]: LIBRARIES_NOT_KEY_CONFORM,
  [librariesValuesMustBeStrings]: LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS,
  [librariesValuesCannotBeEmptyTrimmed]:
    LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_TRIMMED,
});

export const configStaticErrorMessages_errorStatuses = Object.freeze({
  ...librariesStaticErrorMessages_errorStatuses,
  [librariesCouldntZod]: LIBRARIES_INVALID,
});
