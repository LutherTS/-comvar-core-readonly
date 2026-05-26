export const librariesStaticErrorMessages_errorStatuses: Readonly<{
    "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).": "LIBRARIES_NOT_RECORD";
    "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.": "LIBRARIES_NOT_SUBKEY_CONFORM";
    "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).": "LIBRARIES_RECORD_NOT_RECORDS";
    "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.": "LIBRARIES_NOT_KEY_CONFORM";
    "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).": "LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS";
    "The config `libraries` key's record's records' values cannot be empty strings.": "LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS";
}>;
export const configStaticErrorMessages_errorStatuses: Readonly<{
    "The config's `libraries` key's value could not pass validation from zod.": "LIBRARIES_INVALID";
    "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).": "LIBRARIES_NOT_RECORD";
    "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.": "LIBRARIES_NOT_SUBKEY_CONFORM";
    "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).": "LIBRARIES_RECORD_NOT_RECORDS";
    "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.": "LIBRARIES_NOT_KEY_CONFORM";
    "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).": "LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS";
    "The config `libraries` key's record's records' values cannot be empty strings.": "LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS";
}>;
