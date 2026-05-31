export declare const errors: {
    input: {
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
    config: {
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
export declare const errorsInputMessages: {
    configPathSupposedToBeString: {
        "value": "`configPath` is supposed to be a string.";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBESTRING";
    };
    configPathSupposedToBeDotJs: {
        "value": "`configPath` is supposed to be strictly JavaScript (`.js` only).";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEDOTJS";
    };
    noConfigFileFound: {
        "value": "No config file found for Comment Variables.";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#NOCONFIGFILEFOUND";
    };
    configModuleCouldntResolve: {
        "value": "Config module could not get resolved. (Most probably due to fatal syntax.)";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMODULECOULDNTRESOLVE";
    };
    configCouldntPreZod: {
        "value": "The config could not pass pre-validation from zod.";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGCOULDNTPREZOD";
    };
    configMustBeObject: {
        "value": "Invalid config format. The config must only be default-exported as an object.";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMUSTBEOBJECT";
    };
};
export declare const errorsConfigMessages: {
    librariesCouldntZod: {
        "value": "The config's `libraries` key's value could not pass validation from zod.";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESCOULDNTZOD";
    };
    librariesShouldBeRecord: {
        "value": "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESSHOULDBERECORD";
    };
    librariesMustSubKey: {
        "value": "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTSUBKEY";
    };
    librariesRecordMustBeRecords: {
        "value": "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDMUSTBERECORDS";
    };
    librariesMustKey: {
        "value": "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTKEY";
    };
    librariesValuesMustBeStrings: {
        "value": "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESMUSTBESTRINGS";
    };
    librariesValuesCannotBeEmptyStrings: {
        "value": "The config `libraries` key's record's records' values cannot be empty strings.";
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESCANNOTBEEMPTYSTRINGS";
    };
};
export declare const forComposedVariables: {
    variables: {
        "resolveConfigReadonly": {
            "value": "resolveConfigReadonly";
            "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY";
        };
        "defaultConfigFileName": {
            "value": "defaultConfigFileName";
            "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#DEFAULTCONFIGFILENAME";
        };
        "packageJsonFileName": {
            "value": "packageJsonFileName";
            "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#PACKAGEJSONFILENAME";
        };
    };
    arguments: {};
};
export declare const composedVariablesExclusives: {
    variables: {
        "_COMMENT": {
            "value": "$COMMENT";
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#_COMMENT";
        };
        "defaultConfigFileName": {
            "value": "comments.config.js";
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#DEFAULTCONFIGFILENAME";
        };
        "packageJsonFileName": {
            "value": "package.json";
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PACKAGEJSONFILENAME";
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
    arguments: {
        "configPath": {
            "value": "configPath";
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CONFIGPATH";
        };
    };
    commentVariables: {
        "value": "Comment Variables";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES";
    };
    dotJs: {
        "value": ".js";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#DOTJS";
    };
    couldntPreZod: {
        "value": "could not pass pre-validation from zod";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTPREZOD";
    };
    couldntZod: {
        "value": "could not pass validation from zod";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTZOD";
    };
    _theConfig: {
        "value": "The config";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG";
    };
    keyValue: {
        "value": "key's value";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#KEYVALUE";
    };
    ifProvided: {
        "value": "if provided";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#IFPROVIDED";
    };
    shouldOnlyBe: {
        "value": "should only be";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SHOULDONLYBE";
    };
    mustOnlyBe: {
        "value": "must only be";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#MUSTONLYBE";
    };
    _asserts: {
        "value": "Asserts";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS";
    };
    whenItShould: {
        "value": "when it should";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD";
    };
    thatShouldFailure: {
        "value": "that should be encountered during failure";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#THATSHOULDFAILURE";
    };
    _void: {
        "value": "Void";
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID";
    };
};
