import { $COMMENT } from "./constants/index.mjs";
import { configKeyRegex, flattenedConfigKeyRegex, flattenedConfigPlaceholderGlobalRegex, flattenedConfigPlaceholderLocalRegex, subKeyRegex } from "./constants/regexes.mjs";
import { resolveConfig } from "./utilities/resolve-config.mjs";
import { resolvedPublicData } from "./comments.config.public.mjs";
export { $COMMENT, resolvedPublicData as commentVariablesData, configKeyRegex, flattenedConfigKeyRegex, flattenedConfigPlaceholderGlobalRegex, flattenedConfigPlaceholderLocalRegex, resolveConfig, subKeyRegex };
