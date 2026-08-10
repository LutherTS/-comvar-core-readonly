import fs from "fs";
import path from "path";

import {
  successTrue,
  makeSuccessFalseTypeError,
} from "@lutherts/error-handling";

import createImportFresh from "import-fresh";

import { DOT_JS } from "../../constants/index.js";

import { inputStaticErrorMessages_errorStatuses } from "../../constants/errors/input/index.js";
import {
  configPathSupposedToBeString,
  configPathSupposedToBeDotJs,
  configPathSupposedToBeAbsolute,
  noConfigFileFound,
  configPathSupposedToBeFile,
  configModuleCouldntResolve,
} from "../../constants/errors/input/messages.js";

// import { freshImport } from "./fresh-import-a.js";

/**
 * @typedef {import("../../types/index.ts").ConfigModule} ConfigModule
 */

/* validateInput */

const importFresh = createImportFresh(import.meta.url);

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

  // Also checks if the config path is actually absolute.
  const isAbsolute = path.isAbsolute(configPath);
  if (!isAbsolute) {
    return makeSuccessFalseTypeError(
      `ERROR. ${configPathSupposedToBeAbsolute}`,
      inputStaticErrorMessages_errorStatuses[configPathSupposedToBeAbsolute],
    );
  }

  // Checks if the file exists.
  if (!fs.existsSync(configPath)) {
    return makeSuccessFalseTypeError(
      `ERROR. ${noConfigFileFound}`,
      inputStaticErrorMessages_errorStatuses[noConfigFileFound], // This effectively never happens when using @comvar/cli. The CLI tool intercepts the configPath and creates a template path if no config path is found.
    );
  }

  // Actually needs to check if the file, is actually a file, because it is entirely possible to name a folder "folder.js".
  const isFile = fs.statSync(configPath).isFile();
  if (!isFile) {
    return makeSuccessFalseTypeError(
      `ERROR. ${configPathSupposedToBeFile}`,
      inputStaticErrorMessages_errorStatuses[configPathSupposedToBeFile],
    );
  }

  // Acquires the config from the file through a fresh import (cache-free). This updated version does not use serialization, allowing for functions (notably "template functions") to be passed.
  let configModule = /** @type {ConfigModule} */ ({});

  try {
    const importFreshResults = await importFresh(configPath);
    configModule.default = importFreshResults.default;
    configModule.code = fs.readFileSync(configPath, "utf8");
    // oxlint-disable-next-line eslint/no-unused-vars
  } catch (_error) {
    return makeSuccessFalseTypeError(
      `ERROR. ${configModuleCouldntResolve}`,
      inputStaticErrorMessages_errorStatuses[configModuleCouldntResolve],
    );
  }

  // // Acquires the config from the file through a fresh import (cache-free).
  // const configModule = await freshImport(configPath);
  // if (configModule === null) {
  //   return makeSuccessFalseTypeError(
  //     `ERROR. ${configModuleCouldntResolve}`,
  //     inputStaticErrorMessages_errorStatuses[configModuleCouldntResolve],
  //   );
  // }

  return /** @type {const} */ ({
    configModule,
    ...successTrue,
  });
};
