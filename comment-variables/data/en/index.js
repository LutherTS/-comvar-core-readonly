/* data */

export const enData = Object.freeze({
  tsDoc: Object.freeze({
    src: Object.freeze({
      consts: Object.freeze({
        errors: Object.freeze({
          input: Object.freeze({
            messages: Object.freeze({
              configPathSupposedToBeString:
                "`$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CONFIGPATH` is supposed to be a string." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBESTRING / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBESTRING */,
              configPathSupposedToBeDotJs:
                "`$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CONFIGPATH` is supposed to be strictly JavaScript (`$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#DOTJS` only)." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEDOTJS / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEDOTJS */,
              noConfigFileFound:
                "No config file found for $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#NOCONFIGFILEFOUND / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#NOCONFIGFILEFOUND */,
              configModuleCouldntResolve:
                "Config module could not get resolved. (Most probably due to fatal syntax.)" /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMODULECOULDNTRESOLVE / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMODULECOULDNTRESOLVE */,
              configCouldntPreZod:
                "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTPREZOD." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGCOULDNTPREZOD / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGCOULDNTPREZOD */,
              configMustBeObject:
                "Invalid config format. $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#MUSTONLYBE default-exported as an object." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMUSTBEOBJECT / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMUSTBEOBJECT */,
            }),
            statuses: Object.freeze({
              CONFIGPATH_NOT_STRING:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBESTRING"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_STRING / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_STRING */,
              CONFIGPATH_NOT_DOT_JS:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEDOTJS"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_DOT_JS / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_DOT_JS */,
              CONFIG_FILE_NOT_FOUND:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#NOCONFIGFILEFOUND"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_FILE_NOT_FOUND / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_FILE_NOT_FOUND */,
              CONFIG_MODULE_NOT_RESOLVED:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMODULECOULDNTRESOLVE"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_MODULE_NOT_RESOLVED / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_MODULE_NOT_RESOLVED */,
              CONFIG_PRE_INVALID:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGCOULDNTPREZOD"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_PRE_INVALID / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_PRE_INVALID */,
              CONFIG_NOT_OBJECT:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMUSTBEOBJECT"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_NOT_OBJECT / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_NOT_OBJECT */,
            }),
          }),
          config: Object.freeze({
            messages: Object.freeze({
              librariesCouldntZod:
                "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG's `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES` $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#KEYVALUE $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTZOD." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESCOULDNTZOD / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESCOULDNTZOD */,
              librariesShouldBeRecord:
                "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES` $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#KEYVALUE, $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#IFPROVIDED, $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SHOULDONLYBE a record (representing library keys paired with their selected variations)." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESSHOULDBERECORD / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESSHOULDBERECORD */,
              librariesMustSubKey:
                "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTSUBKEY / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTSUBKEY */,
              librariesRecordMustBeRecords:
                "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES` key's record's values $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#MUSTONLYBE records as well (representing Comment Variables keys from external libraries paired with their actual values)." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDMUSTBERECORDS / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDMUSTBERECORDS */,
              librariesMustKey:
                "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTKEY / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTKEY */,
              librariesValuesMustBeStrings:
                "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES` key's record's records' values $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#MUSTONLYBE strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with)." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESMUSTBESTRINGS / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESMUSTBESTRINGS */,
            }),
            statuses: Object.freeze({
              LIBRARIES_INVALID:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESCOULDNTZOD"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_INVALID / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_INVALID */,
              LIBRARIES_NOT_RECORD:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESSHOULDBERECORD"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_RECORD / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_RECORD */,
              LIBRARIES_NOT_SUBKEY_CONFORM:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTSUBKEY"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_SUBKEY_CONFORM / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_SUBKEY_CONFORM */,
              LIBRARIES_RECORD_NOT_RECORDS:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDMUSTBERECORDS"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_NOT_RECORDS / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_NOT_RECORDS */,
              LIBRARIES_NOT_KEY_CONFORM:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTKEY"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_KEY_CONFORM / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_KEY_CONFORM */,
              LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS:
                '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESMUSTBESTRINGS"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS */,
            }),
          }),
        }),
      }),
      lib: Object.freeze({
        consts: Object.freeze({
          public: Object.freeze({
            _COMMENT:
              "The absolute prefix for every single $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES placeholder." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT / core: $COMMENT#EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT */,
          }),
          MODULE_TO_LOAD:
            "The shared `env` between `fresh-import-a.js` and `fresh-import-b.js` for the `freshImport` utility." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#MODULE_TO_LOAD / core: $COMMENT#EN#TSDOC#SRC#LIB#CONSTS#MODULE_TO_LOAD */,
          regexes: Object.freeze({
            public: Object.freeze({
              configKey:
                "Ensures config keys should only include lowercase letters (`Ll`), uppercase letters (`Lu`), other letters (`Lo`), dash punctuation (`Pd`), connector punctuation (`Pc`), numbers (`N`) and whitespaces (`s`)." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGKEY / core: $COMMENT#EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGKEY */,
              subKey:
                "Same as `configKeyRegex` but without lowercase letters (`Ll`) replaced by uppercase letters, and without dash punctuation (`Pd`), connector punctuation (`Pc`), and whitespaces (`s`) replaced by underscores (`_`)." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#SUBKEY / core: $COMMENT#EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#SUBKEY */,
              flattenedConfigKey:
                "Same as `subKeyRegex` but with the `#` character that links each subkey together." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGKEY / core: $COMMENT#EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGKEY */,
              flattenedConfigPlaceholderLocal:
                "Same as `flattenedConfigKeyRegex` but taking the prefix `$COMMENT` and its `#` into consideration, preventing two consecutive `#`'s, while removing the starting `^` and the ending `$` from the capture group." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERLOCAL / core: $COMMENT#EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERLOCAL */,
              flattenedConfigPlaceholderGlobal:
                "Same as `flattenedConfigPlaceholderLocalRegex` but globally." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERGLOBAL / core: $COMMENT#EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERGLOBAL */,
            }),
          }),
        }),
        defs: Object.freeze({
          utils: Object.freeze({
            public: Object.freeze({
              resolveConfigReadonly:
                "Initially verifies, validates and resolves the config path to retrieve the config and provide its `libraries` key data." /* variations: $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY / core: $COMMENT#EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY */,
            }),
            freshImport:
              "Guarantees a fresh import of the config, negating the innate (and hidden) cache of the dynamic `import` utility." /* variations: $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#FRESHIMPORT / core: $COMMENT#EN#TSDOC#SRC#LIB#DEFS#UTILS#FRESHIMPORT */,
          }),
        }),
        params: Object.freeze({
          utils: Object.freeze({
            public: Object.freeze({
              configPath:
                "The absolute path of the config regardless of the manner through which it is provided: be it from the default `comments.config.js` at the current working directory, from a relative path passed via the `--config` flag in the CLI, or from a relative path at the extension's `config` key in `.vscode/settings.json` for VS Code." /* variations: $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH / core: $COMMENT#EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH */,
            }),
            moduleUrl:
              "The absolute path of the module to import." /* variations: $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#MODULEURL / core: $COMMENT#EN#TSDOC#SRC#LIB#PARAMS#UTILS#MODULEURL */,
          }),
        }),
        returns: Object.freeze({
          utils: Object.freeze({
            public: Object.freeze({
              resolveConfigReadonly:
                "The config and its `librariesData`, or lack thereof for the latter via `null`, inside a `{success: true}` object at its `config` and `libraries` keys respectively. In case of an error, a `{success: false}` object is returned instead so that errors can be reused adequately on the CLI and in the extension for VS Code." /* variations: $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY / core: $COMMENT#EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY */,
            }),
            freshImport:
              "Either an object with its `default` property sets to the default export of the module successfully loaded, or `null` when an error arises. (Debugging is currently manual by looking at the error being caught in the child process.)" /* variations: $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#FRESHIMPORT / core: $COMMENT#EN#TSDOC#SRC#LIB#RETURNS#UTILS#FRESHIMPORT */,
          }),
        }),
      }),
      tests: Object.freeze({
        defs: Object.freeze({
          utils: Object.freeze({
            assertFailureWithMessage:
              "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS that `$COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY` fails $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD, with the message of the error specified and its status inferred." /* variations: $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE / core: $COMMENT#EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE */,
            assertErrorWithMessage:
              '$COMMENT#EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE Here, the error message is prefixed with `"ERROR. "` to specify a leading user-facing error.' /* variations: $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTERRORWITHMESSAGE / core: $COMMENT#EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTERRORWITHMESSAGE */,
          }),
        }),
        params: Object.freeze({
          utils: Object.freeze({
            resolveConfigReadonlyResults:
              "The results of the `$COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY` instance called in the test, whose success or failure is evaluated via its `success` key's boolean value." /* variations: $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#RESOLVECONFIGREADONLYRESULTS / core: $COMMENT#EN#TSDOC#SRC#TESTS#PARAMS#UTILS#RESOLVECONFIGREADONLYRESULTS */,
            expectedMessage:
              "The expected message of the error $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#THATSHOULDFAILURE, from which the status can be inferred." /* variations: $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE / core: $COMMENT#EN#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE */,
          }),
        }),
        returns: Object.freeze({
          utils: Object.freeze({
            assertFailureWithMessage:
              "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID." /* variations: $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE / core: $COMMENT#EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE */,
            assertErrorWithMessage:
              "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE" /* variations: $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE / core: $COMMENT#EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE */,
          }),
        }),
      }),
    }),
  }),
  forComposedVariables: Object.freeze({
    variables: Object.freeze({
      resolveConfigReadonly:
        "resolveConfigReadonly" /* variations: $COMMENT#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY / core: $COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY */,
    }),
    arguments: Object.freeze({}),
  }),
  composedVariablesExclusives: Object.freeze({
    variables: Object.freeze({
      libraries:
        "libraries" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES */,
    }),
    arguments: Object.freeze({
      configPath:
        "configPath" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CONFIGPATH / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CONFIGPATH */,
    }),

    // tsDoc.src.consts
    commentVariables:
      "Comment Variables" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES */,
    dotJs:
      ".js" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#DOTJS / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#DOTJS */,
    couldntPreZod:
      "could not pass pre-validation from zod" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#COULDNTPREZOD / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTPREZOD */,
    couldntZod:
      "could not pass validation from zod" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#COULDNTZOD / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTZOD */,
    _theConfig:
      "The config" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG */,
    keyValue:
      "key's value" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#KEYVALUE / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#KEYVALUE */,
    ifProvided:
      "if provided" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#IFPROVIDED / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#IFPROVIDED */,
    shouldOnlyBe:
      "should only be" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#SHOULDONLYBE / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SHOULDONLYBE */,
    mustOnlyBe:
      "must only be" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#MUSTONLYBE / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#MUSTONLYBE */,

    // tsDoc.src.tests.defs.utils
    _asserts:
      "Asserts" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS */,
    whenItShould:
      "when it should" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD */,
    thatShouldFailure:
      "that should be encountered during failure" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#THATSHOULDFAILURE / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#THATSHOULDFAILURE */,

    // tsDoc.src.tests.returns.utils
    _void:
      "Void" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#_VOID / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID */,
  }),
});

/* manual composedVariablesExclusives */

export const enComposedVariablesExclusives = /** @type {const} */ ([]);
