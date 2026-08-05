import url from "url";
import path from "path";

import { describe, it } from "node:test";

import { DOT_JS } from "../../../constants/index.js";
import {
  configPathSupposedToBeString,
  configPathSupposedToBeDotJs,
  noConfigFileFound,
  configPathSupposedToBeFile,
} from "../../../constants/errors/input/messages.js";

import { RESOLVE_CONFIG_READONLY, CONFIG_PATH } from "../../constants/index.js";

import { assertErrorWithMessage } from "../../utilities/index.js";

/**
 * @typedef {import("../../../types/index.ts").ResolveConfigReadonly} ResolveConfigReadonly
 */

/* inputValidationsSuite */

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const folderJsPath = path.join(currentDirectoryPath, "./configs/folder.js");

export const inputValidationsSuite = (
  /** @type {ResolveConfigReadonly} */ resolveConfigReadonly,
) => {
  describe(`${RESOLVE_CONFIG_READONLY} - input validations`, () => {
    it(`should error if \`${CONFIG_PATH}\` param is not a string`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(2);
      assertErrorWithMessage(
        resolveConfigReadonlyResults,
        configPathSupposedToBeString,
      );
    });

    it(`should error if \`${CONFIG_PATH}\` param does not end with \`${DOT_JS}\``, async () => {
      const resolveConfigReadonlyResults =
        await resolveConfigReadonly("not-javascript.ts");
      assertErrorWithMessage(
        resolveConfigReadonlyResults,
        configPathSupposedToBeDotJs,
      );
    });

    it(`should error if \`${CONFIG_PATH}\` is not found`, async () => {
      const resolveConfigReadonlyResults =
        await resolveConfigReadonly("does-not-exist.js");
      assertErrorWithMessage(resolveConfigReadonlyResults, noConfigFileFound);
    });

    it(`should error if \`${CONFIG_PATH}\` is not a file`, async () => {
      const resolveConfigReadonlyResults =
        await resolveConfigReadonly(folderJsPath);
      assertErrorWithMessage(
        resolveConfigReadonlyResults,
        configPathSupposedToBeFile,
      );
    });
  });
};
