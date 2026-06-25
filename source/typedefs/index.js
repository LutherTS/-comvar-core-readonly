import {
  resolveConfigReadonly,
  $COMMENT,
  defaultConfigFileName,
  packageJsonFileName,
  configDataKeyRegex,
  configDataSubKeyRegex,
  flattenedConfigDataKeyRegex,
  flattenedConfigDataPlaceholderLocalRegex,
  flattenedConfigDataPlaceholderGlobalRegex,
} from "../library/index.js";

import { allStaticErrorMessages_errorStatuses } from "../constants/errors/index.js";
import { configPreStaticErrorMessages } from "../constants/errors/input/messages.js";
import { configPreStaticErrorStatuses } from "../constants/errors/input/statuses.js";
import { librariesStaticErrorMessages } from "../constants/errors/config/messages.js";
import { librariesStaticErrorStatuses } from "../constants/errors/config/statuses.js";

/**
 * @typedef {typeof resolveConfigReadonly} ResolveConfigReadonly
 */

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

/**
 * @typedef {typeof $COMMENT} _COMMENTType
 */
/**
 * @typedef {typeof defaultConfigFileName} DefaultConfigFileName
 */
/**
 * @typedef {typeof packageJsonFileName} PackageJsonFileName
 */

/**
 * @typedef {typeof configDataKeyRegex} ConfigDataKeyRegex
 */
/**
 * @typedef {typeof configDataSubKeyRegex} ConfigDataSubKeyRegex
 */
/**
 * @typedef {typeof flattenedConfigDataKeyRegex} FlattenedConfigDataKeyRegex
 */
/**
 * @typedef {typeof flattenedConfigDataPlaceholderLocalRegex} FlattenedConfigDataPlaceholderLocalRegex
 */
/**
 * @typedef {typeof flattenedConfigDataPlaceholderGlobalRegex} FlattenedConfigDataPlaceholderGlobalRegex
 */

/**
 * @typedef {{
 *   default: unknown;
 * }} ConfigModule
 */

/**
 * @typedef {Record<string, unknown>} Config
 */
