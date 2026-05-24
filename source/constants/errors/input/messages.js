import { errorsInputMessages } from "../../../comment-variables/index.js";

/* input error messages */

export const configPathSupposedToBeString =
  errorsInputMessages.configPathSupposedToBeString.value;
export const configPathSupposedToBeDotJs =
  errorsInputMessages.configPathSupposedToBeDotJs.value;
export const noConfigFileFound = errorsInputMessages.noConfigFileFound.value;
export const configModuleCouldntResolve =
  errorsInputMessages.configModuleCouldntResolve.value;

/* messages for static errors - config (pre) */

export const configCouldntPreZod =
  errorsInputMessages.configCouldntPreZod.value;

// zod static error messages

export const configMustBeObject = errorsInputMessages.configMustBeObject.value;

// static error messages arrays and sets

export const configPreStaticErrorMessages = /** @type {const} */ ([
  configMustBeObject,
]);
export const configStaticPreErrorMessagesSet = new Set(
  configPreStaticErrorMessages,
);

// /* messages for static errors - variations data (pre) */

// export const variationsDataCouldntPreZod =
//   errorsInputMessages.variationsDataCouldntPreZod.value;

// // zod static error messages

// export const variationsDataTogether =
//   errorsInputMessages.variationsDataTogether.value;
// export const variationsShouldBeObject =
//   errorsInputMessages.variationsShouldBeObject.value;
// export const dataShouldBeObject = errorsInputMessages.dataShouldBeObject.value;

// // static error messages arrays and sets

// export const variationsDataPreStaticErrorMessages = /** @type {const} */ ([
//   variationsDataTogether,
//   variationsShouldBeObject,
//   dataShouldBeObject,
// ]);
// export const variationsDataPreStaticErrorMessagesSet = new Set(
//   variationsDataPreStaticErrorMessages,
// );
