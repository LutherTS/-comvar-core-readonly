import fs from "fs";
import path from "path";

import {
  successFalse,
  successTrue,
  typeError,
  makeSuccessFalseTypeError,
} from "@lutherts/error-handling";

import { DOT_JS } from "../../constants/index.js";

import {
  errorNotStandardized,
  ERROR_NOT_STANDARDIZED,
} from "../../constants/errors/index.js";
import {
  inputStaticErrorMessages_errorStatuses,
  configPreStaticErrorMessages_errorStatuses,
} from "../../constants/errors/input/index.js";
import {
  configPathSupposedToBeString,
  configPathSupposedToBeDotJs,
  noConfigFileFound,
  configModuleCouldntResolve,
  configCouldntPreZod,
  configPreStaticErrorMessagesSet,
} from "../../constants/errors/input/messages.js";
import { CONFIG_PRE_INVALID } from "../../constants/errors/input/statuses.js";
import { librariesStaticErrorMessages_errorStatuses } from "../../constants/errors/config/index.js";
import {
  librariesCouldntZod,
  librariesStaticErrorMessagesSet,
} from "../../constants/errors/config/messages.js";
import { LIBRARIES_INVALID } from "../../constants/errors/config/statuses.js";

import {
  ConfigPreSchema,
  ConfigLibrariesSchema,
} from "../constants/schemas.js";

import { freshImport } from "./fresh-import-a.js";

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
export const resolveConfigReadonly = async (
  /** @type {string} */ configPath,
) => {
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
          if (configPreStaticErrorMessagesSet.has(e.message)) {
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

  const librariesSchemaResultsData = librariesSchemaResults.data ?? null;

  return /** @type {const} */ ({
    config,
    libraries: librariesSchemaResultsData,
    ...successTrue,
  });
};
