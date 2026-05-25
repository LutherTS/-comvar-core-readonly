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
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY": "Ensures config `data` keys should only include lowercase letters (`Ll`), uppercase letters (`Lu`), other letters (`Lo`), dash punctuation (`Pd`), connector punctuation (`Pc`), numbers (`N`), and whitespaces (`s`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY": "Same as `configDataKeyRegex` but without lowercase letters (`Ll`) replaced by uppercase letters, and without dash punctuation (`Pd`), connector punctuation (`Pc`), and whitespaces (`s`) replaced by underscores (`_`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY": "Same as `configDataSubKeyRegex` but with the `#` character that links each subkey together.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL": "Same as `flattenedConfigDataKeyRegex` but taking the prefix `$COMMENT#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#_COMMENT` and its `#` into consideration, preventing two consecutive `#`'s, while removing the starting `^` and the ending `$` from the capture group.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL": "Same as `flattenedConfigDataPlaceholderLocalRegex` but globally.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY": "Initially verifies, validates and resolves the config path to retrieve the config and provide its `libraries` key data.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH": "The absolute path of the config regardless of the manner through which it is provided: be it from a default `comments.config.js` at the current working directory, from a relative path passed via the `--config` flag in the CLI, or from a relative path at the extension's `config` key in `.vscode/settings.json` for VS Code.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY": "The config and its `libraries` data, or lack thereof for the latter via `null`, inside a `{success: true}` object at its `config` and `libraries` keys respectively. In case of an error, a `{success: false}` object is returned instead so that errors can be reused adequately on the CLI and in the extension for VS Code.";
        };
        "FR": {
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT": "Le pr\u00E9fixe absolu de tout et chaque substitut Comment Variables.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY": "S'assure que les cl\u00E9s `data` de la config ne doivent inclure que des lettres minuscules (`Ll`), lettres majuscules (`Lu`), d'autres lettres (`Lo`), de la ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`), des chiffres (`N`) et des caract\u00E8res d'espacement (`s`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY": "Pareil que `configDataKeyRegex` mais sans les lettres minuscules (`Ll`), et sans ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`) et caract\u00E8res d'espacement (`s`) remplac\u00E9s par des tirets bas (`_`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY": "Pareil que `configDataSubKeyRegex` mais sans le caract\u00E8re `#` qui connecte les sous-cl\u00E9s les unes aux autres.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL": "Pareil que `flattenedConfigDataKeyRegex` mais prenant en compte le pr\u00E9fixe `$COMMENT#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#_COMMENT` et son caract\u00E8re `#`, emp\u00EAchant la succession de deux `#` cons\u00E9cutifs, tout en enlevant les `^` et `$` du d\u00E9but et de la fin du groupe de capture.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL": "Pareil que `flattenedConfigDataPlaceholderLocalRegex` mais global.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY": "V\u00E9rifie, valide et r\u00E9sout de fa\u00E7on initiale le chemin de la config pour en obtenir la config et en fournir les donn\u00E9es de sa cl\u00E9 `libraries`.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH": "Le chemin absolu de la config qu'importe la mani\u00E8re dont il est fourni : que ce soit par d\u00E9faut avec `comments.config.js` dans le dossier courant, \u00E0 partir d'un chemin relatif passer via le drapeau `--config` par l'outil ligne de commande, ou d'un chemin relatif entr\u00E9 \u00E0 la cl\u00E9 `config` de l'extension dans `.vscode/settings.json` pour VS Code.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY": "La config et ses donn\u00E9es `libraries`, ou leur absence pour ces derni\u00E8res via `null`, dans un objet `{success: true}` \u00E0 ses cl\u00E9s `config` and `libraries` respectivement. En cas d'erreur, un objet `{success: false}` est retourn\u00E9 \u00E0 la place de sorte que les erreurs puissent \u00EAtre r\u00E9utilis\u00E9es de fa\u00E7on ad\u00E9quate dans l'outil ligne de commande et dans l'extension pour VS Code.";
        };
    };
};

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY
 *
 * @example
 * `config key`
 *
 * @public
 */
export declare const configKeyRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY
 *
 * @example
 * `FLATTENED#CONFIG#KEY`
 *
 * @public
 */
export declare const flattenedConfigKeyRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL
 *
 * @example
 * `$COMMENT#FLATTENED#CONFIG#PLACEHOLDER#GLOBAL#REGEX`
 *
 * @public
 */
export declare const flattenedConfigPlaceholderGlobalRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL
 *
 * @example
 * `$COMMENT#FLATTENED#CONFIG#PLACEHOLDER#LOCAL#REGEX`
 *
 * @public
 */
export declare const flattenedConfigPlaceholderLocalRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY
 *
 * @param configPath - $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH
 * @returns $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY
 *
 * @public
 */
export declare function resolveConfigReadonly(configPath: string): Promise<{
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
    readonly config: Record<string, unknown>;
    readonly libraries: Record<string, Record<string, string>> | null;
}>;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY
 *
 * @example
 * `SUB_KEY`
 *
 * @public
 */
export declare const subKeyRegex: RegExp;

export { }
