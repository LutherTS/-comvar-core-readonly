import {
  configEmpty,
  librariesCouldntZod,
  librariesShouldBeRecord,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesMustKey,
  librariesValuesMustBeStrings,
} from "./messages.js";
import {
  CONFIG_EMPTY,
  LIBRARIES_INVALID,
  LIBRARIES_NOT_RECORD,
  LIBRARIES_NOT_SUBKEY_CONFORM,
  LIBRARIES_RECORD_NOT_RECORDS,
  LIBRARIES_NOT_KEY_CONFORM,
  LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS,
} from "./statuses.js";

/* error messages to error statuses */

export const librariesStaticErrorMessages_errorStatuses = Object.freeze({
  [librariesShouldBeRecord]: LIBRARIES_NOT_RECORD,
  [librariesMustSubKey]: LIBRARIES_NOT_SUBKEY_CONFORM,
  [librariesRecordMustBeRecords]: LIBRARIES_RECORD_NOT_RECORDS,
  [librariesMustKey]: LIBRARIES_NOT_KEY_CONFORM,
  [librariesValuesMustBeStrings]: LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS,
});

export const configStaticErrorMessages_errorStatuses = Object.freeze({
  ...librariesStaticErrorMessages_errorStatuses,
  ...{ [librariesCouldntZod]: LIBRARIES_INVALID },
  ...{ [configEmpty]: CONFIG_EMPTY },
});
