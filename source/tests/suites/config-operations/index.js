import url from "url";
import path from "path";

import { describe, it } from "node:test";
import assert from "node:assert";

import {
  RESOLVE_CONFIG_READONLY,
  LIBRARIES,
  SAMEREFERENCE,
} from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").ResolveConfigReadonly} ResolveConfigReadonly
 */

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const configSuccessEnPath = path.join(
  currentDirectoryPath,
  "./configs/success-en.js",
);
const configSuccessFrPath = path.join(
  currentDirectoryPath,
  "./configs/success-fr.js",
);

const configEmptyPath = path.join(
  currentDirectoryPath,
  "./configs/config-empty.js",
);
const configOtherThanLibrariesPath = path.join(
  currentDirectoryPath,
  "./configs/config-other-than-l.js",
);

const configSuccessSameWith = path.join(
  currentDirectoryPath,
  "./configs/success-same-with.js",
);
const configSuccessSameWithout = path.join(
  currentDirectoryPath,
  "./configs/success-same-without.js",
);

export const configOperationsSuite = (
  /** @type {ResolveConfigReadonly} */ resolveConfigReadonly,
) => {
  describe(`${RESOLVE_CONFIG_READONLY} - config operations`, () => {
    it(`should succeed here (with EN data)`, async () => {
      const resolveConfigReadonlyResults =
        await resolveConfigReadonly(configSuccessEnPath);
      assert.strictEqual(resolveConfigReadonlyResults.success, true);
      assert.strictEqual(!!resolveConfigReadonlyResults.config, true);
      assert.strictEqual(!!resolveConfigReadonlyResults.libraries, true);

      assert.strictEqual(resolveConfigReadonlyResults.sameReference, false);
    });
    it(`should succeed here (with FR data)`, async () => {
      const resolveConfigReadonlyResults =
        await resolveConfigReadonly(configSuccessFrPath);
      assert.strictEqual(resolveConfigReadonlyResults.success, true);
      assert.strictEqual(!!resolveConfigReadonlyResults.config, true);
      assert.strictEqual(!!resolveConfigReadonlyResults.libraries, true);

      assert.strictEqual(resolveConfigReadonlyResults.sameReference, false);
    });

    it(`should succeed here if the config is empty`, async () => {
      const resolveConfigReadonlyResults =
        await resolveConfigReadonly(configEmptyPath);
      assert.strictEqual(resolveConfigReadonlyResults.success, true);
      assert.strictEqual(!!resolveConfigReadonlyResults.config, true);
      assert.strictEqual(resolveConfigReadonlyResults.libraries, null);

      assert.strictEqual(resolveConfigReadonlyResults.sameReference, false);
    });

    it(`should succeed here if the config has other keys than \`${LIBRARIES}\` without \`${LIBRARIES}\``, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(
        configOtherThanLibrariesPath,
      );
      assert.strictEqual(resolveConfigReadonlyResults.success, true);
      assert.strictEqual(!!resolveConfigReadonlyResults.config, true);
      assert.strictEqual(resolveConfigReadonlyResults.libraries, null);

      assert.strictEqual(resolveConfigReadonlyResults.sameReference, false);
    });

    it(`should succeed here with \`${SAMEREFERENCE}\` being true along with \`${LIBRARIES}\`'s presence`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(
        configSuccessSameWith,
      );
      assert.strictEqual(resolveConfigReadonlyResults.success, true);
      assert.strictEqual(!!resolveConfigReadonlyResults.config, true);
      assert.strictEqual(!!resolveConfigReadonlyResults.libraries, true);

      assert.strictEqual(resolveConfigReadonlyResults.sameReference, true);
    });

    it(`should succeed here with \`${SAMEREFERENCE}\` being true along with \`${LIBRARIES}\`'s absence`, async () => {
      const resolveConfigReadonlyResults = await resolveConfigReadonly(
        configSuccessSameWithout,
      );
      assert.strictEqual(resolveConfigReadonlyResults.success, true);
      assert.strictEqual(!!resolveConfigReadonlyResults.config, true);
      assert.strictEqual(!!resolveConfigReadonlyResults.libraries, false);

      assert.strictEqual(resolveConfigReadonlyResults.sameReference, true);
    });
  });
};
