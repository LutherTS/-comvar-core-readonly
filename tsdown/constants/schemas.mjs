import { configMustBeObject } from "../source/constants/errors/input/messages.mjs";
import { librariesMustKey, librariesMustSubKey, librariesRecordMustBeRecords, librariesShouldBeRecord, librariesValuesMustBeStrings } from "../source/constants/errors/config/messages.mjs";
import { flattenedConfigKeyRegex, subKeyRegex } from "./regexes.mjs";
import * as z from "zod";
//#region source/library/constants/schemas.js
const ConfigPreSchema = z.record(z.string(), z.unknown(), { error: configMustBeObject });
/** Voluntarily does not do additional checks on `libraries` data such as on whether all Comment Variables keys not only include at least one `#` but are also prefixed with their respective library keys when doing so. The errors pertaining to conform data are judged as both sufficient in informing and sufficient for performance. */
const ConfigLibrariesSchema = z.record(z.string(), z.record(z.string(), z.string({ error: librariesValuesMustBeStrings }), { error: librariesRecordMustBeRecords }).refine((record) => {
	for (const key of Object.keys(record)) if (!flattenedConfigKeyRegex.test(key)) return false;
	return true;
}, { error: librariesMustKey }), { error: librariesShouldBeRecord }).refine((record) => {
	for (const key of Object.keys(record)) if (!subKeyRegex.test(key)) return false;
	return true;
}, { error: librariesMustSubKey }).optional();
//#endregion
export { ConfigLibrariesSchema, ConfigPreSchema };
