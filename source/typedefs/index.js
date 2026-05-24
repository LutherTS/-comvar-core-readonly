import { resolveConfig } from "../library/index.js";

import { allStaticErrorMessages_errorStatuses } from "../constants/errors/index.js";
import {
  configPreStaticErrorMessages,
  // variationsDataPreStaticErrorMessages,
} from "../constants/errors/input/messages.js";
import {
  configStaticErrorStatuses,
  // variationsDataPreStaticErrorStatuses,
} from "../constants/errors/input/statuses.js";
import {
  librariesStaticErrorMessages,
  // lintConfigImportsStaticErrorMessages,
  // myIgnoresOnlyStaticErrorMessages,
  // ignoresStaticErrorMessages,
  // composedVariablesExclusivesStaticErrorMessages,
} from "../constants/errors/config/messages.js";
import {
  librariesStaticErrorStatuses,
  // lintConfigImportsStaticErrorStatuses,
  // myIgnoresOnlyStaticErrorStatuses,
  // ignoresStaticErrorStatuses,
  // composedVariablesExclusivesStaticErrorStatuses,
} from "../constants/errors/config/statuses.js";

/**
 * @typedef {ReturnType<typeof resolveConfig>} ResolveConfigReturnType
 */
/**
 * @typedef {keyof typeof allStaticErrorMessages_errorStatuses} AllStaticErrorMessages_ErrorStatuses__Key
 */

/**
 * @typedef {typeof configPreStaticErrorMessages[number]} ConfigPreStaticErrorMessage
 */
/**
 * @typedef {typeof configStaticErrorStatuses[number]} ConfigPreStaticErrorStatus
 */

/**
 * @typedef {typeof librariesStaticErrorMessages[number]} LibrariesStaticErrorMessage
 */
/**
 * @typedef {typeof librariesStaticErrorStatuses[number]} LibrariesStaticErrorStatus
 */
