import { escapeRegex } from "@lutherts/error-handling";

import { $COMMENT } from "./index.js";

/** Ensures config keys should only include lowercase letters (`Ll`), uppercase letters (`Lu`), other letters (`Lo`), dash punctuation (`Pd`), connector punctuation (`Pc`), numbers (`N`) and whitespaces (`s`). (Like `config key`.) */
export const configKeyRegex = /^[\p{Ll}\p{Lu}\p{Lo}\p{Pd}\p{Pc}\p{N}\s]+$/u;

/** Same as `configKeyRegex` but without lowercase letters (`\p{Ll}`) replaced by uppercase letters, and without dash punctuation (`Pd`), connector punctuation (`Pc`), and whitespaces (`\s`) replaced by underscores (`_`). (Like `SUB_KEY`.) */
export const subKeyRegex = /^[\p{Lu}\p{Lo}\p{N}_]+$/u;

/** Same as `subKeyRegex` but with the '`#`' character that links each subkey together. (Like `FLATTENED#CONFIG#KEY`.) */
export const flattenedConfigKeyRegex = /^(?!#)[\p{Lu}\p{Lo}\p{N}_#]+$/u;

/** Same as `flattenedConfigKeyRegex` but taking the prefix `$COMMENT` and its `#` into consideration, preventing two consecutive `#`'s, while removing the starting `^` and the ending `$` from the capture group. (Like `$COMMENT#FLATTENED#CONFIG#PLACEHOLDER#LOCAL#REGEX`.) */
export const flattenedConfigPlaceholderLocalRegex = new RegExp(
  `${escapeRegex($COMMENT)}#(?!#)([\\p{Lu}\\p{Lo}\\p{N}_#]+)`,
  "u",
);

/** Same as `flattenedConfigPlaceholderLocalRegex` but globally. (Like `$COMMENT#FLATTENED#CONFIG#PLACEHOLDER#GLOBAL#REGEX`.) */
export const flattenedConfigPlaceholderGlobalRegex = new RegExp(
  `${escapeRegex($COMMENT)}#(?!#)([\\p{Lu}\\p{Lo}\\p{N}_#]+)`,
  "gu",
);
