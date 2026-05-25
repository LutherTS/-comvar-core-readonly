import { $COMMENT } from "./constants/index.mjs";
import { configDataKeyRegex, configDataSubKeyRegex, flattenedConfigDataKeyRegex, flattenedConfigDataPlaceholderGlobalRegex, flattenedConfigDataPlaceholderLocalRegex } from "./constants/regexes.mjs";
import { resolveConfigReadonly } from "./utilities/resolve-config-readonly.mjs";
import { resolvedPublicData } from "./comments.config.public.mjs";
export { $COMMENT, resolvedPublicData as commentVariablesData, configDataKeyRegex, configDataSubKeyRegex, flattenedConfigDataKeyRegex, flattenedConfigDataPlaceholderGlobalRegex, flattenedConfigDataPlaceholderLocalRegex, resolveConfigReadonly };
