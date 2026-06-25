export type ConfigModule = import("../../typedefs/index.js").ConfigModule;
export type ConfigPreStaticErrorMessage = import("../../typedefs/index.js").ConfigPreStaticErrorMessage;
export declare const preValidateConfig: (configModule: ConfigModule) => {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "ERROR. The config could not pass pre-validation from zod.";
        readonly status: "CONFIG_PRE_INVALID";
    }, ...({
        readonly type: "error";
        readonly message: "Invalid config format. The config must only be default-exported as an object.";
        readonly status: "CONFIG_NOT_OBJECT";
    } | {
        readonly type: "error";
        readonly message: "The error encountered is not standardized.";
        readonly status: "ERROR_NOT_STANDARDIZED";
    })[]];
} | {
    readonly success: true;
    readonly config: Record<string, unknown>;
};
