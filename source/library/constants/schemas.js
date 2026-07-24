import * as z from "zod";

import { configMustBeObject } from "../../constants/errors/input/messages.js";
import {
  librariesShouldBeRecord,
  librariesMustNotBeEmpty,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesRecordsMustNotBeEmpty,
  librariesMustKey,
  librariesValuesMustBeStrings,
  librariesValuesCannotBeEmptyTrimmed,
} from "../../constants/errors/config/messages.js";

import {
  configDataSubkeyRegex,
  flattenedConfigDataKeyLocalRegex,
} from "./regexes.js";

/* input schemas */

// ConfigPreSchema

export const ConfigPreSchema = z.record(z.string(), z.unknown(), {
  error: configMustBeObject,
});

/* config schemas */

// ConfigLibrariesSchema

export const ConfigLibrariesSchema = z
  // Voluntarily does not do additional checks on `libraries` data such as on whether all Comment Variables keys not only include at least one `#` but are also prefixed with their respective library keys when doing so. The errors pertaining to conform data are judged as both sufficient in informing and sufficient for performance.
  .record(
    // Record validations on the keys have proven unsuccessful, which is why the decision to validate the keys through `refine` is now maintained.
    z.string(),
    z
      .record(
        z.string(),
        z
          .string({
            error: librariesValuesMustBeStrings,
          })
          .refine(
            (value) => {
              if (value.length && !value.trim()) return false;
              return true;
            },
            { error: librariesValuesCannotBeEmptyTrimmed },
          ),
        {
          error: librariesRecordMustBeRecords,
        },
      )
      .check((context) => {
        const secondLevelRecord = context.value;

        const secondLevelRecordKeys = Object.keys(secondLevelRecord);
        if (secondLevelRecordKeys.length === 0) {
          context.issues.push({
            message: librariesRecordsMustNotBeEmpty,
            input: context.value,
          });
        }

        for (const key of secondLevelRecordKeys) {
          if (!flattenedConfigDataKeyLocalRegex.test(key)) {
            context.issues.push({
              message: librariesMustKey,
              input: context.value,
            });
          }
        }
      }),
    {
      error: librariesShouldBeRecord,
    },
  )
  .check((context) => {
    const topLevelRecord = context.value;

    const topLevelRecordKeys = Object.keys(topLevelRecord);
    if (topLevelRecordKeys.length === 0) {
      context.issues.push({
        message: librariesMustNotBeEmpty,
        input: context.value,
      });
    }

    for (const key of topLevelRecordKeys) {
      if (!configDataSubkeyRegex.test(key)) {
        context.issues.push({
          message: librariesMustSubKey,
          input: context.value,
        });
      }
    }
  })
  .optional();
