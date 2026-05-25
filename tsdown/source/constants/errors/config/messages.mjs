import { errorsConfigMessages } from "../../../comment-variables/index.mjs";
//#region source/constants/errors/config/messages.js
const configEmpty = errorsConfigMessages.configEmpty.value;
const librariesCouldntZod = errorsConfigMessages.librariesCouldntZod.value;
const librariesShouldBeRecord = errorsConfigMessages.librariesShouldBeRecord.value;
const librariesMustSubKey = errorsConfigMessages.librariesMustSubKey.value;
const librariesRecordMustBeRecords = errorsConfigMessages.librariesRecordMustBeRecords.value;
const librariesMustKey = errorsConfigMessages.librariesMustKey.value;
const librariesValuesMustBeStrings = errorsConfigMessages.librariesValuesMustBeStrings.value;
const librariesStaticErrorMessagesSet = new Set([
	librariesShouldBeRecord,
	librariesMustSubKey,
	librariesRecordMustBeRecords,
	librariesMustKey,
	librariesValuesMustBeStrings
]);
//#endregion
export { configEmpty, librariesCouldntZod, librariesMustKey, librariesMustSubKey, librariesRecordMustBeRecords, librariesShouldBeRecord, librariesStaticErrorMessagesSet, librariesValuesMustBeStrings };
