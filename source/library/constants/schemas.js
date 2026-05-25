import * as z from "zod";

import { configMustBeObject } from "../../constants/errors/input/messages.js";
import {
  librariesShouldBeRecord,
  librariesMustSubKey,
  librariesRecordMustBeRecords,
  librariesMustKey,
  librariesValuesMustBeStrings,
} from "../../constants/errors/config/messages.js";

import {
  configDataSubKeyRegex,
  flattenedConfigDataKeyRegex,
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
            if (!flattenedConfigDataKeyRegex.test(key)) return false;
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
        if (!configDataSubKeyRegex.test(key)) return false;
      }
      return true;
    },
    {
      error: librariesMustSubKey,
    },
  )
  .optional();
