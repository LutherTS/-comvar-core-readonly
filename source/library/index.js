/* primary export */

export { resolveConfigReadonly } from "./utilities/resolve-config-readonly.js";

/* secondary exports */

export {
  $COMMENT,
  defaultConfigFileName,
  packageJsonFileName,
} from "./constants/index.js";
export {
  configDataKeyRegex,
  configDataSubKeyRegex,
  flattenedConfigDataKeyRegex,
  flattenedConfigDataPlaceholderLocalRegex,
  flattenedConfigDataPlaceholderGlobalRegex,
} from "./constants/regexes.js";

export { commentVariablesData } from "../comment-variables/public.js";
