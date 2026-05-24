import { librariesCouldntZod, librariesMustKey, librariesMustSubKey, librariesRecordMustBeRecords, librariesShouldBeRecord, librariesValuesMustBeStrings } from "./messages.mjs";
import { LIBRARIES_INVALID, LIBRARIES_NOT_KEY_CONFORM, LIBRARIES_NOT_RECORD, LIBRARIES_NOT_SUBKEY_CONFORM, LIBRARIES_RECORD_NOT_RECORDS, LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS } from "./statuses.mjs";
//#region source/constants/errors/config/index.js
const librariesStaticErrorMessages_errorStatuses = Object.freeze({
	[librariesShouldBeRecord]: LIBRARIES_NOT_RECORD,
	[librariesMustSubKey]: LIBRARIES_NOT_SUBKEY_CONFORM,
	[librariesRecordMustBeRecords]: LIBRARIES_RECORD_NOT_RECORDS,
	[librariesMustKey]: LIBRARIES_NOT_KEY_CONFORM,
	[librariesValuesMustBeStrings]: LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS
});
const configStaticErrorMessages_errorStatuses = Object.freeze({
	...librariesStaticErrorMessages_errorStatuses,
	[librariesCouldntZod]: LIBRARIES_INVALID
});
//#endregion
export { configStaticErrorMessages_errorStatuses, librariesStaticErrorMessages_errorStatuses };
