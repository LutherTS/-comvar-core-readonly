export const configPreStaticErrorMessages_errorStatuses: Readonly<{
    "Invalid config format. The config must only be default-exported as an object.": "CONFIG_NOT_OBJECT";
}>;
export const inputStaticErrorMessages_errorStatuses: Readonly<{
    "`configPath` is supposed to be a string.": "CONFIGPATH_NOT_STRING";
    "`configPath` is supposed to be strictly JavaScript (`.js` only).": "CONFIGPATH_NOT_DOT_JS";
    "No config file found for Comment Variables.": "CONFIG_FILE_NOT_FOUND";
    "Config module could not get resolved. (Most probably due to fatal syntax.)": "CONFIG_MODULE_NOT_RESOLVED";
    "The config could not pass pre-validation from zod.": "CONFIG_PRE_INVALID";
    "Invalid config format. The config must only be default-exported as an object.": "CONFIG_NOT_OBJECT";
}>;
