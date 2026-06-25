import { successFalse, successTrue, typeError } from "@lutherts/error-handling";

import {
  errorNotStandardized,
  ERROR_NOT_STANDARDIZED,
} from "../../constants/errors/index.js";
import { configPreStaticErrorMessages_errorStatuses } from "../../constants/errors/input/index.js";
import {
  configCouldntPreZod,
  configPreStaticErrorMessagesSet,
} from "../../constants/errors/input/messages.js";
import { CONFIG_PRE_INVALID } from "../../constants/errors/input/statuses.js";

import { ConfigPreSchema } from "../constants/schemas.js";

/**
 * @typedef {import("../../typedefs/index.js").ConfigModule} ConfigModule
 * @typedef {import("../../typedefs/index.js").ConfigPreStaticErrorMessage} ConfigPreStaticErrorMessage
 */

/* preValidateConfig */

export const preValidateConfig = (/** @type {ConfigModule} */ configModule) => {
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

  return /** @type {const} */ ({
    config,
    ...successTrue,
  });
};
