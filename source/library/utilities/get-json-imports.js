import path from "path";

import { Linter } from "eslint";
import { ResolverFactory } from "oxc-resolver";

/* getUserlandJsonImports */

const languageOptions = /** @type {const} */ ({
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});
const linterOptions = /** @type {const} */ ({
  noInlineConfig: true,
});

const resolver = new ResolverFactory({
  extensions: [".json"], // focusing exclusively on ".json" files (but to no avail)
  modules: [], // voluntarily ignoring "node_modules" (successfully so far)
});

export const getUserlandJsonImports = (
  /** @type {string} */ code,
  /** @type {string} */ configPath,
) => {
  const linter = new Linter();
  linter.verify(code, { languageOptions, linterOptions }); // The file is verified to be `.js` only, so the TSESLint parser is actually unneeded.
  const sourceCode = linter.getSourceCode(); // There is no reason to check `sourceCode` here because if the original code was fatal, it would have errored at `freshImport` earlier.

  const userlandJsonImports__Absolute = /** @type {Set<string>} */ (new Set());
  const userlandJsonImports__Relative = /** @type {Set<string>} */ (new Set());

  for (const node of sourceCode.ast.body) {
    if (node.type === "ImportDeclaration") {
      const {
        source: { value },
      } = node;

      if (typeof value === "string") {
        const { path: absolutePath } = resolver.resolveFileSync(
          configPath,
          value,
        );

        if (absolutePath && absolutePath.endsWith(".json")) {
          const relativePath = path.relative(
            path.dirname(configPath),
            absolutePath,
          );

          userlandJsonImports__Absolute.add(absolutePath);
          userlandJsonImports__Relative.add(relativePath);
        }
      }
    }
  }

  // Returned without successTrue and error handling because at this disposition the function is understood to have no ability to fail in dedicated usage.
  return {
    sourceCode,
    userlandJsonImports__Absolute,
    userlandJsonImports__Relative,
  };
};
