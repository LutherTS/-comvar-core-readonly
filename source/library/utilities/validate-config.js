import {
  successFalse,
  successTrue,
  typeError,
  makeSuccessFalseTypeError,
} from "@lutherts/error-handling";

import {
  errorNotStandardized,
  ERROR_NOT_STANDARDIZED,
  MISPLACED_LIBRARY_VARIATION,
} from "../../constants/errors/index.js";
import { librariesStaticErrorMessages_errorStatuses } from "../../constants/errors/config/index.js";
import {
  librariesCouldntZod,
  librariesStaticErrorMessagesSet,
} from "../../constants/errors/config/messages.js";
import { LIBRARIES_INVALID } from "../../constants/errors/config/statuses.js";

import { ConfigLibrariesSchema } from "../constants/schemas.js";

/**
 * @typedef {import("../../typedefs/index.js").Config} Config
 * @typedef {import("../../typedefs/index.js").LibrariesStaticErrorMessage} LibrariesStaticErrorMessage
 */

const subKeySeparator = "#"; // from core // May be moved from core to core-readonly in the future. For now, especially in regex, "#" remains "arbitrarily" used.
const normalizedKeyLengthLimit = 200; // from core
const rawLengthLimit = 50; // from core

const trimStringWithLimit = (
  /** @type {string} */ string,
  /** @type {number} */ limit,
) =>
  string.length > limit
    ? string.slice(0, limit - ellipsis.length) + ellipsis
    : string; // from core

const makeMisplacedLibraryVariationError = (
  /** @type {string} */ libraryVariationKey,
  /** @type {string} */ libraryKey,
) => {
  const trimmedLibraryVariationKey = trimStringWithLimit(
    libraryVariationKey,
    normalizedKeyLengthLimit,
  );
  const trimmedLibraryKey = trimStringWithLimit(libraryKey, rawLengthLimit);

  const message = /** @type {const} */ (
    `ERROR. Library variation key ${trimmedLibraryVariationKey} does not start with its assigned library key (${trimmedLibraryKey}${subKeySeparator}), which suggests its library variation has been misplaced.`
  );
  const status = MISPLACED_LIBRARY_VARIATION;

  return makeSuccessFalseTypeError(message, status);
};

export const validateConfig = (/** @type {Config} */ config) => {
  // Validates `config.libraries` (optional).
  const librariesRawValue = config.libraries;
  const librariesSchemaResults =
    ConfigLibrariesSchema.safeParse(librariesRawValue);

  if (!librariesSchemaResults.success) {
    return /** @type {const} */ ({
      errors: [
        {
          message: `ERROR. ${librariesCouldntZod}`,
          status: LIBRARIES_INVALID,
          ...typeError,
        },
        ...librariesSchemaResults.error.issues.map((e) => {
          if (librariesStaticErrorMessagesSet.has(e.message)) {
            const staticErrorMessage =
              /** @type {LibrariesStaticErrorMessage} */ (e.message);
            return /** @type {const} */ ({
              message: staticErrorMessage,
              status:
                librariesStaticErrorMessages_errorStatuses[staticErrorMessage],
              ...typeError,
            });
          } else {
            return /** @type {const} */ ({
              message: errorNotStandardized,
              status: ERROR_NOT_STANDARDIZED,
              ...typeError,
            });
          }
        }),
      ],
      ...successFalse,
    });
  }

  const librariesSchemaResultsData = librariesSchemaResults.data ?? null;

  // Now ensures all library variation keys, flattened, are actually unique.
  const libraryVariationKeys_libraryVariationValues =
    /** @type {Map<string, string>} */ (new Map());

  if (librariesSchemaResultsData) {
    for (const [libraryKey, libraryVariation] of Object.entries(
      librariesSchemaResultsData,
    )) {
      for (const [libraryVariationKey, libraryVariationValue] of Object.entries(
        libraryVariation,
      )) {
        if (!libraryVariationKey.startsWith(`${libraryKey}${subKeySeparator}`)) {
          const error = makeMisplacedLibraryVariationError(
            libraryVariationKey,
            libraryKey,
          );

          return error;
        }

        libraryVariationKeys_libraryVariationValues.set(
          libraryVariationKey,
          libraryVariationValue,
        );
      }
    }
  }

  return /** @type {const} */ ({
    librariesSchemaResultsData,
    libraryVariationKeys_libraryVariationValues,
    ...successTrue,
  });
};
