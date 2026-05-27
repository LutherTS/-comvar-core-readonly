import { commentVariablesData as errorHandlingCommentVariablesData } from "@lutherts/error-handling";

const libraries = {
  [errorHandlingCommentVariablesData.libraryKey]:
    errorHandlingCommentVariablesData.libraryVariations.EN,
};

const enData = { comment: "comment" };
const frData = { comment: "commentaire" };

const data = { en: enData, fr: frData };

const variations = {
  variants: { en: { label: "English" }, fr: { label: "français" } },
  variant: "en",
  referenceData: enData,
  referenceVariant: "en",
  allowIncompleteVariations: true,
  public: ["en"],
  docCommandData: { declarationDir: "declarations", rootDir: "." },
};

const config = { data, variations, libraries };

export default config;
