import { $COMMENT } from "./index.mjs";
import { escapeRegex } from "@lutherts/error-handling";
//#region source/library/constants/regexes.js
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY
*
* @example
* `config data-key`
*
* @public
*/
const configDataKeyRegex = /^[\p{Ll}\p{Lu}\p{Lo}\p{Pd}\p{Pc}\p{N}\s]+$/u;
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY
*
* @example
* `CONFIG_DATA_SUB_KEY`
*
* @public
*/
const configDataSubKeyRegex = /^[\p{Lu}\p{Lo}\p{N}_]+$/u;
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY
*
* @example
* `FLATTENED#CONFIG#DATA#KEY`
*
* @public
*/
const flattenedConfigDataKeyRegex = /^(?!#)[\p{Lu}\p{Lo}\p{N}_#]+$/u;
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL
*
* @example
* `$COMMENT#FLATTENED#CONFIG#DATA#PLACEHOLDER#LOCAL#REGEX`
*
* @public
*/
const flattenedConfigDataPlaceholderLocalRegex = new RegExp(`${escapeRegex($COMMENT)}#(?!#)([\\p{Lu}\\p{Lo}\\p{N}_#]+)`, "u");
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL
*
* @example
* `$COMMENT#FLATTENED#CONFIG#DATA#PLACEHOLDER#GLOBAL#REGEX`
*
* @public
*/
const flattenedConfigDataPlaceholderGlobalRegex = new RegExp(`${escapeRegex($COMMENT)}#(?!#)([\\p{Lu}\\p{Lo}\\p{N}_#]+)`, "gu");
//#endregion
export { configDataKeyRegex, configDataSubKeyRegex, flattenedConfigDataKeyRegex, flattenedConfigDataPlaceholderGlobalRegex, flattenedConfigDataPlaceholderLocalRegex };
