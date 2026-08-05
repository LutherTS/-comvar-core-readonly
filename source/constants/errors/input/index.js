import {
  configPathSupposedToBeString,
  configPathSupposedToBeDotJs,
  noConfigFileFound,
  configPathSupposedToBeFile,
  configModuleCouldntResolve,
  configCouldntPreZod,
  configMustBeObject,
} from "./messages.js";
import {
  CONFIGPATH_NOT_STRING,
  CONFIGPATH_NOT_DOT_JS,
  CONFIG_FILE_NOT_FOUND,
  CONFIGPATH_NOT_FILE,
  CONFIG_MODULE_NOT_RESOLVED,
  CONFIG_PRE_INVALID,
  CONFIG_NOT_OBJECT,
} from "./statuses.js";

/* error messages to error statuses */

export const configPreStaticErrorMessages_errorStatuses = Object.freeze({
  [configMustBeObject]: CONFIG_NOT_OBJECT,
});

export const inputStaticErrorMessages_errorStatuses = Object.freeze({
  ...configPreStaticErrorMessages_errorStatuses,

  [configPathSupposedToBeString]: CONFIGPATH_NOT_STRING,
  [configPathSupposedToBeDotJs]: CONFIGPATH_NOT_DOT_JS,
  [noConfigFileFound]: CONFIG_FILE_NOT_FOUND,
  [configPathSupposedToBeFile]: CONFIGPATH_NOT_FILE,
  [configModuleCouldntResolve]: CONFIG_MODULE_NOT_RESOLVED,

  [configCouldntPreZod]: CONFIG_PRE_INVALID,
});
