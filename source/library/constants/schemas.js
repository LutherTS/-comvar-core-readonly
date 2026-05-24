import * as z from "zod";

// import {
//   reservedWordsSet,
//   forbiddenSequencesSet,
// } from "../../constants/index.js";
import {
  configMustBeObject,
  // variationsDataTogether,
  // variationsShouldBeObject,
  // dataShouldBeObject,
} from "../../constants/errors/input/messages.js";
import {
  librariesShouldBeRecord,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesMustKey,
  librariesValuesMustBeStrings,
  // lintConfigImportsShouldBeBoolean,
  // myIgnoresOnlyShouldBeBoolean,
  // ignoresShouldBeArray,
  // ignoresValuesMustBeStrings,
  // ignoresValuesMustBeUnique,
  // composedVariablesExclusivesShouldBeArray,
  // composedVariablesExclusivesValuesMustBeStrings,
  // composedVariablesExclusivesValuesMustBeUnique,
} from "../../constants/errors/config/messages.js";

// import { BOTH, NEITHER, UNION } from "./index.js";
import {
  subKeyRegex,
  flattenedConfigKeyRegex,
  // configKeyRegex,
} from "./regexes.js";

/* input schemas */

// ConfigPreSchema

export const ConfigPreSchema = z.record(z.string(), z.unknown(), {
  error: configMustBeObject,
});

// // VariationsDataPreSchema

// export const VariationsDataPreSchema = z.discriminatedUnion(
//   UNION,
//   [
//     z.object({
//       [UNION]: z.literal(BOTH),
//       variations: z.record(z.string(), z.unknown(), {
//         error: variationsShouldBeObject,
//       }),
//       data: z.record(z.string(), z.unknown(), {
//         error: dataShouldBeObject,
//       }),
//     }),
//     z.object({
//       [UNION]: z.literal(NEITHER),
//       variations: z.undefined(),
//       data: z.undefined(),
//     }),
//   ],
//   {
//     error: variationsDataTogether,
//   },
// );

/* config schemas */

// ConfigLibrariesSchema

/** Voluntarily does not do additional checks on `libraries` data such as on whether all Comment Variables keys not only include at least one `#` but are also prefixed with their respective library keys when doing so. The errors pertaining to conform data are judged as both sufficient in informing and sufficient for performance. */
export const ConfigLibrariesSchema = z
  .record(
    // Record validations on the keys have proven unsuccessful, which is why the decision to validate the keys through `refine` is now maintained.
    z.string(),
    z
      .record(
        z.string(),
        z.string({
          error: librariesValuesMustBeStrings,
        }),
        {
          error: librariesRecordMustBeRecords,
        },
      )
      .refine(
        (record) => {
          for (const key of Object.keys(record)) {
            if (!flattenedConfigKeyRegex.test(key)) return false;
          }
          return true;
        },
        {
          error: librariesMustKey,
        },
      ),
    {
      error: librariesShouldBeRecord,
    },
  )
  .refine(
    (record) => {
      for (const key of Object.keys(record)) {
        if (!subKeyRegex.test(key)) return false;
      }
      return true;
    },
    {
      error: librariesMustSubKey,
    },
  )
  .optional();

// // ConfigLintConfigImportsSchema

// export const ConfigLintConfigImportsSchema = z
//   .boolean({
//     error: lintConfigImportsShouldBeBoolean,
//   })
//   .optional();

// // ConfigMyIgnoresOnlySchema

// export const ConfigMyIgnoresOnlySchema = z
//   .boolean({
//     error: myIgnoresOnlyShouldBeBoolean,
//   })
//   .optional();

// // ConfigIgnoresSchema

// export const ConfigIgnoresSchema = z
//   .array(
//     z.string({
//       error: ignoresValuesMustBeStrings,
//     }),
//     {
//       error: ignoresShouldBeArray,
//     },
//   )
//   .refine((array) => new Set(array).size === array.length, {
//     message: ignoresValuesMustBeUnique,
//   })
//   .optional();

// // ConfigComposedVariablesExclusivesSchema

// export const ConfigComposedVariablesExclusivesSchema = z
//   .array(
//     z.string({
//       error: composedVariablesExclusivesValuesMustBeStrings,
//     }),
//     {
//       error: composedVariablesExclusivesShouldBeArray,
//     },
//   )
//   .refine((array) => new Set(array).size === array.length, {
//     error: composedVariablesExclusivesValuesMustBeUnique,
//   })
//   .optional();

// // ConfigVariationsDataSchema

// // Next up, the variations schema.
// // (Ne pas oublier que les variants doivent être conforment à configKeyRegex.)
// export const ConfigVariationsSchema = z.object();

// const ConfigDataSchema = z.lazy(() =>
//   z.record(
//     z.string(),
//     z
//       .union([z.string(), ConfigDataSchema], {
//         error:
//           "The config `data` key's values can only be strings or nested objects.",
//       })
//       .refine(
//         (union) => {
//           if (typeof union === "string") {
//             if (union === "") return false;
//             return true;
//           }
//           return true;
//         },
//         { error: "The config `data` key's values cannot be empty strings." },
//       )
//       .refine(
//         (union) => {
//           if (typeof union === "string") {
//             if (forbiddenSequencesSet.has(union)) return false;
//             return true;
//           }
//           return true;
//         },
//         {
//           error:
//             "The config `data` key's values cannot include forbidden sequences like `//`, `/*`, and `*/`.",
//         },
//       )
//       .refine(
//         (union) => {
//           if (typeof union === "object") {
//             // z.union already ensures that it can only be a record
//             for (const key in Object.keys(union)) {
//               if (!configKeyRegex.test(key)) return false;
//             }
//           }
//           return true;
//         },
//         {
//           error:
//             "The config `data` key's nested keys can only include whitespaces (s), lowercase letters (Ll), uppercase letters (Lu), other letters (Lo), numbers (N), dash punctuation (Pd), and connector punctuation (Pc).",
//         },
//       )
//       .refine(
//         (union) => {
//           if (typeof union === "object") {
//             for (const key in Object.keys(union)) {
//               if (reservedWordsSet.has(key)) return false;
//             }
//           }
//           return true;
//         },
//         {
//           error:
//             'The config `data` key\'s nested keys cannot be named "key" or "value" as these are reserved words in Comment Variables.',
//         },
//       ),
//   ),
// ); // does work but is any

// export const ConfigVariantsDataSchema = z.record(z.string(), ConfigDataSchema);

// export const ConfigVariationsDataSchema = z.object({
//   variations: ConfigVariationsSchema,
//   data: ConfigVariantsDataSchema,
// });
