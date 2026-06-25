export type Config = import("../../typedefs/index.js").Config;
export type LibrariesStaticErrorMessage = import("../../typedefs/index.js").LibrariesStaticErrorMessage;
export declare const validateConfig: (config: Config) => {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: `ERROR. Library variation key ${string} does not start with its assigned library key (${string}#), which suggests its library variation has been misplaced.`;
        readonly status: "MISPLACED_LIBRARY_VARIATION";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. The config's `libraries` key's value could not pass validation from zod.";
        readonly status: "LIBRARIES_INVALID";
    }, ...({
        readonly type: "error";
        readonly message: "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data." | "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data." | "The config `libraries` key's record's records' values cannot be empty strings." | "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with)." | "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values)." | "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).";
        readonly status: "LIBRARIES_NOT_KEY_CONFORM" | "LIBRARIES_NOT_RECORD" | "LIBRARIES_NOT_SUBKEY_CONFORM" | "LIBRARIES_RECORD_NOT_RECORDS" | "LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS" | "LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS";
    } | {
        readonly type: "error";
        readonly message: "The error encountered is not standardized.";
        readonly status: "ERROR_NOT_STANDARDIZED";
    })[]];
} | {
    readonly success: true;
    readonly librariesSchemaResultsData: Record<string, Record<string, string>> | null;
    readonly libraryVariationKeys_libraryVariationValues: Map<string, string>;
};
