/* primary export */

export { resolveConfigReadonly } from "./utilities/resolve-config-readonly.js";

/* secondary exports */

export { $COMMENT } from "./constants/index.js";
export {
  configKeyRegex,
  subKeyRegex,
  flattenedConfigKeyRegex,
  flattenedConfigPlaceholderLocalRegex,
  flattenedConfigPlaceholderGlobalRegex,
} from "./constants/regexes.js";

export { commentVariablesData } from "../comment-variables/public.js";
