import url from "url";
import path from "path";

import { fork } from "child_process";

import { MODULE_TO_LOAD } from "../constants/index.js";

const childScriptAbsolutePath = path.join(
  path.dirname(url.fileURLToPath(import.meta.url)),
  "fresh-import-b.js",
);

export async function freshImport(/** @type {string} */ moduleUrl) {
  const childProcess = fork(childScriptAbsolutePath, {
    env: { [MODULE_TO_LOAD]: moduleUrl.toString() },
    serialization: "advanced",
  });

  const promise = /** @type {Promise<{ default: unknown } | null>} */ (
    new Promise((resolve) => {
      childProcess.on("message", ({ module }) => {
        childProcess.kill();
        resolve(module);
      });
    })
  );

  return promise;
}
