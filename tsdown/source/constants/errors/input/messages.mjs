import { errorsInputMessages } from "../../../comment-variables/index.mjs";
//#region source/constants/errors/input/messages.js
const configPathSupposedToBeString = errorsInputMessages.configPathSupposedToBeString.value;
const configPathSupposedToBeDotJs = errorsInputMessages.configPathSupposedToBeDotJs.value;
const noConfigFileFound = errorsInputMessages.noConfigFileFound.value;
const configModuleCouldntResolve = errorsInputMessages.configModuleCouldntResolve.value;
const configCouldntPreZod = errorsInputMessages.configCouldntPreZod.value;
const configMustBeObject = errorsInputMessages.configMustBeObject.value;
const configStaticPreErrorMessagesSet = new Set([configMustBeObject]);
//#endregion
export { configCouldntPreZod, configModuleCouldntResolve, configMustBeObject, configPathSupposedToBeDotJs, configPathSupposedToBeString, configStaticPreErrorMessagesSet, noConfigFileFound };
