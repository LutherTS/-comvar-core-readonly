import { errorsInputMessages } from "../../../comment-variables/index.js";

/* input error messages */

export const configPathSupposedToBeString = errorsInputMessages.configPathSupposedToBeString.value;
export const configPathSupposedToBeDotJs = errorsInputMessages.configPathSupposedToBeDotJs.value;
export const noConfigFileFound = errorsInputMessages.noConfigFileFound.value;
export const configModuleCouldntResolve = errorsInputMessages.configModuleCouldntResolve.value;

/* messages for static errors - config (pre) */

export const configCouldntPreZod = errorsInputMessages.configCouldntPreZod.value;

// zod static error messages

export const configMustBeObject = errorsInputMessages.configMustBeObject.value;

// static error messages arrays and sets

export const configPreStaticErrorMessages = /** @type {const} */ ([configMustBeObject]);
export const configPreStaticErrorMessagesSet = new Set(configPreStaticErrorMessages);
