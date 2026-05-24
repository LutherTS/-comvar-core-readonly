import { inputStaticErrorMessages_errorStatuses } from "./input/index.mjs";
import { configStaticErrorMessages_errorStatuses } from "./config/index.mjs";
import { ERROR_NOT_STANDARDIZED, errorNotStandardized } from "@lutherts/error-handling";
Object.freeze({
	[errorNotStandardized]: ERROR_NOT_STANDARDIZED,
	...configStaticErrorMessages_errorStatuses,
	...inputStaticErrorMessages_errorStatuses
});
//#endregion
export { ERROR_NOT_STANDARDIZED, errorNotStandardized };
