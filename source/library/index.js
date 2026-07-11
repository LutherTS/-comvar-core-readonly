/* primary export */

export { resolveConfigReadonly } from "./utilities/resolve-config-readonly.js";

/* secondary exports */

export {
  $COMMENT,
  subkeySeparator,
  defaultConfigFileName,
  packageJsonFileName,
} from "./constants/index.js";
export {
  configDataKeyRegex,
  configDataSubkeyRegex,
  flattenedConfigDataKeyLocalRegex,
  flattenedConfigDataKeyGlobalRegex,
  flattenedConfigDataPlaceholderLocalRegex,
  flattenedConfigDataPlaceholderGlobalRegex,
} from "./constants/regexes.js";

export { trimStringWithLimit } from "./utilities/index.js";

export { commentVariablesData } from "../comment-variables/public.js";
