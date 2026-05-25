import { resolveConfigReadonly } from "../library/index.js";

import { allStaticErrorMessages_errorStatuses } from "../constants/errors/index.js";
import { configPreStaticErrorMessages } from "../constants/errors/input/messages.js";
import { configPreStaticErrorStatuses } from "../constants/errors/input/statuses.js";
import { librariesStaticErrorMessages } from "../constants/errors/config/messages.js";
import { librariesStaticErrorStatuses } from "../constants/errors/config/statuses.js";

/**
 * @typedef {ReturnType<typeof resolveConfigReadonly>} ResolveConfigReadonlyReturnType
 */
/**
 * @typedef {keyof typeof allStaticErrorMessages_errorStatuses} AllStaticErrorMessages_ErrorStatuses__Key
 */

/**
 * @typedef {typeof configPreStaticErrorMessages[number]} ConfigPreStaticErrorMessage
 */
/**
 * @typedef {typeof configPreStaticErrorStatuses[number]} ConfigPreStaticErrorStatus
 */

/**
 * @typedef {typeof librariesStaticErrorMessages[number]} LibrariesStaticErrorMessage
 */
/**
 * @typedef {typeof librariesStaticErrorStatuses[number]} LibrariesStaticErrorStatus
 */
