import path from "path";

import { successTrue } from "@lutherts/error-handling";

import { Linter } from "eslint";
import { ResolverFactory } from "oxc-resolver";

import { validateInput } from "./validate-input.js";
import { preValidateConfig } from "./pre-validate-config.js";
import { validateConfig } from "./validate-config.js";

const languageOptions = /** @type {const} */ ({
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});
const linterOptions = /** @type {const} */ ({
  noInlineConfig: true,
});
const resolver = new ResolverFactory({
  extensions: [".json"], // focusing exclusively on ".json" files (but to no avail)
  modules: [], // voluntarily ignoring "node_modules" (successfully so far)
});

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

  // NEW
  // At this point the file is confirmed to be non-fatal JavaScript, meaning its SourceCode object can be obtained through little to no stress. Not getting the code for the file then amounts to an impossible error.
  // ...
  // And there I can make sure it doesn't include the current Comment Variables config path as `.json` and as `.public.json`, since these are generated. If VS Code reacts to them, it is most likely to trigger an infinite refresh loop.
  // So that means for self-testing, it is only natural for people to refresh their window in order to avoid infinitely looping. But they still need that automated refresh on libraries they're importing (done via package.json), and on imported libraries they are modifying through their own copied JSON files (which this features will handle here).

  const linter = new Linter();
  linter.verify(code, { languageOptions, linterOptions }); // The file is verified to be `.js` only, so the TSESLint parser is actually unneeded.
  const sourceCode = linter.getSourceCode(); // There is no reason to check `sourceCode` here because if the original code was fatal, it would have errored at `freshImport` earlier.

  const userlandJsonImports__Absolute = /** @type {Set<string>} */ (new Set());
  const userlandJsonImports__Relative = /** @type {Set<string>} */ (new Set());

  for (const node of sourceCode.ast.body) {
    if (node.type === "ImportDeclaration") {
      const {
        source: { value },
      } = node;

      if (typeof value === "string") {
        const { path: absolutePath } = resolver.resolveFileSync(
          configPath,
          value,
        );

        if (absolutePath && absolutePath.endsWith(".json")) {
          const relativePath = path.relative(configPath, absolutePath);

          userlandJsonImports__Absolute.add(absolutePath);
          userlandJsonImports__Relative.add(relativePath);
        }
      }
    }
  }

  return /** @type {const} */ ({
    config,
    libraries: librariesSchemaResultsData,
    libraryVariationKeys_libraryVariationValues, // the flattened, better data
    sameReference,
    code,
    sourceCode,
    userlandJsonImports__Absolute,
    userlandJsonImports__Relative,
    ...successTrue,
  });
};
