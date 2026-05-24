import { escapeRegex } from "@lutherts/error-handling";

import { $COMMENT } from "./index.js";

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGKEY
 *
 * @example
 * `config key`
 *
 * @public
 */
export const configKeyRegex = /^[\p{Ll}\p{Lu}\p{Lo}\p{Pd}\p{Pc}\p{N}\s]+$/u;

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#SUBKEY
 *
 * @example
 * `SUB_KEY`
 *
 * @public
 */
export const subKeyRegex = /^[\p{Lu}\p{Lo}\p{N}_]+$/u;

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGKEY
 *
 * @example
 * `FLATTENED#CONFIG#KEY`
 *
 * @public
 */
export const flattenedConfigKeyRegex = /^(?!#)[\p{Lu}\p{Lo}\p{N}_#]+$/u;

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERLOCAL
 *
 * @example
 * `$COMMENT#FLATTENED#CONFIG#PLACEHOLDER#LOCAL#REGEX`
 *
 * @public
 */
export const flattenedConfigPlaceholderLocalRegex = new RegExp(
  `${escapeRegex($COMMENT)}#(?!#)([\\p{Lu}\\p{Lo}\\p{N}_#]+)`,
  "u",
);

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERGLOBAL
 *
 * @example
 * `$COMMENT#FLATTENED#CONFIG#PLACEHOLDER#GLOBAL#REGEX`
 *
 * @public
 */
export const flattenedConfigPlaceholderGlobalRegex = new RegExp(
  `${escapeRegex($COMMENT)}#(?!#)([\\p{Lu}\\p{Lo}\\p{N}_#]+)`,
  "gu",
);
