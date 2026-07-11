import fs from "fs";

import { MODULE_TO_LOAD } from "../constants/index.js";

try {
  const module = await import(process.env[MODULE_TO_LOAD]);
  const code = fs.readFileSync(process.env[MODULE_TO_LOAD], "utf8");
  process.send({ module: { default: module.default, code } });
} catch (_error) {
  process.send({ module: null });
}
