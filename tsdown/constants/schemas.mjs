import { configMustBeObject } from "../source/constants/errors/input/messages.mjs";
import { librariesMustKey, librariesMustSubKey, librariesRecordMustBeRecords, librariesShouldBeRecord, librariesValuesMustBeStrings } from "../source/constants/errors/config/messages.mjs";
import { configDataSubKeyRegex, flattenedConfigDataKeyRegex } from "./regexes.mjs";
import * as z from "zod";
//#region source/library/constants/schemas.js
const ConfigPreSchema = z.record(z.string(), z.unknown(), { error: configMustBeObject });
const ConfigLibrariesSchema = z.record(z.string(), z.record(z.string(), z.string({ error: librariesValuesMustBeStrings }), { error: librariesRecordMustBeRecords }).refine((record) => {
	for (const key of Object.keys(record)) if (!flattenedConfigDataKeyRegex.test(key)) return false;
	return true;
}, { error: librariesMustKey }), { error: librariesShouldBeRecord }).refine((record) => {
	for (const key of Object.keys(record)) if (!configDataSubKeyRegex.test(key)) return false;
	return true;
}, { error: librariesMustSubKey }).optional();
//#endregion
export { ConfigLibrariesSchema, ConfigPreSchema };
