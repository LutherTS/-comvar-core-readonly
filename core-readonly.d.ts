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
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#DEFAULTCONFIGFILENAME": "The default file name considered at the project's root directory for the Comment Variables config.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#PACKAGEJSONFILENAME": "Useful to watch in order to refresh the Comment Variables config for `libraries` every time the project's `package.json` is updated (but not when it's created or deleted).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY": "Ensures config `data` keys should only include lowercase letters (`Ll`), uppercase letters (`Lu`), other letters (`Lo`), dash punctuation (`Pd`), connector punctuation (`Pc`), numbers (`N`), and whitespaces (`s`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY": "Same as `configDataKeyRegex` but without lowercase letters (`Ll`) replaced by uppercase letters, and without dash punctuation (`Pd`), connector punctuation (`Pc`), and whitespaces (`s`) replaced by underscores (`_`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY": "Same as `configDataSubKeyRegex` but with the `#` character that links each subkey together, ensuring the string is made of at least two subkeys since the first variant subkey is mandatory, while ensuring that the `#` character does not end the string.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL": "Same as `flattenedConfigDataKeyRegex` but taking the prefix `$COMMENT` and its `#` into consideration.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL": "Same as `flattenedConfigDataPlaceholderLocalRegex` but globally, while removing the starting `^` and the ending `$` from the capture group.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY": "Initially verifies, validates and resolves the config path to retrieve the config and provide its `libraries` key data.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH": "The absolute path of the config regardless of the manner through which it is provided: be it from a default `comments.config.js` at the current working directory, from a relative path passed via the `--config` flag in the CLI, or from a relative path at the extension's `config` key in `.vscode/settings.json` for VS Code.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY": "The config and its `libraries` data, or lack thereof for the latter via `null`, inside a `{success: true}` object at its `config` and `libraries` keys respectively. In case of an error, a `{success: false}` object is returned instead so that errors can be reused adequately on the CLI and in the extension for VS Code.";
        };
        "FR": {
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT": "Le préfixe absolu de tout et chaque substitut Comment Variables.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#DEFAULTCONFIGFILENAME": "Le nom de fichier considéré par défaut au dossier racine du projet pour la config de Comment Variables.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#PACKAGEJSONFILENAME": "Particulièrement utile à surveiller afin de rafraîchir la config Comment Variables pour ses `libraries` à chaque fois que le `package.json` du projet est mis à jour (ignorant créations et suppressions).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY": "S'assure que les clés `data` de la config ne doivent inclure que des lettres minuscules (`Ll`), lettres majuscules (`Lu`), d'autres lettres (`Lo`), de la ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`), des chiffres (`N`) et des caractères d'espacement (`s`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY": "Pareil que `configDataKeyRegex` mais sans les lettres minuscules (`Ll`), et sans ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`) et caractères d'espacement (`s`) remplacés par des tirets bas (`_`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY": "Pareil que `configDataSubKeyRegex` mais avec le caractère `#` qui connecte les sous-clés les unes aux autres, s'assurant que la chaîne de caractères comprenne au moins deux sous-clés puisque la première attribuée au variant est obligatoire, tout en s'assurant que le caractère `#` ne termine pas la chaîne de caractères.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL": "Pareil que `flattenedConfigDataKeyRegex` mais prenant en compte le préfixe `$COMMENT` et son caractère `#`.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL": "Pareil que `flattenedConfigDataPlaceholderLocalRegex` mais global, tout en enlevant les `^` et `$` du début et de la fin du groupe de capture.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY": "Vérifie, valide et résout de façon initiale le chemin de la config pour en obtenir la config et en fournir les données de sa clé `libraries`.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH": "Le chemin absolu de la config qu'importe la manière dont il est fourni : que ce soit par défaut avec `comments.config.js` dans le dossier courant, à partir d'un chemin relatif passer via le drapeau `--config` par l'outil ligne de commande, ou d'un chemin relatif entré à la clé `config` de l'extension dans `.vscode/settings.json` pour VS Code.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY": "La config et ses données `libraries`, ou leur absence pour ces dernières via `null`, dans un objet `{success: true}` à ses clés `config` and `libraries` respectivement. En cas d'erreur, un objet `{success: false}` est retourné à la place de sorte que les erreurs puissent être réutilisées de façons adéquates dans l'outil ligne de commande et dans l'extension pour VS Code.";
        };
    };
};

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY
 *
 * @example
 * `config data-key`
 *
 * @public
 */
export declare const configDataKeyRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY
 *
 * @example
 * `CONFIG_DATA_SUB_KEY`
 *
 * @public
 */
export declare const configDataSubKeyRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#DEFAULTCONFIGFILENAME
 * @public
 */
export declare const defaultConfigFileName: "comments.config.js";

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYGLOBAL
 *
 * @example
 * `FLATTENED#CONFIG#DATA#KEY`, `FLATTENED`, `CONFIG#DATA#KEY`
 *
 * @public
 */
export declare const flattenedConfigDataKeyGlobalRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYLOCAL
 *
 * @example
 * `FLATTENED#CONFIG#DATA#KEY`, `FLATTENED`, `CONFIG#DATA#KEY`
 *
 * @public
 */
export declare const flattenedConfigDataKeyLocalRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY
 *
 * @example
 * `FLATTENED#CONFIG#DATA#KEY`
 *
 * @public
 */
export declare const flattenedConfigDataKeyRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL
 *
 * @example
 * `$COMMENT#FLATTENED#CONFIG#DATA#PLACEHOLDER#LOCAL#REGEX`, `FLATTENED#CONFIG#DATA#PLACEHOLDER#LOCAL#REGEX`
 *
 * @public
 */
export declare const flattenedConfigDataPlaceholderGlobalRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL
 *
 * @example
 * `$COMMENT#FLATTENED#CONFIG#DATA#PLACEHOLDER#LOCAL#REGEX`, `FLATTENED#CONFIG#DATA#PLACEHOLDER#LOCAL#REGEX`
 *
 * @public
 */
export declare const flattenedConfigDataPlaceholderLocalRegex: RegExp;

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#PACKAGEJSONFILENAME
 * @public
 */
export declare const packageJsonFileName: "package.json";

/**
 * $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY
 *
 * @param configPath - $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH
 * @returns $COMMENT#_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY
 *
 * @public
 */
export declare const resolveConfigReadonly: (configPath: string) => Promise<{
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
        readonly message: "ERROR. No config file found for Comment Variables.";
        readonly status: "CONFIG_FILE_NOT_FOUND";
    }];
} | {
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
        readonly message: `ERROR. Library variation key ${string} does not start with its assigned library key (${string}#), which suggests its library variation has been misplaced.`;
        readonly status: "MISPLACED_LIBRARY_VARIATION";
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
        readonly message: "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data." | "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data." | "The config `libraries` key's record's records' values cannot be empty strings." | "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with)." | "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values)." | "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).";
        readonly status: "LIBRARIES_NOT_KEY_CONFORM" | "LIBRARIES_NOT_RECORD" | "LIBRARIES_NOT_SUBKEY_CONFORM" | "LIBRARIES_RECORD_NOT_RECORDS" | "LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS" | "LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS";
    } | {
        readonly type: "error";
        readonly message: "The error encountered is not standardized.";
        readonly status: "ERROR_NOT_STANDARDIZED";
    })[]];
} | {
    readonly success: true;
    readonly config: Record<string, unknown>;
    readonly libraries: Record<string, Record<string, string>> | null;
    readonly libraryVariationKeys_libraryVariationValues: Map<string, string>;
    readonly sameReference: boolean;
}>;

export { }
