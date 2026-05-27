export const resolvedConfigData: {
    "en": {
        "tsDoc": {
            "src": {
                "consts": {
                    "errors": {
                        "input": {
                            "messages": {
                                "configPathSupposedToBeString": {
                                    "value": "`configPath` is supposed to be a string.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBESTRING";
                                };
                                "configPathSupposedToBeDotJs": {
                                    "value": "`configPath` is supposed to be strictly JavaScript (`.js` only).";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEDOTJS";
                                };
                                "noConfigFileFound": {
                                    "value": "No config file found for Comment Variables.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#NOCONFIGFILEFOUND";
                                };
                                "configModuleCouldntResolve": {
                                    "value": "Config module could not get resolved. (Most probably due to fatal syntax.)";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMODULECOULDNTRESOLVE";
                                };
                                "configCouldntPreZod": {
                                    "value": "The config could not pass pre-validation from zod.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGCOULDNTPREZOD";
                                };
                                "configMustBeObject": {
                                    "value": "Invalid config format. The config must only be default-exported as an object.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMUSTBEOBJECT";
                                };
                            };
                            "statuses": {
                                "CONFIGPATH_NOT_STRING": {
                                    "value": "\"`configPath` is supposed to be a string.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_STRING";
                                };
                                "CONFIGPATH_NOT_DOT_JS": {
                                    "value": "\"`configPath` is supposed to be strictly JavaScript (`.js` only).\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_DOT_JS";
                                };
                                "CONFIG_FILE_NOT_FOUND": {
                                    "value": "\"No config file found for Comment Variables.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_FILE_NOT_FOUND";
                                };
                                "CONFIG_MODULE_NOT_RESOLVED": {
                                    "value": "\"Config module could not get resolved. (Most probably due to fatal syntax.)\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_MODULE_NOT_RESOLVED";
                                };
                                "CONFIG_PRE_INVALID": {
                                    "value": "\"The config could not pass pre-validation from zod.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_PRE_INVALID";
                                };
                                "CONFIG_NOT_OBJECT": {
                                    "value": "\"Invalid config format. The config must only be default-exported as an object.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_NOT_OBJECT";
                                };
                            };
                        };
                        "config": {
                            "messages": {
                                "librariesCouldntZod": {
                                    "value": "The config's `libraries` key's value could not pass validation from zod.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESCOULDNTZOD";
                                };
                                "librariesShouldBeRecord": {
                                    "value": "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESSHOULDBERECORD";
                                };
                                "librariesMustSubKey": {
                                    "value": "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTSUBKEY";
                                };
                                "librariesRecordMustBeRecords": {
                                    "value": "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDMUSTBERECORDS";
                                };
                                "librariesMustKey": {
                                    "value": "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTKEY";
                                };
                                "librariesValuesMustBeStrings": {
                                    "value": "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESMUSTBESTRINGS";
                                };
                                "librariesValuesCannotBeEmptyStrings": {
                                    "value": "The config `libraries` key's record's records' values cannot be empty strings.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESCANNOTBEEMPTYSTRINGS";
                                };
                            };
                            "statuses": {
                                "LIBRARIES_INVALID": {
                                    "value": "\"The config's `libraries` key's value could not pass validation from zod.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_INVALID";
                                };
                                "LIBRARIES_NOT_RECORD": {
                                    "value": "\"The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_RECORD";
                                };
                                "LIBRARIES_NOT_SUBKEY_CONFORM": {
                                    "value": "\"The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_SUBKEY_CONFORM";
                                };
                                "LIBRARIES_RECORD_NOT_RECORDS": {
                                    "value": "\"The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_NOT_RECORDS";
                                };
                                "LIBRARIES_NOT_KEY_CONFORM": {
                                    "value": "\"The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_KEY_CONFORM";
                                };
                                "LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS": {
                                    "value": "\"The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS";
                                };
                                "LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS": {
                                    "value": "\"The config `libraries` key's record's records' values cannot be empty strings.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS";
                                };
                            };
                        };
                    };
                };
                "lib": {
                    "consts": {
                        "public": {
                            "_COMMENT": {
                                "value": "The absolute prefix for every single Comment Variables placeholder.";
                                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT";
                            };
                        };
                        "MODULE_TO_LOAD": {
                            "value": "The shared `env` between `fresh-import-a.js` and `fresh-import-b.js` for the `freshImport` utility.";
                            "key": "EN#TSDOC#SRC#LIB#CONSTS#MODULE_TO_LOAD";
                        };
                        "regexes": {
                            "public": {
                                "configDataKey": {
                                    "value": "Ensures config `data` keys should only include lowercase letters (`Ll`), uppercase letters (`Lu`), other letters (`Lo`), dash punctuation (`Pd`), connector punctuation (`Pc`), numbers (`N`), and whitespaces (`s`).";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY";
                                };
                                "configDataSubKey": {
                                    "value": "Same as `configDataKeyRegex` but without lowercase letters (`Ll`) replaced by uppercase letters, and without dash punctuation (`Pd`), connector punctuation (`Pc`), and whitespaces (`s`) replaced by underscores (`_`).";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY";
                                };
                                "flattenedConfigDataKey": {
                                    "value": "Same as `configDataSubKeyRegex` but with the `#` character that links each subkey together.";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY";
                                };
                                "flattenedConfigDataPlaceholderLocal": {
                                    "value": "Same as `flattenedConfigDataKeyRegex` but taking the prefix `$COMMENT` and its `#` into consideration, preventing two consecutive `#`'s, while removing the starting `^` and the ending `$` from the capture group.";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL";
                                };
                                "flattenedConfigDataPlaceholderGlobal": {
                                    "value": "Same as `flattenedConfigDataPlaceholderLocalRegex` but globally.";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL";
                                };
                            };
                        };
                    };
                    "defs": {
                        "utils": {
                            "public": {
                                "resolveConfigReadonly": {
                                    "value": "Initially verifies, validates and resolves the config path to retrieve the config and provide its `libraries` key data.";
                                    "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY";
                                };
                            };
                            "freshImport": {
                                "value": "Guarantees a fresh import of the config, negating the innate (and hidden) cache of the dynamic `import` utility.";
                                "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#FRESHIMPORT";
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "public": {
                                "configPath": {
                                    "value": "The absolute path of the config regardless of the manner through which it is provided: be it from a default `comments.config.js` at the current working directory, from a relative path passed via the `--config` flag in the CLI, or from a relative path at the extension's `config` key in `.vscode/settings.json` for VS Code.";
                                    "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH";
                                };
                            };
                            "moduleUrl": {
                                "value": "The absolute path of the module to import.";
                                "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#MODULEURL";
                            };
                        };
                    };
                    "returns": {
                        "utils": {
                            "public": {
                                "resolveConfigReadonly": {
                                    "value": "The config and its `libraries` data, or lack thereof for the latter via `null`, inside a `{success: true}` object at its `config` and `libraries` keys respectively. In case of an error, a `{success: false}` object is returned instead so that errors can be reused adequately on the CLI and in the extension for VS Code.";
                                    "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY";
                                };
                            };
                            "freshImport": {
                                "value": "Either an object with its `default` property sets to the default export of the module successfully loaded, or `null` when an error arises. (Debugging is currently manual by looking at the error being caught in the child process.)";
                                "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#FRESHIMPORT";
                            };
                        };
                    };
                };
                "tests": {
                    "defs": {
                        "utils": {
                            "assertFailureWithMessage": {
                                "value": "Asserts that `resolveConfigReadonly` fails when it should, with the message of the error specified and its status inferred.";
                                "key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE";
                            };
                            "assertErrorWithMessage": {
                                "value": "Asserts that `resolveConfigReadonly` fails when it should, with the message of the error specified and its status inferred. Here, the error message is prefixed with `\"ERROR. \"` to specify a leading user-facing error.";
                                "key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTERRORWITHMESSAGE";
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "resolveConfigReadonlyResults": {
                                "value": "The results of the `resolveConfigReadonly` instance called in the test, whose success or failure is evaluated via its `success` key's boolean value.";
                                "key": "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#RESOLVECONFIGREADONLYRESULTS";
                            };
                            "expectedMessage": {
                                "value": "The expected message of the error that should be encountered during failure, from which the status can be inferred.";
                                "key": "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE";
                            };
                        };
                    };
                    "returns": {
                        "utils": {
                            "assertFailureWithMessage": {
                                "value": "Void.";
                                "key": "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE";
                            };
                            "assertErrorWithMessage": {
                                "value": "Void.";
                                "key": "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTERRORWITHMESSAGE";
                            };
                        };
                    };
                };
            };
        };
        "forComposedVariables": {
            "variables": {
                "resolveConfigReadonly": {
                    "value": "resolveConfigReadonly";
                    "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY";
                };
            };
            "arguments": {};
        };
        "composedVariablesExclusives": {
            "variables": {
                "_COMMENT": {
                    "value": "$COMMENT";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#_COMMENT";
                };
                "libraries": {
                    "value": "libraries";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES";
                };
                "sameReference": {
                    "value": "sameReference";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SAMEREFERENCE";
                };
                "configDataKeyRegex": {
                    "value": "configDataKeyRegex";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#CONFIGDATAKEYREGEX";
                };
                "configDataSubKeyRegex": {
                    "value": "configDataSubKeyRegex";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#CONFIGDATASUBKEYREGEX";
                };
                "flattenedConfigDataKeyRegex": {
                    "value": "flattenedConfigDataKeyRegex";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAKEYREGEX";
                };
                "flattenedConfigDataPlaceholderLocalRegex": {
                    "value": "flattenedConfigDataPlaceholderLocalRegex";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAPLACEHOLDERLOCALREGEX";
                };
                "flattenedConfigDataPlaceholderGlobalRegex": {
                    "value": "flattenedConfigDataPlaceholderGlobalRegex";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAPLACEHOLDERGLOBALREGEX";
                };
            };
            "arguments": {
                "configPath": {
                    "value": "configPath";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CONFIGPATH";
                };
            };
            "commentVariables": {
                "value": "Comment Variables";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES";
            };
            "dotJs": {
                "value": ".js";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#DOTJS";
            };
            "couldntPreZod": {
                "value": "could not pass pre-validation from zod";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTPREZOD";
            };
            "couldntZod": {
                "value": "could not pass validation from zod";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTZOD";
            };
            "_theConfig": {
                "value": "The config";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG";
            };
            "keyValue": {
                "value": "key's value";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#KEYVALUE";
            };
            "ifProvided": {
                "value": "if provided";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#IFPROVIDED";
            };
            "shouldOnlyBe": {
                "value": "should only be";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SHOULDONLYBE";
            };
            "mustOnlyBe": {
                "value": "must only be";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#MUSTONLYBE";
            };
            "_asserts": {
                "value": "Asserts";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS";
            };
            "whenItShould": {
                "value": "when it should";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD";
            };
            "thatShouldFailure": {
                "value": "that should be encountered during failure";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#THATSHOULDFAILURE";
            };
            "_void": {
                "value": "Void";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID";
            };
        };
    };
    "fr": {
        "tsDoc": {
            "src": {
                "lib": {
                    "consts": {
                        "public": {
                            "_COMMENT": {
                                "value": "Le pr\u00E9fixe absolu de tout et chaque substitut Comment Variables.";
                                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT";
                            };
                        };
                        "regexes": {
                            "public": {
                                "configDataKey": {
                                    "value": "S'assure que les cl\u00E9s `data` de la config ne doivent inclure que des lettres minuscules (`Ll`), lettres majuscules (`Lu`), d'autres lettres (`Lo`), de la ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`), des chiffres (`N`) et des caract\u00E8res d'espacement (`s`).";
                                    "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY";
                                };
                                "configDataSubKey": {
                                    "value": "Pareil que `configDataKeyRegex` mais sans les lettres minuscules (`Ll`), et sans ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`) et caract\u00E8res d'espacement (`s`) remplac\u00E9s par des tirets bas (`_`).";
                                    "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY";
                                };
                                "flattenedConfigDataKey": {
                                    "value": "Pareil que `configDataSubKeyRegex` mais sans le caract\u00E8re `#` qui connecte les sous-cl\u00E9s les unes aux autres.";
                                    "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY";
                                };
                                "flattenedConfigDataPlaceholderLocal": {
                                    "value": "Pareil que `flattenedConfigDataKeyRegex` mais prenant en compte le pr\u00E9fixe `$COMMENT` et son caract\u00E8re `#`, emp\u00EAchant la succession de deux `#` cons\u00E9cutifs, tout en enlevant les `^` et `$` du d\u00E9but et de la fin du groupe de capture.";
                                    "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL";
                                };
                                "flattenedConfigDataPlaceholderGlobal": {
                                    "value": "Pareil que `flattenedConfigDataPlaceholderLocalRegex` mais global.";
                                    "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL";
                                };
                            };
                        };
                    };
                    "defs": {
                        "utils": {
                            "public": {
                                "resolveConfigReadonly": {
                                    "value": "V\u00E9rifie, valide et r\u00E9sout de fa\u00E7on initiale le chemin de la config pour en obtenir la config et en fournir les donn\u00E9es de sa cl\u00E9 `libraries`.";
                                    "key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY";
                                };
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "public": {
                                "configPath": {
                                    "value": "Le chemin absolu de la config qu'importe la mani\u00E8re dont il est fourni : que ce soit par d\u00E9faut avec `comments.config.js` dans le dossier courant, \u00E0 partir d'un chemin relatif passer via le drapeau `--config` par l'outil ligne de commande, ou d'un chemin relatif entr\u00E9 \u00E0 la cl\u00E9 `config` de l'extension dans `.vscode/settings.json` pour VS Code.";
                                    "key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH";
                                };
                            };
                        };
                    };
                    "returns": {
                        "utils": {
                            "public": {
                                "resolveConfigReadonly": {
                                    "value": "La config et ses donn\u00E9es `libraries`, ou leur absence pour ces derni\u00E8res via `null`, dans un objet `{success: true}` \u00E0 ses cl\u00E9s `config` and `libraries` respectivement. En cas d'erreur, un objet `{success: false}` est retourn\u00E9 \u00E0 la place de sorte que les erreurs puissent \u00EAtre r\u00E9utilis\u00E9es de fa\u00E7ons ad\u00E9quates dans l'outil ligne de commande et dans l'extension pour VS Code.";
                                    "key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY";
                                };
                            };
                        };
                    };
                };
            };
        };
        "forComposedVariables": {
            "variables": {};
            "arguments": {};
        };
        "composedVariablesExclusives": {
            "variables": {};
            "arguments": {};
        };
    };
};
