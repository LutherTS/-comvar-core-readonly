import url from "url";
import path from "path";

import { resolveConfigReadonly } from "../library/utilities/resolve-config-readonly.js";

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const configPath = path.join(
  currentDirectoryPath,
  "../../not-comments.config.js",
);
console.debug("configPath is:", configPath);

const resolveConfigReadonlyResults = await resolveConfigReadonly(configPath);
if (!resolveConfigReadonlyResults.success) {
  console.debug("resolveConfigResults are:", resolveConfigReadonlyResults);
  process.exit(1);
}
