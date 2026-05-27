import {
  forComposedVariables,
  composedVariablesExclusives,
} from "../../comment-variables/index.js";

/* primary export names */

/** $COMMENT#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY */
export const RESOLVE_CONFIG_READONLY =
  forComposedVariables.variables.resolveConfigReadonly.value;

export const CONFIG_PATH =
  composedVariablesExclusives.arguments.configPath.value;

export const LIBRARIES = composedVariablesExclusives.variables.libraries.value;
export const SAMEREFERENCE =
  composedVariablesExclusives.variables.sameReference.value;
