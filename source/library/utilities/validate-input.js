import fs from "fs";
import path from "path";

import {
  successTrue,
  makeSuccessFalseTypeError,
} from "@lutherts/error-handling";

import { DOT_JS } from "../../constants/index.js";

import { inputStaticErrorMessages_errorStatuses } from "../../constants/errors/input/index.js";
import {
  configPathSupposedToBeString,
  configPathSupposedToBeDotJs,
  noConfigFileFound,
  configModuleCouldntResolve,
} from "../../constants/errors/input/messages.js";

import { freshImport } from "./fresh-import-a.js";

/* validateInput */

export const validateInput = async (/** @type {string} */ configPath) => {
  // Checks if the input argument is a string.
  if (typeof configPath !== "string") {
    return makeSuccessFalseTypeError(
      `ERROR. ${configPathSupposedToBeString}`,
      inputStaticErrorMessages_errorStatuses[configPathSupposedToBeString],
    );
  }

  // Checks if the config path is strictly JavaScript (.js only).
  const configExtension = path.extname(configPath);
  if (configExtension !== DOT_JS) {
    return makeSuccessFalseTypeError(
      `ERROR. ${configPathSupposedToBeDotJs}`,
      inputStaticErrorMessages_errorStatuses[configPathSupposedToBeDotJs],
    );
  }

  // Checks if the file exists.
  if (!fs.existsSync(configPath)) {
    return makeSuccessFalseTypeError(
      `ERROR. ${noConfigFileFound}`,
      inputStaticErrorMessages_errorStatuses[noConfigFileFound], // This effectively never happens when using @comvar/cli. The CLI tool intercepts the configPath and creates a template path if no config path is found.
    );
  }

  // Acquires the config from the file through a fresh import (cache-free).
  const configModule = await freshImport(configPath);
  if (configModule === null) {
    return makeSuccessFalseTypeError(
      `ERROR. ${configModuleCouldntResolve}`,
      inputStaticErrorMessages_errorStatuses[configModuleCouldntResolve],
    );
  }

  return /** @type {const} */ ({
    configModule,
    ...successTrue,
  });
};
