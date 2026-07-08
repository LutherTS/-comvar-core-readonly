import { resolvedPublicData as coreReadonlyCommentVariablesData } from "../../../../../comments.config.public.mjs";

import { commentVariablesData as errorHandlingCommentVariablesData } from "@lutherts/error-handling";
import errorHandlingCommentVariablesDataIntl from "../../../../../comment-variables/miscellaneous/librairies/error-handling.intl.json" with { type: "json" };

const libraries = {
  [coreReadonlyCommentVariablesData.libraryKey]:
    coreReadonlyCommentVariablesData.libraryVariations.EN,

  [errorHandlingCommentVariablesData.libraryKey]:
    errorHandlingCommentVariablesDataIntl.EN,
};

const config = { libraries };

export default config;
