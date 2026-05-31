import {
  forComposedVariables,
  composedVariablesExclusives,
} from "../../comment-variables/index.js";

/* primary export names */

/** $COMMENT#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY */
export const RESOLVE_CONFIG_READONLY = forComposedVariables.variables.resolveConfigReadonly.value;

export const CONFIG_PATH = composedVariablesExclusives.arguments.configPath.value;

export const LIBRARIES = composedVariablesExclusives.variables.libraries.value;
export const SAMEREFERENCE = composedVariablesExclusives.variables.sameReference.value;

/* secondary export names */

export const _COMMENT = composedVariablesExclusives.variables._COMMENT.value;
export const DEFAULT_CONFIG_FILE_NAME = forComposedVariables.variables.defaultConfigFileName.value;
export const PACKAGE_JSON_FILE_NAME = forComposedVariables.variables.packageJsonFileName.value;

export const CONFIG_DATA_KEY_REGEX = composedVariablesExclusives.variables.configDataKeyRegex.value;
export const CONFIG_DATA_SUBKEY_REGEX =
  composedVariablesExclusives.variables.configDataSubKeyRegex.value;
export const FLATTENED_CONFIG_DATA_KEY_REGEX =
  composedVariablesExclusives.variables.flattenedConfigDataKeyRegex.value;
export const FLATTENED_CONFIG_DATA_PLACEHOLDER_LOCAL_REGEX =
  composedVariablesExclusives.variables.flattenedConfigDataPlaceholderLocalRegex.value;
export const FLATTENED_CONFIG_DATA_PLACEHOLDER_GLOBAL_REGEX =
  composedVariablesExclusives.variables.flattenedConfigDataPlaceholderGlobalRegex.value;
