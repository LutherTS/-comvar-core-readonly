export declare const errors: {
    input: {
        "messages": {
            "configPathSupposedToBeString": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBESTRING";
                "value": "`configPath` is supposed to be a string.";
            };
            "configPathSupposedToBeDotJs": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEDOTJS";
                "value": "`configPath` is supposed to be strictly JavaScript (`.js` only).";
            };
            "noConfigFileFound": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#NOCONFIGFILEFOUND";
                "value": "No config file found for Comment Variables.";
            };
            "configModuleCouldntResolve": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMODULECOULDNTRESOLVE";
                "value": "Config module could not get resolved. (Most probably due to fatal syntax.)";
            };
            "configCouldntPreZod": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGCOULDNTPREZOD";
                "value": "The config could not pass pre-validation from zod.";
            };
            "configMustBeObject": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMUSTBEOBJECT";
                "value": "Invalid config format. The config must only be default-exported as an object.";
            };
        };
        "statuses": {
            "CONFIGPATH_NOT_STRING": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_STRING";
                "value": "\"`configPath` is supposed to be a string.\"";
            };
            "CONFIGPATH_NOT_DOT_JS": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_DOT_JS";
                "value": "\"`configPath` is supposed to be strictly JavaScript (`.js` only).\"";
            };
            "CONFIG_FILE_NOT_FOUND": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_FILE_NOT_FOUND";
                "value": "\"No config file found for Comment Variables.\"";
            };
            "CONFIG_MODULE_NOT_RESOLVED": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_MODULE_NOT_RESOLVED";
                "value": "\"Config module could not get resolved. (Most probably due to fatal syntax.)\"";
            };
            "CONFIG_PRE_INVALID": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_PRE_INVALID";
                "value": "\"The config could not pass pre-validation from zod.\"";
            };
            "CONFIG_NOT_OBJECT": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_NOT_OBJECT";
                "value": "\"Invalid config format. The config must only be default-exported as an object.\"";
            };
        };
    };
    config: {
        "messages": {
            "librariesCouldntZod": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESCOULDNTZOD";
                "value": "The config's `libraries` key's value could not pass validation from zod.";
            };
            "librariesShouldBeRecord": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESSHOULDBERECORD";
                "value": "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).";
            };
            "librariesMustSubKey": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTSUBKEY";
                "value": "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.";
            };
            "librariesRecordMustBeRecords": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDMUSTBERECORDS";
                "value": "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).";
            };
            "librariesMustKey": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTKEY";
                "value": "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.";
            };
            "librariesValuesMustBeStrings": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESMUSTBESTRINGS";
                "value": "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).";
            };
            "librariesValuesCannotBeEmptyStrings": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESCANNOTBEEMPTYSTRINGS";
                "value": "The config `libraries` key's record's records' values cannot be empty strings.";
            };
        };
        "statuses": {
            "LIBRARIES_INVALID": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_INVALID";
                "value": "\"The config's `libraries` key's value could not pass validation from zod.\"";
            };
            "LIBRARIES_NOT_RECORD": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_RECORD";
                "value": "\"The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).\"";
            };
            "LIBRARIES_NOT_SUBKEY_CONFORM": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_SUBKEY_CONFORM";
                "value": "\"The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.\"";
            };
            "LIBRARIES_RECORD_NOT_RECORDS": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_NOT_RECORDS";
                "value": "\"The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).\"";
            };
            "LIBRARIES_NOT_KEY_CONFORM": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_KEY_CONFORM";
                "value": "\"The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.\"";
            };
            "LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS";
                "value": "\"The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).\"";
            };
            "LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS": {
                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS";
                "value": "\"The config `libraries` key's record's records' values cannot be empty strings.\"";
            };
        };
    };
};
export declare const errorsInputMessages: {
    configPathSupposedToBeString: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBESTRING";
        "value": "`configPath` is supposed to be a string.";
    };
    configPathSupposedToBeDotJs: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEDOTJS";
        "value": "`configPath` is supposed to be strictly JavaScript (`.js` only).";
    };
    noConfigFileFound: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#NOCONFIGFILEFOUND";
        "value": "No config file found for Comment Variables.";
    };
    configModuleCouldntResolve: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMODULECOULDNTRESOLVE";
        "value": "Config module could not get resolved. (Most probably due to fatal syntax.)";
    };
    configCouldntPreZod: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGCOULDNTPREZOD";
        "value": "The config could not pass pre-validation from zod.";
    };
    configMustBeObject: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMUSTBEOBJECT";
        "value": "Invalid config format. The config must only be default-exported as an object.";
    };
};
export declare const errorsConfigMessages: {
    librariesCouldntZod: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESCOULDNTZOD";
        "value": "The config's `libraries` key's value could not pass validation from zod.";
    };
    librariesShouldBeRecord: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESSHOULDBERECORD";
        "value": "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).";
    };
    librariesMustSubKey: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTSUBKEY";
        "value": "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.";
    };
    librariesRecordMustBeRecords: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDMUSTBERECORDS";
        "value": "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).";
    };
    librariesMustKey: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTKEY";
        "value": "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.";
    };
    librariesValuesMustBeStrings: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESMUSTBESTRINGS";
        "value": "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).";
    };
    librariesValuesCannotBeEmptyStrings: {
        "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESCANNOTBEEMPTYSTRINGS";
        "value": "The config `libraries` key's record's records' values cannot be empty strings.";
    };
};
export declare const forComposedVariables: {
    variables: {
        "resolveConfigReadonly": {
            "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY";
            "value": "resolveConfigReadonly";
        };
        "defaultConfigFileName": {
            "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#DEFAULTCONFIGFILENAME";
            "value": "defaultConfigFileName";
        };
        "packageJsonFileName": {
            "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#PACKAGEJSONFILENAME";
            "value": "packageJsonFileName";
        };
    };
    arguments: {};
};
export declare const composedVariablesExclusives: {
    variables: {
        "_COMMENT": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#_COMMENT";
            "value": "$COMMENT";
        };
        "defaultConfigFileName": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#DEFAULTCONFIGFILENAME";
            "value": "comments.config.js";
        };
        "packageJsonFileName": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PACKAGEJSONFILENAME";
            "value": "package.json";
        };
        "libraries": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES";
            "value": "libraries";
        };
        "sameReference": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SAMEREFERENCE";
            "value": "sameReference";
        };
        "configDataKeyRegex": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#CONFIGDATAKEYREGEX";
            "value": "configDataKeyRegex";
        };
        "configDataSubKeyRegex": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#CONFIGDATASUBKEYREGEX";
            "value": "configDataSubKeyRegex";
        };
        "flattenedConfigDataKeyLocalRegex": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAKEYLOCALREGEX";
            "value": "flattenedConfigDataKeyLocalRegex";
        };
        "flattenedConfigDataKeyGlobalRegex": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAKEYGLOBALREGEX";
            "value": "flattenedConfigDataKeyGlobalRegex";
        };
        "flattenedConfigDataPlaceholderLocalRegex": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAPLACEHOLDERLOCALREGEX";
            "value": "flattenedConfigDataPlaceholderLocalRegex";
        };
        "flattenedConfigDataPlaceholderGlobalRegex": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAPLACEHOLDERGLOBALREGEX";
            "value": "flattenedConfigDataPlaceholderGlobalRegex";
        };
    };
    arguments: {
        "configPath": {
            "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CONFIGPATH";
            "value": "configPath";
        };
    };
    commentVariables: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES";
        "value": "Comment Variables";
    };
    dotJs: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#DOTJS";
        "value": ".js";
    };
    couldntPreZod: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTPREZOD";
        "value": "could not pass pre-validation from zod";
    };
    couldntZod: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTZOD";
        "value": "could not pass validation from zod";
    };
    _theConfig: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG";
        "value": "The config";
    };
    keyValue: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#KEYVALUE";
        "value": "key's value";
    };
    ifProvided: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#IFPROVIDED";
        "value": "if provided";
    };
    shouldOnlyBe: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SHOULDONLYBE";
        "value": "should only be";
    };
    mustOnlyBe: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#MUSTONLYBE";
        "value": "must only be";
    };
    _asserts: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS";
        "value": "Asserts";
    };
    whenItShould: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD";
        "value": "when it should";
    };
    thatShouldFailure: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#THATSHOULDFAILURE";
        "value": "that should be encountered during failure";
    };
    _void: {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID";
        "value": "Void";
    };
};
