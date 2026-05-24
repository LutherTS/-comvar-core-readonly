import { configCouldntPreZod, configModuleCouldntResolve, configMustBeObject, configPathSupposedToBeDotJs, configPathSupposedToBeString, noConfigFileFound } from "./messages.mjs";
import { CONFIGPATH_NOT_DOT_JS, CONFIGPATH_NOT_STRING, CONFIG_FILE_NOT_FOUND, CONFIG_MODULE_NOT_RESOLVED, CONFIG_NOT_OBJECT, CONFIG_PRE_INVALID } from "./statuses.mjs";
//#region source/constants/errors/input/index.js
const configPreStaticErrorMessages_errorStatuses = Object.freeze({ [configMustBeObject]: CONFIG_NOT_OBJECT });
const inputStaticErrorMessages_errorStatuses = Object.freeze({
	...configPreStaticErrorMessages_errorStatuses,
	[configPathSupposedToBeString]: CONFIGPATH_NOT_STRING,
	[configPathSupposedToBeDotJs]: CONFIGPATH_NOT_DOT_JS,
	[noConfigFileFound]: CONFIG_FILE_NOT_FOUND,
	[configModuleCouldntResolve]: CONFIG_MODULE_NOT_RESOLVED,
	[configCouldntPreZod]: CONFIG_PRE_INVALID
});
//#endregion
export { configPreStaticErrorMessages_errorStatuses, inputStaticErrorMessages_errorStatuses };
