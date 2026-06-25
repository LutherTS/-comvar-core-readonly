import {
  errorNotStandardized,
  ERROR_NOT_STANDARDIZED,
} from "@lutherts/error-handling";

import { inputStaticErrorMessages_errorStatuses } from "./input/index.js";
import { configStaticErrorMessages_errorStatuses } from "./config/index.js";

/* unstandardized error and status */

export { errorNotStandardized, ERROR_NOT_STANDARDIZED };

/* error messages to error statuses */

export const allStaticErrorMessages_errorStatuses = Object.freeze({
  [errorNotStandardized]: ERROR_NOT_STANDARDIZED,
  ...configStaticErrorMessages_errorStatuses,
  ...inputStaticErrorMessages_errorStatuses,
});

/* dynamic statuses */

export const MISPLACED_LIBRARY_VARIATION = "MISPLACED_LIBRARY_VARIATION";
