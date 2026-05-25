/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT
 * @public
 */
export declare const $COMMENT: "$COMMENT";

/** @public */
export declare const commentVariablesData: {
    "libraryKey": "_COMVAR_CORE_READONLY";
    "libraryVariations": {
        "EN": {
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT": "The absolute prefix for every single Comment Variables placeholder.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGKEY": "Ensures config keys should only include lowercase letters (`Ll`), uppercase letters (`Lu`), other letters (`Lo`), dash punctuation (`Pd`), connector punctuation (`Pc`), numbers (`N`) and whitespaces (`s`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#SUBKEY": "Same as `configKeyRegex` but without lowercase letters (`Ll`) replaced by uppercase letters, and without dash punctuation (`Pd`), connector punctuation (`Pc`), and whitespaces (`s`) replaced by underscores (`_`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGKEY": "Same as `subKeyRegex` but with the `#` character that links each subkey together.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERLOCAL": "Same as `flattenedConfigKeyRegex` but taking the prefix `$COMMENT` and its `#` into consideration, preventing two consecutive `#`'s, while removing the starting `^` and the ending `$` from the capture group.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERGLOBAL": "Same as `flattenedConfigPlaceholderLocalRegex` but globally.";
        };
    };
};

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGKEY
 *
 * @example
 * `config key`
 *
 * @public
 */
export declare const configKeyRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGKEY
 *
 * @example
 * `FLATTENED#CONFIG#KEY`
 *
 * @public
 */
export declare const flattenedConfigKeyRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERGLOBAL
 *
 * @example
 * `$COMMENT#FLATTENED#CONFIG#PLACEHOLDER#GLOBAL#REGEX`
 *
 * @public
 */
export declare const flattenedConfigPlaceholderGlobalRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERLOCAL
 *
 * @example
 * `$COMMENT#FLATTENED#CONFIG#PLACEHOLDER#LOCAL#REGEX`
 *
 * @public
 */
export declare const flattenedConfigPlaceholderLocalRegex: RegExp;

/** @public */
export declare function resolveConfig(configPath: string): Promise<{
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. `configPath` is supposed to be a string.";
        readonly status: "CONFIGPATH_NOT_STRING";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. `configPath` is supposed to be strictly JavaScript (`.js` only).";
        readonly status: "CONFIGPATH_NOT_DOT_JS";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. No config file found for Comment Variables.";
        readonly status: "CONFIG_FILE_NOT_FOUND";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. Config module could not get resolved. (Most probably due to fatal syntax.)";
        readonly status: "CONFIG_MODULE_NOT_RESOLVED";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "warning";
        readonly message: "WARNING. The config is empty. Please provide the `variations` key in order to get started.";
        readonly status: "CONFIG_EMPTY";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. The config could not pass pre-validation from zod.";
        readonly status: "CONFIG_PRE_INVALID";
    }, ...({
        readonly type: "error";
        readonly message: "Invalid config format. The config must only be default-exported as an object.";
        readonly status: "CONFIG_NOT_OBJECT";
    } | {
        readonly type: "error";
        readonly message: "The error encountered is not standardized.";
        readonly status: "ERROR_NOT_STANDARDIZED";
    })[]];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. The config's `libraries` key's value could not pass validation from zod.";
        readonly status: "LIBRARIES_INVALID";
    }, ...({
        readonly type: "error";
        readonly message: "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations)." | "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data." | "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values)." | "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data." | "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).";
        readonly status: "LIBRARIES_NOT_RECORD" | "LIBRARIES_NOT_SUBKEY_CONFORM" | "LIBRARIES_RECORD_NOT_RECORDS" | "LIBRARIES_NOT_KEY_CONFORM" | "LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS";
    } | {
        readonly type: "error";
        readonly message: "The error encountered is not standardized.";
        readonly status: "ERROR_NOT_STANDARDIZED";
    })[]];
} | {
    readonly success: true;
}>;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#SUBKEY
 *
 * @example
 * `SUB_KEY`
 *
 * @public
 */
export declare const subKeyRegex: RegExp;

export { }
