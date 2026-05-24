/* input error statuses */

/** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_STRING */
export const CONFIGPATH_NOT_STRING = "CONFIGPATH_NOT_STRING";
/** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_DOT_JS */
export const CONFIGPATH_NOT_DOT_JS = "CONFIGPATH_NOT_DOT_JS";
/** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_FILE_NOT_FOUND */
export const CONFIG_FILE_NOT_FOUND = "CONFIG_FILE_NOT_FOUND";
/** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_MODULE_NOT_RESOLVED */
export const CONFIG_MODULE_NOT_RESOLVED = "CONFIG_MODULE_NOT_RESOLVED";

/* statuses for static errors - config (pre) */

/** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_PRE_INVALID */
export const CONFIG_PRE_INVALID = "CONFIG_PRE_INVALID";

// zod static error statuses

/** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_NOT_OBJECT */
export const CONFIG_NOT_OBJECT = "CONFIG_NOT_OBJECT";

// static error statuses arrays and sets

export const configStaticErrorStatuses = /** @type {const} */ ([
  CONFIG_NOT_OBJECT,
]);
export const configStaticErrorStatusesSet = new Set(configStaticErrorStatuses);

// /* messages for static errors - variations data (pre) */

// export const VARIATIONS_DATA_PRE_INVALID = "VARIATIONS_DATA_PRE_INVALID";

// // zod static error statuses

// /** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#VARIATIONS_DATA_DISCRIMINATED */
// export const VARIATIONS_DATA_DISCRIMINATED = "VARIATIONS_DATA_DISCRIMINATED";
// /** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#VARIATIONS_NOT_OBJECT */
// export const VARIATIONS_NOT_OBJECT = "VARIATIONS_NOT_OBJECT";
// /** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#DATA_NOT_OBJECT */
// export const DATA_NOT_OBJECT = "DATA_NOT_OBJECT";

// // static error statuses arrays and sets

// export const variationsDataPreStaticErrorStatuses = /** @type {const} */ ([
//   VARIATIONS_DATA_DISCRIMINATED,
//   VARIATIONS_NOT_OBJECT,
//   DATA_NOT_OBJECT,
// ]);
// export const variationsDataPreStaticErrorStatusesSet = new Set(
//   variationsDataPreStaticErrorStatuses,
// );
