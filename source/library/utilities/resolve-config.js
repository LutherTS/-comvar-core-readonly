import fs from "fs";
import path from "path";

import {
  makeSuccessFalseTypeError,
  successTrue,
  typeError,
  successFalse,
} from "@lutherts/error-handling";

import { DOT_JS } from "../../constants/index.js";

import {
  errorNotStandardized,
  ERROR_NOT_STANDARDIZED,
} from "../../constants/errors/index.js";
import {
  inputStaticErrorMessages_errorStatuses,
  configPreStaticErrorMessages_errorStatuses,
  // variationsDataPreStaticErrorMessages_errorStatuses,
} from "../../constants/errors/input/index.js";
import {
  configPathSupposedToBeString,
  configPathSupposedToBeDotJs,
  noConfigFileFound,
  configModuleCouldntResolve,
  configCouldntPreZod,
  configStaticPreErrorMessagesSet,
  // variationsDataCouldntPreZod,
  // variationsDataPreStaticErrorMessagesSet,
} from "../../constants/errors/input/messages.js";
import {
  CONFIG_PRE_INVALID,
  // VARIATIONS_DATA_PRE_INVALID,
} from "../../constants/errors/input/statuses.js";
import {
  // configStaticErrorMessages_errorStatuses,
  // lintConfigImportsStaticErrorMessages_errorStatuses,
  // myIgnoresOnlyStaticErrorMessages_errorStatuses,
  // ignoresStaticErrorMessages_errorStatuses,
  // composedVariablesExclusivesStaticErrorMessages_errorStatuses,
  librariesStaticErrorMessages_errorStatuses,
} from "../../constants/errors/config/index.js";
import {
  librariesCouldntZod,
  librariesStaticErrorMessagesSet,
  // lintConfigImportsCouldntZod,
  // lintConfigImportsStaticErrorMessagesSet,
  // myIgnoresOnlyCouldntZod,
  // myIgnoresOnlyStaticErrorMessagesSet,
  // ignoresCouldntZod,
  // ignoresStaticErrorMessagesSet,
  // composedVariablesExclusivesCouldntZod,
  // composedVariablesExclusivesStaticErrorMessagesSet,
  // configEffectivelyEmpty,
} from "../../constants/errors/config/messages.js";
import {
  LIBRARIES_INVALID,
  // LINTCONFIGIMPORTS_INVALID,
  // MYIGNORESONLY_INVALID,
  // IGNORES_INVALID,
  // COMPOSEDVARIABLESEXCLUSIVES_INVALID,
} from "../../constants/errors/config/statuses.js";

// import { UNION, BOTH, NEITHER } from "../constants/index.js";
import {
  ConfigPreSchema,
  // VariationsDataPreSchema,
  ConfigLibrariesSchema,
  // ConfigLintConfigImportsSchema,
  // ConfigMyIgnoresOnlySchema,
  // ConfigIgnoresSchema,
  // ConfigComposedVariablesExclusivesSchema,
} from "../constants/schemas.js";

import { freshImport } from "./fresh-import-a.js";

/**
 * @typedef {import("../../typedefs/index.js").ConfigPreStaticErrorMessage} ConfigPreStaticErrorMessage
 * @typedef {import("../../typedefs/index.js").LibrariesStaticErrorMessage} LibrariesStaticErrorMessage
 */

export const resolveConfig = async (/** @type {string} */ configPath) => {
  // input validations

  // Checks if the input argument is a string.
  if (typeof configPath !== "string") {
    return makeSuccessFalseTypeError(
      `ERROR. ${configPathSupposedToBeString}`,
      inputStaticErrorMessages_errorStatuses[configPathSupposedToBeString],
    );
  }

  // Checks if the config path is strictly JavaScript (.js only).
  const configExtension = path.extname(configPath);
  if (configExtension !== DOT_JS) {
    return makeSuccessFalseTypeError(
      `ERROR. ${configPathSupposedToBeDotJs}`,
      inputStaticErrorMessages_errorStatuses[configPathSupposedToBeDotJs],
    );
  }

  // Checks if the file exists.
  if (!fs.existsSync(configPath)) {
    return makeSuccessFalseTypeError(
      `ERROR. ${noConfigFileFound}`,
      inputStaticErrorMessages_errorStatuses[noConfigFileFound], // This effectively never happens when using @comvar/cli. The CLI tool intercepts the configPath and creates a template path if no config path is found.
    );
  }

  // Acquires the config from the file through a fresh import (cache-free).
  const configModule = await freshImport(configPath);
  if (configModule === null) {
    return makeSuccessFalseTypeError(
      `ERROR. ${configModuleCouldntResolve}`,
      inputStaticErrorMessages_errorStatuses[configModuleCouldntResolve],
    );
  }

  // Pre-validates the config (required).
  const configRaw = configModule.default;
  const configPreSchemaResults = ConfigPreSchema.safeParse(configRaw);

  if (!configPreSchemaResults.success) {
    // This is going to be made by hand across schemas due to type casting.
    return /** @type {const} */ ({
      errors: [
        {
          message: `ERROR. ${configCouldntPreZod}`,
          status: CONFIG_PRE_INVALID,
          ...typeError,
        },
        ...configPreSchemaResults.error.issues.map((e) => {
          if (configStaticPreErrorMessagesSet.has(e.message)) {
            // If the message is known, so is the status.
            const staticErrorMessage =
              /** @type {ConfigPreStaticErrorMessage} */ (e.message);
            return /** @type {const} */ ({
              message: staticErrorMessage,
              status:
                configPreStaticErrorMessages_errorStatuses[staticErrorMessage],
              ...typeError,
            });
          } else {
            // If neither the message nor the status is known, the error is considered unstandardized.
            return /** @type {const} */ ({
              message: errorNotStandardized,
              status: ERROR_NOT_STANDARDIZED,
              ...typeError,
            });
          }
        }),
      ],
      ...successFalse,
    });
  }

  const config = configPreSchemaResults.data;

  // // Pre-validates `config.variations` and `config.data` (mutually optional, mutually required).
  // const variationsDataPreRawValues = {
  //   [UNION]:
  //     config.variations && config.data
  //       ? BOTH
  //       : !config.variations && !config.data
  //         ? NEITHER
  //         : undefined,
  //   variations: config.variations,
  //   data: config.data,
  // };
  // const variationsDataSchemaResults = VariationsDataPreSchema.safeParse(
  //   variationsDataPreRawValues,
  // );

  // if (!variationsDataSchemaResults.success) {
  //   return /** @type {const} */ ({
  //     errors: [
  //       {
  //         message: `ERROR. ${variationsDataCouldntPreZod}`,
  //         status: VARIATIONS_DATA_PRE_INVALID,
  //         ...typeError,
  //       },
  //       ...variationsDataSchemaResults.error.issues.map((e) => {
  //         if (variationsDataPreStaticErrorMessagesSet.has(e.message)) {
  //           const staticErrorMessage =
  //             /** @type {VariationsDataPreStaticErrorMessage} */ (e.message);
  //           return /** @type {const} */ ({
  //             message: staticErrorMessage,
  //             status:
  //               variationsDataPreStaticErrorMessages_errorStatuses[
  //                 staticErrorMessage
  //               ],
  //             ...typeError,
  //           });
  //         } else {
  //           return /** @type {const} */ ({
  //             message: errorNotStandardized,
  //             status: ERROR_NOT_STANDARDIZED,
  //             ...typeError,
  //           });
  //         }
  //       }),
  //     ],
  //     ...successFalse,
  //   });
  // }

  // config validations

  // Validates `config.libraries` (optional).
  const librariesRawValue = config.libraries;
  const librariesSchemaResults =
    ConfigLibrariesSchema.safeParse(librariesRawValue);

  if (!librariesSchemaResults.success) {
    return /** @type {const} */ ({
      errors: [
        {
          message: `ERROR. ${librariesCouldntZod}`,
          status: LIBRARIES_INVALID,
          ...typeError,
        },
        ...librariesSchemaResults.error.issues.map((e) => {
          if (librariesStaticErrorMessagesSet.has(e.message)) {
            const staticErrorMessage =
              /** @type {LibrariesStaticErrorMessage} */ (e.message);
            return /** @type {const} */ ({
              message: staticErrorMessage,
              status:
                librariesStaticErrorMessages_errorStatuses[staticErrorMessage],
              ...typeError,
            });
          } else {
            return /** @type {const} */ ({
              message: errorNotStandardized,
              status: ERROR_NOT_STANDARDIZED,
              ...typeError,
            });
          }
        }),
      ],
      ...successFalse,
    });
  }

  // // Validates `config.lintConfigImports` (optional).
  // const lintConfigImportsRawValue = config.lintConfigImports;
  // const configLintConfigImportsSchemaResults =
  //   ConfigLintConfigImportsSchema.safeParse(lintConfigImportsRawValue);

  // if (!configLintConfigImportsSchemaResults.success) {
  //   return /** @type {const} */ ({
  //     errors: [
  //       {
  //         message: `ERROR. ${lintConfigImportsCouldntZod}`,
  //         status: LINTCONFIGIMPORTS_INVALID,
  //         ...typeError,
  //       },
  //       ...configLintConfigImportsSchemaResults.error.issues.map((e) => {
  //         if (lintConfigImportsStaticErrorMessagesSet.has(e.message)) {
  //           const staticErrorMessage =
  //             /** @type {LintConfigImportsStaticErrorMessage} */ (e.message);
  //           return /** @type {const} */ ({
  //             message: staticErrorMessage,
  //             status:
  //               lintConfigImportsStaticErrorMessages_errorStatuses[
  //                 staticErrorMessage
  //               ],
  //             ...typeError,
  //           });
  //         } else {
  //           return /** @type {const} */ ({
  //             message: errorNotStandardized,
  //             status: ERROR_NOT_STANDARDIZED,
  //             ...typeError,
  //           });
  //         }
  //       }),
  //     ],
  //     ...successFalse,
  //   });
  // }

  // // Validates `config.myIgnoresOnly` (optional).
  // const myIgnoresOnlyRawValue = config.myIgnoresOnly;
  // const configMyIgnoresOnlySchemaResults = ConfigMyIgnoresOnlySchema.safeParse(
  //   myIgnoresOnlyRawValue,
  // );

  // if (!configMyIgnoresOnlySchemaResults.success) {
  //   return /** @type {const} */ ({
  //     errors: [
  //       {
  //         message: `ERROR. ${myIgnoresOnlyCouldntZod}`,
  //         status: MYIGNORESONLY_INVALID,
  //         ...typeError,
  //       },
  //       ...configMyIgnoresOnlySchemaResults.error.issues.map((e) => {
  //         if (myIgnoresOnlyStaticErrorMessagesSet.has(e.message)) {
  //           const staticErrorMessage =
  //             /** @type {MyIgnoresOnlyStaticErrorMessage} */ (e.message);
  //           return /** @type {const} */ ({
  //             message: staticErrorMessage,
  //             status:
  //               myIgnoresOnlyStaticErrorMessages_errorStatuses[
  //                 staticErrorMessage
  //               ],
  //             ...typeError,
  //           });
  //         } else {
  //           return /** @type {const} */ ({
  //             message: errorNotStandardized,
  //             status: ERROR_NOT_STANDARDIZED,
  //             ...typeError,
  //           });
  //         }
  //       }),
  //     ],
  //     ...successFalse,
  //   });
  // }

  // // Validates `config.ignores` (optional).
  // const ignoresRawValue = config.ignores;
  // const configIgnoresSchemaResults =
  //   ConfigIgnoresSchema.safeParse(ignoresRawValue);

  // if (!configIgnoresSchemaResults.success) {
  //   return /** @type {const} */ ({
  //     errors: [
  //       {
  //         message: `ERROR. ${ignoresCouldntZod}`,
  //         status: IGNORES_INVALID,
  //         ...typeError,
  //       },
  //       ...configIgnoresSchemaResults.error.issues.map((e) => {
  //         if (ignoresStaticErrorMessagesSet.has(e.message)) {
  //           const staticErrorMessage =
  //             /** @type {IgnoresStaticErrorMessage} */ (e.message);
  //           return /** @type {const} */ ({
  //             message: staticErrorMessage,
  //             status:
  //               ignoresStaticErrorMessages_errorStatuses[staticErrorMessage],
  //             ...typeError,
  //           });
  //         } else {
  //           return /** @type {const} */ ({
  //             message: errorNotStandardized,
  //             status: ERROR_NOT_STANDARDIZED,
  //             ...typeError,
  //           });
  //         }
  //       }),
  //     ],
  //     ...successFalse,
  //   });
  // }

  // // Validates `config.composedVariablesExclusives` (optional).
  // const composedVariablesExclusivesRawValue =
  //   config.composedVariablesExclusives;
  // const configComposedVariablesExclusivesSchemaResults =
  //   ConfigComposedVariablesExclusivesSchema.safeParse(
  //     composedVariablesExclusivesRawValue,
  //   );

  // if (!configComposedVariablesExclusivesSchemaResults.success) {
  //   return /** @type {const} */ ({
  //     errors: [
  //       {
  //         message: `ERROR. ${composedVariablesExclusivesCouldntZod}`,
  //         status: COMPOSEDVARIABLESEXCLUSIVES_INVALID,
  //         ...typeError,
  //       },
  //       ...configComposedVariablesExclusivesSchemaResults.error.issues.map(
  //         (e) => {
  //           if (
  //             composedVariablesExclusivesStaticErrorMessagesSet.has(e.message)
  //           ) {
  //             const staticErrorMessage =
  //               /** @type {ComposedVariablesExclusivesStaticErrorMessage} */ (
  //                 e.message
  //               );
  //             return /** @type {const} */ ({
  //               message: staticErrorMessage,
  //               status:
  //                 composedVariablesExclusivesStaticErrorMessages_errorStatuses[
  //                   staticErrorMessage
  //                 ],
  //               ...typeError,
  //             });
  //           } else {
  //             return /** @type {const} */ ({
  //               message: errorNotStandardized,
  //               status: ERROR_NOT_STANDARDIZED,
  //               ...typeError,
  //             });
  //           }
  //         },
  //       ),
  //     ],
  //     ...successFalse,
  //   });
  // }

  // // Retrieves the states of variations+data and libraries for branching.
  // const variationsDataSchemaResultsData = variationsDataSchemaResults.data;
  // const librariesSchemaResultsData = librariesSchemaResults.data;

  // if (variationsDataSchemaResultsData.union === NEITHER) {
  //   // variationsDataSchemaResultsData.variations // is undefined
  //   // variationsDataSchemaResultsData.data // is undefined

  //   if (!librariesSchemaResultsData) {
  //     /* USAGE CASE 0: WITHOUT VARIATIONSDATA, WITHOUT LIBRARIES */
  //     // If even libraries aren't provided, errors because of an effectively empty config. (It's an error and not a warning because it's a full stop: neither the CLI nor the extension are going to proceed after this.)

  //     return makeSuccessFalseTypeError(
  //       `ERROR. ${configEffectivelyEmpty}`,
  //       configStaticErrorMessages_errorStatuses[configEffectivelyEmpty],
  //     );
  //   } else {
  //     /* USAGE CASE 1: WITHOUT VARIATIONSDATA, WITH LIBRARIES */
  //     // This is a "libraries only" scenario. In this branch, we don't need to handle variations and data, given that we already know them to be nonexistent. As such, we only resolve for the `config.libraries` key.
  //   }
  // } else {
  //   // variationsDataSchemaResultsData.variations // is a record
  //   // variationsDataSchemaResultsData.data // is a record

  //   // Validates `config.variations` and `config.data` mutually.
  //   const variationsDataRawValues = {
  //     variations: variationsDataSchemaResultsData.variations,
  //     data: variationsDataSchemaResultsData.data,
  //   };

  //   // ... and much more before branching anew.

  //   if (!librariesSchemaResultsData) {
  //     /* USAGE CASE 2: WITH VARIATIONSDATA, WITHOUT LIBRARIES */
  //     // If libraries aren't provided, then this is a "variations+data only" scenario.
  //     // In this case, we only treat variations and data.
  //   } else {
  //     /* USAGE CASE 3: WITH VARIATIONSDATA, WITH LIBRARIES */
  //     // If libraries are also provided, then this is a "libraries & variations+data" scenario.
  //     // In this case, we treat libraries, variations and data.
  //   }
  // }

  return /** @type {const} */ ({
    ...successTrue,
  });
};
