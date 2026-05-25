import {
  forComposedVariables,
  composedVariablesExclusives,
} from "../../comment-variables/index.js";

/* primary export names */

/** $COMMENT#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIG */
export const RESOLVE_CONFIG =
  forComposedVariables.variables.resolveConfig.value;

export const CONFIG_PATH =
  composedVariablesExclusives.arguments.configPath.value;

export const LIBRARIES = composedVariablesExclusives.variables.libraries.value;
