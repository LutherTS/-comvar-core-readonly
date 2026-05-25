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
                                "configEmpty": {
                                    "value": "The config is empty. Please provide the `variations` key in order to get started.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#CONFIGEMPTY";
                                };
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
                            };
                            "statuses": {
                                "CONFIG_EMPTY": {
                                    "value": "\"The config is empty. Please provide the `variations` key in order to get started.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#CONFIG_EMPTY";
                                };
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
                                "configKey": {
                                    "value": "Ensures config keys should only include lowercase letters (`Ll`), uppercase letters (`Lu`), other letters (`Lo`), dash punctuation (`Pd`), connector punctuation (`Pc`), numbers (`N`) and whitespaces (`s`).";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGKEY";
                                };
                                "subKey": {
                                    "value": "Same as `configKeyRegex` but without lowercase letters (`Ll`) replaced by uppercase letters, and without dash punctuation (`Pd`), connector punctuation (`Pc`), and whitespaces (`s`) replaced by underscores (`_`).";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#SUBKEY";
                                };
                                "flattenedConfigKey": {
                                    "value": "Same as `subKeyRegex` but with the `#` character that links each subkey together.";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGKEY";
                                };
                                "flattenedConfigPlaceholderLocal": {
                                    "value": "Same as `flattenedConfigKeyRegex` but taking the prefix `$COMMENT` and its `#` into consideration, preventing two consecutive `#`'s, while removing the starting `^` and the ending `$` from the capture group.";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERLOCAL";
                                };
                                "flattenedConfigPlaceholderGlobal": {
                                    "value": "Same as `flattenedConfigPlaceholderLocalRegex` but globally.";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGPLACEHOLDERGLOBAL";
                                };
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
                "libraries": {
                    "value": "libraries";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES";
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
        };
    };
    "fr": {
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
