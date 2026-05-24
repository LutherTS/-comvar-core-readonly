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
                                "variationsDataCouldntPreZod": {
                                    "value": "The config's `variations` and `data` keys' values could not pass pre-validation from zod together.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#VARIATIONSDATACOULDNTPREZOD";
                                };
                                "variationsDataTogether": {
                                    "value": "The config's `variations` and `data` keys' values must either be present or absent together.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#VARIATIONSDATATOGETHER";
                                };
                                "variationsShouldBeObject": {
                                    "value": "Invalid `variations` format. The config's `variations` key's value, if provided, should only be an object.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#VARIATIONSSHOULDBEOBJECT";
                                };
                                "dataShouldBeObject": {
                                    "value": "Invalid `data` format. The config's `data` key's value, if provided, should only be an object.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#DATASHOULDBEOBJECT";
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
                                "VARIATIONS_DATA_PRE_INVALID": {
                                    "value": "\"The config's `variations` and `data` keys' values could not pass pre-validation from zod together.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#VARIATIONS_DATA_PRE_INVALID";
                                };
                                "VARIATIONS_DATA_DISCRIMINATED": {
                                    "value": "\"The config's `variations` and `data` keys' values must either be present or absent together.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#VARIATIONS_DATA_DISCRIMINATED";
                                };
                                "VARIATIONS_NOT_OBJECT": {
                                    "value": "\"Invalid `variations` format. The config's `variations` key's value, if provided, should only be an object.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#VARIATIONS_NOT_OBJECT";
                                };
                                "DATA_NOT_OBJECT": {
                                    "value": "\"Invalid `data` format. The config's `data` key's value, if provided, should only be an object.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#DATA_NOT_OBJECT";
                                };
                            };
                        };
                        "config": {
                            "messages": {
                                "configEffectivelyEmpty": {
                                    "value": "The config is effectively empty. Please provide either the `variations` key coupled with the `data` key, or the `libraries` key, \u2013 or both \u2013 in order to get started.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#CONFIGEFFECTIVELYEMPTY";
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
                                "lintConfigImportsCouldntZod": {
                                    "value": "The config's `lintConfigImports` key's value could not pass validation from zod.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LINTCONFIGIMPORTSCOULDNTZOD";
                                };
                                "lintConfigImportsShouldBeBoolean": {
                                    "value": "The config's `lintConfigImports` key's value, if provided, should only be a boolean.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LINTCONFIGIMPORTSSHOULDBEBOOLEAN";
                                };
                                "myIgnoresOnlyCouldntZod": {
                                    "value": "The config's `myIgnoresOnly` key's value could not pass validation from zod.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#MYIGNORESONLYCOULDNTZOD";
                                };
                                "myIgnoresOnlyShouldBeBoolean": {
                                    "value": "The config's `myIgnoresOnly` key's value, if provided, should only be a boolean.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#MYIGNORESONLYSHOULDBEBOOLEAN";
                                };
                                "ignoresCouldntZod": {
                                    "value": "The config's `ignores` key's value could not pass validation from zod.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#IGNORESCOULDNTZOD";
                                };
                                "ignoresShouldBeArray": {
                                    "value": "The config's `ignores` key's value, if provided, should only be an array, whether empty or nonempty.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#IGNORESSHOULDBEARRAY";
                                };
                                "ignoresValuesMustBeStrings": {
                                    "value": "The config's `ignores` key's array's values must only be strings.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#IGNORESVALUESMUSTBESTRINGS";
                                };
                                "ignoresValuesMustBeUnique": {
                                    "value": "The config's `ignores` key's array cannot contain duplicate values.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#IGNORESVALUESMUSTBEUNIQUE";
                                };
                                "composedVariablesExclusivesCouldntZod": {
                                    "value": "The config's `composedVariablesExclusives` key's value could not pass validation from zod.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#COMPOSEDVARIABLESEXCLUSIVESCOULDNTZOD";
                                };
                                "composedVariablesExclusivesShouldBeArray": {
                                    "value": "The config's `composedVariablesExclusives` key's value, if provided, should only be an array, whether empty or nonempty.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#COMPOSEDVARIABLESEXCLUSIVESSHOULDBEARRAY";
                                };
                                "composedVariablesExclusivesValuesMustBeStrings": {
                                    "value": "The config's `composedVariablesExclusives` key's array's values must only be strings.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#COMPOSEDVARIABLESEXCLUSIVESVALUESMUSTBESTRINGS";
                                };
                                "composedVariablesExclusivesValuesMustBeUnique": {
                                    "value": "The config's `composedVariablesExclusives` key's array cannot contain duplicate values.";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#COMPOSEDVARIABLESEXCLUSIVESVALUESMUSTBEUNIQUE";
                                };
                            };
                            "statuses": {
                                "CONFIG_EMPTY": {
                                    "value": "\"The config is effectively empty. Please provide either the `variations` key coupled with the `data` key, or the `libraries` key, \u2013 or both \u2013 in order to get started.\"";
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
                                "LINTCONFIGIMPORTS_INVALID": {
                                    "value": "\"The config's `lintConfigImports` key's value could not pass validation from zod.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LINTCONFIGIMPORTS_INVALID";
                                };
                                "LINTCONFIGIMPORTS_NOT_BOOLEAN": {
                                    "value": "\"The config's `lintConfigImports` key's value, if provided, should only be a boolean.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LINTCONFIGIMPORTS_NOT_BOOLEAN";
                                };
                                "MYIGNORESONLY_INVALID": {
                                    "value": "\"The config's `myIgnoresOnly` key's value could not pass validation from zod.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#MYIGNORESONLY_INVALID";
                                };
                                "MYIGNORESONLY_NOT_BOOLEAN": {
                                    "value": "\"The config's `myIgnoresOnly` key's value, if provided, should only be a boolean.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#MYIGNORESONLY_NOT_BOOLEAN";
                                };
                                "IGNORES_INVALID": {
                                    "value": "\"The config's `ignores` key's value could not pass validation from zod.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#IGNORES_INVALID";
                                };
                                "IGNORES_NOT_ARRAY": {
                                    "value": "\"The config's `ignores` key's value, if provided, should only be an array, whether empty or nonempty.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#IGNORES_NOT_ARRAY";
                                };
                                "IGNORES_VALUES_NOT_STRINGS": {
                                    "value": "\"The config's `ignores` key's array's values must only be strings.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#IGNORES_VALUES_NOT_STRINGS";
                                };
                                "IGNORES_VALUES_NOT_UNIQUE": {
                                    "value": "\"The config's `ignores` key's array cannot contain duplicate values.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#IGNORES_VALUES_NOT_UNIQUE";
                                };
                                "COMPOSEDVARIABLESEXCLUSIVES_INVALID": {
                                    "value": "\"The config's `composedVariablesExclusives` key's value could not pass validation from zod.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#COMPOSEDVARIABLESEXCLUSIVES_INVALID";
                                };
                                "COMPOSEDVARIABLESEXCLUSIVES_NOT_ARRAY": {
                                    "value": "\"The config's `composedVariablesExclusives` key's value, if provided, should only be an array, whether empty or nonempty.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#COMPOSEDVARIABLESEXCLUSIVES_NOT_ARRAY";
                                };
                                "COMPOSEDVARIABLESEXCLUSIVES_VALUES_NOT_STRINGS": {
                                    "value": "\"The config's `composedVariablesExclusives` key's array's values must only be strings.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#COMPOSEDVARIABLESEXCLUSIVES_VALUES_NOT_STRINGS";
                                };
                                "COMPOSEDVARIABLESEXCLUSIVES_VALUES_NOT_UNIQUE": {
                                    "value": "\"The config's `composedVariablesExclusives` key's array cannot contain duplicate values.\"";
                                    "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#COMPOSEDVARIABLESEXCLUSIVES_VALUES_NOT_UNIQUE";
                                };
                            };
                        };
                        "errorNotStandardized": {
                            "value": "The error encountered is not standardized.";
                            "key": "EN#TSDOC#SRC#CONSTS#ERRORS#ERRORNOTSTANDARDIZED";
                        };
                        "ERROR_NOT_STANDARDIZED": {
                            "value": "\"The error encountered is not standardized.\"";
                            "key": "EN#TSDOC#SRC#CONSTS#ERRORS#ERROR_NOT_STANDARDIZED";
                        };
                    };
                };
            };
        };
        "forComposedVariables": {
            "variables": {
                "resolveConfig": {
                    "value": "resolveConfig";
                    "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIG";
                };
            };
            "arguments": {};
        };
        "composedVariablesExclusives": {
            "variables": {
                "variations": {
                    "value": "variations";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#VARIATIONS";
                };
                "data": {
                    "value": "data";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#DATA";
                };
                "union": {
                    "value": "union";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#UNION";
                };
                "both": {
                    "value": "both";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#BOTH";
                };
                "neither": {
                    "value": "neither";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#NEITHER";
                };
                "libraries": {
                    "value": "libraries";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES";
                };
                "lintConfigImports": {
                    "value": "lintConfigImports";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LINTCONFIGIMPORTS";
                };
                "myIgnoresOnly": {
                    "value": "myIgnoresOnly";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#MYIGNORESONLY";
                };
                "ignores": {
                    "value": "ignores";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#IGNORES";
                };
                "composedVariablesExclusives": {
                    "value": "composedVariablesExclusives";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#COMPOSEDVARIABLESEXCLUSIVES";
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
            "cannotContainDuplicate": {
                "value": "cannot contain duplicate values";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#CANNOTCONTAINDUPLICATE";
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
