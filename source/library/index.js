/* primary export */

export { resolveConfigReadonly } from "./utilities/resolve-config-readonly.js";

/* secondary exports */

export {
  $COMMENT,
  subKeySeparator,
  defaultConfigFileName,
  packageJsonFileName,
} from "./constants/index.js";
export {
  configDataKeyRegex,
  configDataSubKeyRegex,
  flattenedConfigDataKeyLocalRegex,
  flattenedConfigDataKeyGlobalRegex,
  flattenedConfigDataPlaceholderLocalRegex,
  flattenedConfigDataPlaceholderGlobalRegex,
} from "./constants/regexes.js";

export { trimStringWithLimit } from "./utilities/index.js";

export { commentVariablesData } from "../comment-variables/public.js";
