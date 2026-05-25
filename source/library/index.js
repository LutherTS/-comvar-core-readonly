/* primary export */

export { resolveConfigReadonly } from "./utilities/resolve-config-readonly.js";

/* secondary exports */

export { $COMMENT } from "./constants/index.js";
export {
  configDataKeyRegex as configKeyRegex,
  configDataSubKeyRegex as subKeyRegex,
  flattenedConfigDataKeyRegex as flattenedConfigKeyRegex,
  flattenedConfigDataPlaceholderLocalRegex as flattenedConfigPlaceholderLocalRegex,
  flattenedConfigDataPlaceholderGlobalRegex as flattenedConfigPlaceholderGlobalRegex,
} from "./constants/regexes.js";

export { commentVariablesData } from "../comment-variables/public.js";
