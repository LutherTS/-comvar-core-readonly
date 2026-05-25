import { DOT_JS } from "../source/constants/index.mjs";
import { configCouldntPreZod, configModuleCouldntResolve, configPathSupposedToBeDotJs, configPathSupposedToBeString, configPreStaticErrorMessagesSet, noConfigFileFound } from "../source/constants/errors/input/messages.mjs";
import { CONFIG_PRE_INVALID } from "../source/constants/errors/input/statuses.mjs";
import { configPreStaticErrorMessages_errorStatuses, inputStaticErrorMessages_errorStatuses } from "../source/constants/errors/input/index.mjs";
import { librariesCouldntZod, librariesStaticErrorMessagesSet } from "../source/constants/errors/config/messages.mjs";
import { LIBRARIES_INVALID } from "../source/constants/errors/config/statuses.mjs";
import { librariesStaticErrorMessages_errorStatuses } from "../source/constants/errors/config/index.mjs";
import { ERROR_NOT_STANDARDIZED, errorNotStandardized } from "../source/constants/errors/index.mjs";
import { ConfigLibrariesSchema, ConfigPreSchema } from "../constants/schemas.mjs";
import { freshImport } from "./fresh-import-a.mjs";
import fs from "fs";
import path from "path";
import { makeSuccessFalseTypeError, successFalse, successTrue, typeError } from "@lutherts/error-handling";
//#region source/library/utilities/resolve-config-readonly.js
/**
* @typedef {import("../../typedefs/index.js").ConfigPreStaticErrorMessage} ConfigPreStaticErrorMessage
* @typedef {import("../../typedefs/index.js").LibrariesStaticErrorMessage} LibrariesStaticErrorMessage
*/
/**
* $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY
*
* @param configPath - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH
* @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY
*
* @public
*/
const resolveConfigReadonly = async (configPath) => {
	if (typeof configPath !== "string") return makeSuccessFalseTypeError(`ERROR. ${configPathSupposedToBeString}`, inputStaticErrorMessages_errorStatuses[configPathSupposedToBeString]);
	if (path.extname(configPath) !== DOT_JS) return makeSuccessFalseTypeError(`ERROR. ${configPathSupposedToBeDotJs}`, inputStaticErrorMessages_errorStatuses[configPathSupposedToBeDotJs]);
	if (!fs.existsSync(configPath)) return makeSuccessFalseTypeError(`ERROR. ${noConfigFileFound}`, inputStaticErrorMessages_errorStatuses[noConfigFileFound]);
	const configModule = await freshImport(configPath);
	if (configModule === null) return makeSuccessFalseTypeError(`ERROR. ${configModuleCouldntResolve}`, inputStaticErrorMessages_errorStatuses[configModuleCouldntResolve]);
	const configRaw = configModule.default;
	const configPreSchemaResults = ConfigPreSchema.safeParse(configRaw);
	if (!configPreSchemaResults.success) return {
		errors: [{
			message: `ERROR. ${configCouldntPreZod}`,
			status: CONFIG_PRE_INVALID,
			...typeError
		}, ...configPreSchemaResults.error.issues.map((e) => {
			if (configPreStaticErrorMessagesSet.has(e.message)) {
				const staticErrorMessage = e.message;
				return {
					message: staticErrorMessage,
					status: configPreStaticErrorMessages_errorStatuses[staticErrorMessage],
					...typeError
				};
			} else return {
				message: errorNotStandardized,
				status: ERROR_NOT_STANDARDIZED,
				...typeError
			};
		})],
		...successFalse
	};
	const config = configPreSchemaResults.data;
	const librariesRawValue = config.libraries;
	const librariesSchemaResults = ConfigLibrariesSchema.safeParse(librariesRawValue);
	if (!librariesSchemaResults.success) return {
		errors: [{
			message: `ERROR. ${librariesCouldntZod}`,
			status: LIBRARIES_INVALID,
			...typeError
		}, ...librariesSchemaResults.error.issues.map((e) => {
			if (librariesStaticErrorMessagesSet.has(e.message)) {
				const staticErrorMessage = e.message;
				return {
					message: staticErrorMessage,
					status: librariesStaticErrorMessages_errorStatuses[staticErrorMessage],
					...typeError
				};
			} else return {
				message: errorNotStandardized,
				status: ERROR_NOT_STANDARDIZED,
				...typeError
			};
		})],
		...successFalse
	};
	return {
		config,
		libraries: librariesSchemaResults.data ?? null,
		...successTrue
	};
};
//#endregion
export { resolveConfigReadonly };
