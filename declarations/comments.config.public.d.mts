/** @public */
export const resolvedPublicData: {
    "libraryKey": "_COMVAR_CORE_READONLY";
    "libraryVariations": {
        "EN": {
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT": "The absolute prefix for every single Comment Variables placeholder.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGKEY": "Ensures config keys should only include lowercase letters (`Ll`), uppercase letters (`Lu`), other letters (`Lo`), dash punctuation (`Pd`), connector punctuation (`Pc`), numbers (`N`) and whitespaces (`s`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#SUBKEY": "Same as `configKeyRegex` but without lowercase letters (`Ll`) replaced by uppercase letters, and without dash punctuation (`Pd`), connector punctuation (`Pc`), and whitespaces (`s`) replaced by underscores (`_`).";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGKEY": "Same as `subKeyRegex` but with the `#` character that links each subkey together.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERLOCAL": "Same as `flattenedConfigKeyRegex` but taking the prefix `$COMMENT` and its `#` into consideration, preventing two consecutive `#`'s, while removing the starting `^` and the ending `$` from the capture group.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERGLOBAL": "Same as `flattenedConfigPlaceholderLocalRegex` but globally.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY": "Initially verifies, validates and resolves the config path to retrieve the config and provide its `libraries` key data.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH": "The absolute path of the config regardless of the manner through which it is provided: be it from a default `comments.config.js` at the current working directory, from a relative path passed via the `--config` flag in the CLI, or from a relative path at the extension's `config` key in `.vscode/settings.json` for VS Code.";
            "_COMVAR_CORE_READONLY#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY": "The config and its `librariesData`, or lack thereof for the latter via `null`, inside a `{success: true}` object at its `config` and `libraries` keys respectively. In case of an error, a `{success: false}` object is returned instead so that errors can be reused adequately on the CLI and in the extension for VS Code.";
        };
    };
};
