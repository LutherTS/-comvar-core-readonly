import { resolvedPublicData as coreReadonlyCommentVariablesData } from "../../../../../comments.config.public.mjs";
import coreReadonlyCommentVariablesDataIntl from "../../../../../comment-variables/miscellaneous/librairies/core-readonly.intl.json" with { type: "json" }; // self-made translations via LLM from official

import { commentVariablesData as errorHandlingCommentVariablesData } from "@lutherts/error-handling";

const libraries = {
  [coreReadonlyCommentVariablesData.libraryKey]:
    coreReadonlyCommentVariablesDataIntl.EN,

  [errorHandlingCommentVariablesData.libraryKey]:
    errorHandlingCommentVariablesData.libraryVariations.EN,
};

const config = { libraries };

export default config;
