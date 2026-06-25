export declare const validateInput: (configPath: string) => Promise<{
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. Config module could not get resolved. (Most probably due to fatal syntax.)";
        readonly status: "CONFIG_MODULE_NOT_RESOLVED";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. No config file found for Comment Variables.";
        readonly status: "CONFIG_FILE_NOT_FOUND";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. `configPath` is supposed to be a string.";
        readonly status: "CONFIGPATH_NOT_STRING";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. `configPath` is supposed to be strictly JavaScript (`.js` only).";
        readonly status: "CONFIGPATH_NOT_DOT_JS";
    }];
} | {
    readonly success: true;
    readonly configModule: {
        default: unknown;
    };
}>;
