import {
  configPathSupposedToBeString,
  configPathSupposedToBeDotJs,
  noConfigFileFound,
  configModuleCouldntResolve,
  configCouldntPreZod,
  configMustBeObject,
  // variationsDataCouldntPreZod,
  // variationsDataTogether,
  // variationsShouldBeObject,
  // dataShouldBeObject,
} from "./messages.js";
import {
  CONFIGPATH_NOT_STRING,
  CONFIGPATH_NOT_DOT_JS,
  CONFIG_FILE_NOT_FOUND,
  CONFIG_MODULE_NOT_RESOLVED,
  CONFIG_PRE_INVALID,
  CONFIG_NOT_OBJECT,
  // VARIATIONS_DATA_PRE_INVALID,
  // VARIATIONS_DATA_DISCRIMINATED,
  // VARIATIONS_NOT_OBJECT,
  // DATA_NOT_OBJECT,
} from "./statuses.js";

/* error messages to error statuses */

export const configPreStaticErrorMessages_errorStatuses = Object.freeze({
  [configMustBeObject]: CONFIG_NOT_OBJECT,
});

// export const variationsDataPreStaticErrorMessages_errorStatuses = Object.freeze(
//   {
//     [variationsDataTogether]: VARIATIONS_DATA_DISCRIMINATED,
//     [variationsShouldBeObject]: VARIATIONS_NOT_OBJECT,
//     [dataShouldBeObject]: DATA_NOT_OBJECT,
//   },
// );

export const inputStaticErrorMessages_errorStatuses = Object.freeze({
  // ...variationsDataPreStaticErrorMessages_errorStatuses,
  // ...{ [variationsDataCouldntPreZod]: VARIATIONS_DATA_PRE_INVALID },
  ...configPreStaticErrorMessages_errorStatuses,
  ...{
    [configPathSupposedToBeString]: CONFIGPATH_NOT_STRING,
    [configPathSupposedToBeDotJs]: CONFIGPATH_NOT_DOT_JS,
    [noConfigFileFound]: CONFIG_FILE_NOT_FOUND,
    [configModuleCouldntResolve]: CONFIG_MODULE_NOT_RESOLVED,

    [configCouldntPreZod]: CONFIG_PRE_INVALID,
  },
});
