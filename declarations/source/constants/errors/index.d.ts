export const allStaticErrorMessages_errorStatuses: Readonly<{
    "`configPath` is supposed to be a string.": "CONFIGPATH_NOT_STRING";
    "`configPath` is supposed to be strictly JavaScript (`.js` only).": "CONFIGPATH_NOT_DOT_JS";
    "No config file found for Comment Variables.": "CONFIG_FILE_NOT_FOUND";
    "Config module could not get resolved. (Most probably due to fatal syntax.)": "CONFIG_MODULE_NOT_RESOLVED";
    "The config could not pass pre-validation from zod.": "CONFIG_PRE_INVALID";
    "Invalid config format. The config must only be default-exported as an object.": "CONFIG_NOT_OBJECT";
    "The config's `libraries` key's value could not pass validation from zod.": "LIBRARIES_INVALID";
    "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).": "LIBRARIES_NOT_RECORD";
    "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.": "LIBRARIES_NOT_SUBKEY_CONFORM";
    "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).": "LIBRARIES_RECORD_NOT_RECORDS";
    "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.": "LIBRARIES_NOT_KEY_CONFORM";
    "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).": "LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS";
    "The error encountered is not standardized.": "ERROR_NOT_STANDARDIZED";
}>;
import { errorNotStandardized } from "@lutherts/error-handling";
import { ERROR_NOT_STANDARDIZED } from "@lutherts/error-handling";
export { errorNotStandardized, ERROR_NOT_STANDARDIZED };
