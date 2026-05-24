import { MODULE_TO_LOAD } from "../constants/index.mjs";
import path from "path";
import url from "url";
import { fork } from "child_process";
//#region source/library/utilities/fresh-import-a.js
const childScriptAbsolutePath = path.join(path.dirname(url.fileURLToPath(import.meta.url)), "fresh-import-b.js");
async function freshImport(moduleUrl) {
	const childProcess = fork(childScriptAbsolutePath, {
		env: { [MODULE_TO_LOAD]: moduleUrl.toString() },
		serialization: "advanced"
	});
	return new Promise((resolve) => {
		childProcess.on("message", ({ module }) => {
			childProcess.kill();
			resolve(module);
		});
	});
}
//#endregion
export { freshImport };
