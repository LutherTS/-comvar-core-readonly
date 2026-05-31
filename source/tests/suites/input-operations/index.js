import url from "url";
import path from "path";

import { describe, it } from "node:test";

import {
  configModuleCouldntResolve,
  configMustBeObject,
} from "../../../constants/errors/input/messages.js";

import { RESOLVE_CONFIG_READONLY } from "../../constants/index.js";

import { assertErrorWithMessage, assertFailureWithMessage } from "../../utilities/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").ResolveConfigReadonly} ResolveConfigReadonly
 */

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const configFatalPath = path.join(currentDirectoryPath, "./configs/fatal.js");

const defaultNotObjectPath = path.join(currentDirectoryPath, "./configs/default-not-object.js");
const configNoDefaultPath = path.join(currentDirectoryPath, "./configs/no-default.js");

export const inputOperationsSuite = (
  /** @type {ResolveConfigReadonly} */ resolveConfigReadonly,
) => {
  describe(`${RESOLVE_CONFIG_READONLY} - input operations`, () => {
    it(`should error if the config module is not resolved`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(configFatalPath);
      assertErrorWithMessage(resolveConfigReadonlyResults, configModuleCouldntResolve);
    });

    it(`should fail if the default exported config is not an object`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(defaultNotObjectPath);
      assertFailureWithMessage(resolveConfigReadonlyResults, configMustBeObject);
    });
    it(`should fail the same if the config module doesn't have a default export`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(configNoDefaultPath);
      assertFailureWithMessage(resolveConfigReadonlyResults, configMustBeObject);
    });
  });
};
