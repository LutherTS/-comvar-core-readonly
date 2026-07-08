import { successTrue } from "@lutherts/error-handling";

import { validateInput } from "./validate-input.js";
import { preValidateConfig } from "./pre-validate-config.js";
import { validateConfig } from "./validate-config.js";
import { getUserlandJsonImports } from "./get-json-imports.js";

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY
 *
 * @param configPath - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY
 *
 * @public
 */
export const resolveConfigReadonly = async (
  /** @type {string} */ configPath,
) => {
  // input validations

  const validateInputResults = await validateInput(configPath);
  if (!validateInputResults.success) return validateInputResults;

  const { configModule } = validateInputResults;

  const preValidateConfigResults = preValidateConfig(configModule);
  if (!preValidateConfigResults.success) return preValidateConfigResults;

  const { config, code } = preValidateConfigResults;

  // config validations

  const validateConfigResults = validateConfig(config);
  if (!validateConfigResults.success) return validateConfigResults;

  const {
    librariesSchemaResultsData,
    libraryVariationKeys_libraryVariationValues,
  } = validateConfigResults;

  // Gets the JSON import paths that will be watched to refresh the config on changes and deletions.

  const {
    sourceCode,
    userlandJsonImports__Absolute,
    userlandJsonImports__Relative,
  } = getUserlandJsonImports(code, configPath);

  // Assesses whether or not the config `variations.referenceData` and its `data[`variations.referenceVariant`]` have the same reference, guaranteeing their ultimate similarity (since they would both be pointing to the same object).

  let sameReference = false;

  const supposedReferenceData = config.variations?.referenceData;

  const supposedReferenceVariant = config.variations?.referenceVariant;
  const supposedReferenceVariantData = config.data?.[supposedReferenceVariant];

  if (
    supposedReferenceData &&
    supposedReferenceVariantData &&
    supposedReferenceData === supposedReferenceVariantData
  )
    sameReference = true;

  // Returns it all, including additional data in case they'd be need in order to not have them re-parsed.

  return /** @type {const} */ ({
    config,
    libraries: librariesSchemaResultsData,
    libraryVariationKeys_libraryVariationValues, // the flattened, better data
    code,
    sourceCode,
    userlandJsonImports__Absolute,
    userlandJsonImports__Relative,
    sameReference,
    ...successTrue,
  });
};
