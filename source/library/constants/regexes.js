import { escapeRegex } from "@lutherts/error-handling";

import { $COMMENT, subkeySeparator } from "./index.js";

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY
 *
 * @example
 * `config data-key`
 *
 * @public
 */
export const configDataKeyRegex =
  /^(?!\s*$)[\p{Ll}\p{Lu}\p{Lo}\p{Pd}\p{Pc}\p{N}\s]+$/u; // prevents empty strings of all kinds too

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY
 *
 * @example
 * `CONFIG_DATA_SUBKEY`
 *
 * @public
 */
export const configDataSubkeyRegex = /^[\p{Lu}\p{Lo}\p{N}_]+$/u;

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYLOCAL
 *
 * @example
 * `FLATTENED#CONFIG#DATA#KEY`, `FLATTENED`, `CONFIG#DATA#KEY`
 *
 * @public
 */
export const flattenedConfigDataKeyLocalRegex = new RegExp(
  `^([\\p{Lu}\\p{Lo}\\p{N}_]+)${escapeRegex(subkeySeparator)}([\\p{Lu}\\p{Lo}\\p{N}_]+(?:${escapeRegex(subkeySeparator)}[\\p{Lu}\\p{Lo}\\p{N}_]+)*)$`,
  "u",
); // (Be very careful about this in usages such as EN#COMMENT/COMMENT, since the variations version does not include two subkeys. But so far no errors have been encountered as such, since variation versions are not exposed to regex until they are transformed into core versions.)

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYGLOBAL
 *
 * @example
 * `FLATTENED#CONFIG#DATA#KEY`, `FLATTENED`, `CONFIG#DATA#KEY`
 *
 * @public
 */
export const flattenedConfigDataKeyGlobalRegex = new RegExp(
  `([\\p{Lu}\\p{Lo}\\p{N}_]+)${escapeRegex(subkeySeparator)}([\\p{Lu}\\p{Lo}\\p{N}_]+(?:${escapeRegex(subkeySeparator)}[\\p{Lu}\\p{Lo}\\p{N}_]+)*)`,
  "gu",
);

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL
 *
 * @example
 * `$COMMENT#FLATTENED#CONFIG#DATA#PLACEHOLDER#LOCAL#REGEX`, `FLATTENED#CONFIG#DATA#PLACEHOLDER#LOCAL#REGEX`
 *
 * @public
 */
export const flattenedConfigDataPlaceholderLocalRegex = new RegExp(
  `^${escapeRegex($COMMENT)}${escapeRegex(subkeySeparator)}([\\p{Lu}\\p{Lo}\\p{N}_]+(?:${escapeRegex(subkeySeparator)}[\\p{Lu}\\p{Lo}\\p{N}_]+)*)$`,
  "u",
);

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL
 *
 * @example
 * `$COMMENT#FLATTENED#CONFIG#DATA#PLACEHOLDER#LOCAL#REGEX`, `FLATTENED#CONFIG#DATA#PLACEHOLDER#LOCAL#REGEX`
 *
 * @public
 */
export const flattenedConfigDataPlaceholderGlobalRegex = new RegExp(
  `${escapeRegex($COMMENT)}${escapeRegex(subkeySeparator)}([\\p{Lu}\\p{Lo}\\p{N}_]+(?:${escapeRegex(subkeySeparator)}[\\p{Lu}\\p{Lo}\\p{N}_]+)*)`,
  "gu",
);
