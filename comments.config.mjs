/** @private */
export const resolvedConfigData = /** @type {{"en":{"tsDoc":{"src":{"consts":{"errors":{"input":{"messages":{"configPathSupposedToBeString":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBESTRING","value":"`configPath` is supposed to be a string."},"configPathSupposedToBeDotJs":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEDOTJS","value":"`configPath` is supposed to be strictly JavaScript (`.js` only)."},"configPathSupposedToBeAbsolute":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEABSOLUTE","value":"`configPath` is supposed to be absolute."},"noConfigFileFound":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#NOCONFIGFILEFOUND","value":"No config file found for Comment Variables."},"configPathSupposedToBeFile":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEFILE","value":"`configPath` is supposed to be a file."},"configModuleCouldntResolve":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMODULECOULDNTRESOLVE","value":"Config module could not get resolved. (Most probably due to fatal syntax.)"},"configCouldntPreZod":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGCOULDNTPREZOD","value":"The config could not pass pre-validation from zod."},"configMustBeObject":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMUSTBEOBJECT","value":"Invalid config format. The config must only be default-exported as an object."}},"statuses":{"CONFIGPATH_NOT_STRING":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_STRING","value":"\"`configPath` is supposed to be a string.\""},"CONFIGPATH_NOT_DOT_JS":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_DOT_JS","value":"\"`configPath` is supposed to be strictly JavaScript (`.js` only).\""},"CONFIGPATH_NOT_ABSOLUTE":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_ABSOLUTE","value":"\"`configPath` is supposed to be absolute.\""},"CONFIG_FILE_NOT_FOUND":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_FILE_NOT_FOUND","value":"\"No config file found for Comment Variables.\""},"CONFIGPATH_NOT_FILE":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_FILE","value":"\"`configPath` is supposed to be a file.\""},"CONFIG_MODULE_NOT_RESOLVED":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_MODULE_NOT_RESOLVED","value":"\"Config module could not get resolved. (Most probably due to fatal syntax.)\""},"CONFIG_PRE_INVALID":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_PRE_INVALID","value":"\"The config could not pass pre-validation from zod.\""},"CONFIG_NOT_OBJECT":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_NOT_OBJECT","value":"\"Invalid config format. The config must only be default-exported as an object.\""}}},"config":{"messages":{"librariesCouldntZod":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESCOULDNTZOD","value":"The config's `libraries` key's value could not pass validation from zod."},"librariesShouldBeRecord":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESSHOULDBERECORD","value":"The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations)."},"librariesMustNotBeEmpty":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTNOTBEEMPTY","value":"The config `libraries` key's record must not be empty."},"librariesMustSubKey":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTSUBKEY","value":"The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data."},"librariesRecordMustBeRecords":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDMUSTBERECORDS","value":"The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values)."},"librariesRecordsMustNotBeEmpty":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDSMUSTNOTBEEMPTY","value":"The config `libraries` key's record's records must not be empty."},"librariesMustKey":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTKEY","value":"The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data."},"librariesValuesMustBeStrings":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESMUSTBESTRINGS","value":"The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with)."},"librariesValuesCannotBeEmptyStrings":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESCANNOTBEEMPTYSTRINGS","value":"The config `libraries` key's record's records' values cannot be empty strings."},"librariesValuesCannotBeEmptyTrimmed":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESCANNOTBEEMPTYTRIMMED","value":"The config `libraries` key's record's records' values cannot be empty trimmed."}},"statuses":{"LIBRARIES_INVALID":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_INVALID","value":"\"The config's `libraries` key's value could not pass validation from zod.\""},"LIBRARIES_NOT_RECORD":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_RECORD","value":"\"The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).\""},"LIBRARIES_EMPTY":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_EMPTY","value":"\"The config `libraries` key's record must not be empty.\""},"LIBRARIES_NOT_SUBKEY_CONFORM":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_SUBKEY_CONFORM","value":"\"The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.\""},"LIBRARIES_RECORD_NOT_RECORDS":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_NOT_RECORDS","value":"\"The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).\""},"LIBRARIES_RECORDS_EMPTY":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORDS_EMPTY","value":"\"The config `libraries` key's record's records must not be empty.\""},"LIBRARIES_NOT_KEY_CONFORM":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_KEY_CONFORM","value":"\"The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.\""},"LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS","value":"\"The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).\""},"LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS","value":"\"The config `libraries` key's record's records' values cannot be empty strings.\""},"LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_TRIMMED":{"key":"EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_TRIMMED","value":"\"The config `libraries` key's record's records' values cannot be empty trimmed.\""}}}}},"lib":{"consts":{"public":{"_COMMENT":{"key":"EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT","value":"The absolute prefix for every single Comment Variables placeholder."},"subKeySeparator":{"key":"EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUBKEYSEPARATOR","value":"The singular character that separates segments (or subkeys) in Comment Variables keys and placeholders."},"defaultConfigFileName":{"key":"EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#DEFAULTCONFIGFILENAME","value":"The default file name considered at the project's root directory for the Comment Variables config."},"packageJsonFileName":{"key":"EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#PACKAGEJSONFILENAME","value":"Useful to watch in order to refresh the Comment Variables config for `libraries` every time the project's `package.json` is updated (but not when it's created or deleted)."}},"MODULE_TO_LOAD":{"key":"EN#TSDOC#SRC#LIB#CONSTS#MODULE_TO_LOAD","value":"The shared `env` between `fresh-import-a.js` and `fresh-import-b.js` for the `freshImport` utility."},"regexes":{"public":{"configDataKey":{"key":"EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY","value":"Ensures config `data` keys should only include lowercase letters (`Ll`), uppercase letters (`Lu`), other letters (`Lo`), dash punctuation (`Pd`), connector punctuation (`Pc`), numbers (`N`), and whitespaces (`s`)."},"configDataSubkey":{"key":"EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY","value":"Same as `configDataKeyRegex` but without lowercase letters (`Ll`) replaced by uppercase letters (`Lu`), and without dash punctuation (`Pd`), connector punctuation (`Pc`), and whitespaces (`s`) replaced by underscores (`_`)."},"flattenedConfigDataKeyLocal":{"key":"EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYLOCAL","value":"Same as `configDataSubkeyRegex` but with the `#` character that links each subkey together, ensuring the string is made of at least two subkeys since the first variant subkey is mandatory, while ensuring that the `#` character does not end the string. Also captures both the subkey prefix and the rest of the flattened key."},"flattenedConfigDataKeyGlobal":{"key":"EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYGLOBAL","value":"Same as `flattenedConfigDataKeyLocalRegex` but globally, while removing the starting `^` and the ending `$`."},"flattenedConfigDataPlaceholderLocal":{"key":"EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL","value":"Same as `flattenedConfigDataKeyLocalRegex` but taking the prefix `$COMMENT` and its `#` into consideration, with a single capture group for the entire flattened key."},"flattenedConfigDataPlaceholderGlobal":{"key":"EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL","value":"Same as `flattenedConfigDataPlaceholderLocalRegex` but globally, while removing the starting `^` and the ending `$`."}}}},"defs":{"utils":{"public":{"resolveConfigReadonly":{"key":"EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY","value":"Initially verifies, validates and resolves the config path to retrieve the config and provide its `libraries` key data."}},"freshImport":{"key":"EN#TSDOC#SRC#LIB#DEFS#UTILS#FRESHIMPORT","value":"Guarantees a fresh import of the config, negating the innate (and hidden) cache of the dynamic `import` utility."}}},"params":{"utils":{"public":{"configPath":{"key":"EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH","value":"The absolute path of the config regardless of the manner through which it is provided. That being said, Comment Variables now requires a default `comments.config.js` at the project's root directory for both its `@comvar/cli` and its extensions for VS Code."}},"moduleUrl":{"key":"EN#TSDOC#SRC#LIB#PARAMS#UTILS#MODULEURL","value":"The absolute path of the module to import."}}},"returns":{"utils":{"public":{"resolveConfigReadonly":{"key":"EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY","value":"The config and its `libraries` data, or lack thereof for the latter via `null`, inside a `{success: true}` object, at its `config` and `libraries` keys respectively, along with the flattened, non-null `libraryVariationKeys_libraryVariationValues` data for easier consumption. Also includes the `code` and the ESLint `SourceCode` of the config file, along with its lists of imported JSON files to be watched for changes. In case of an error, a `{success: false}` object is returned instead so that errors can be reused adequately on the CLI and in the extensions for VS Code."}},"freshImport":{"key":"EN#TSDOC#SRC#LIB#RETURNS#UTILS#FRESHIMPORT","value":"Either an object with its `default` property sets to the default export of the module successfully loaded, or `null` when an error arises. (Debugging is currently manual by looking at the error being caught in the child process.)"}}}},"tests":{"defs":{"utils":{"assertFailureWithMessage":{"key":"EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE","value":"Asserts that `resolveConfigReadonly` fails when it should, with only the message of the error specified since its status inferred."},"assertErrorWithMessage":{"key":"EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTERRORWITHMESSAGE","value":"Asserts that `resolveConfigReadonly` fails when it should, with only the message of the error specified since its status inferred. Here, the error message is prefixed with `\"ERROR. \"` to specify a leading user-facing error."},"assertFailureWithStatus":{"key":"EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHSTATUS","value":"Asserts that `resolveConfigReadonly` fails when it should, with only the status of the error specified since the message is dynamic."}}},"params":{"utils":{"resolveConfigReadonlyResults":{"key":"EN#TSDOC#SRC#TESTS#PARAMS#UTILS#RESOLVECONFIGREADONLYRESULTS","value":"The results of the `resolveConfigReadonly` instance called in the test, whose success or failure is evaluated via its `success` key's boolean value."},"expectedMessage":{"key":"EN#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE","value":"The expected message of the error that should be encountered during failure, from which the status can be inferred."},"expectedStatus":{"key":"EN#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDSTATUS","value":"The expected status of the error that should be encountered during failure."}}},"returns":{"utils":{"assertFailureWithMessage":{"key":"EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE","value":"Void."},"assertErrorWithMessage":{"key":"EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTERRORWITHMESSAGE","value":"Void."},"assertFailureWithStatus":{"key":"EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHSTATUS","value":"Void."}}}}}},"forComposedVariables":{"variables":{"resolveConfigReadonly":{"key":"EN#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY","value":"resolveConfigReadonly"},"defaultConfigFileName":{"key":"EN#FORCOMPOSEDVARIABLES#VARIABLES#DEFAULTCONFIGFILENAME","value":"defaultConfigFileName"},"packageJsonFileName":{"key":"EN#FORCOMPOSEDVARIABLES#VARIABLES#PACKAGEJSONFILENAME","value":"packageJsonFileName"}},"arguments":{}},"composedVariablesExclusives":{"variables":{"_COMMENT":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#_COMMENT","value":"$COMMENT"},"subkeySeparator":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SUBKEYSEPARATOR","value":"subkeySeparator"},"defaultConfigFileName":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#DEFAULTCONFIGFILENAME","value":"comments.config.js"},"packageJsonFileName":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PACKAGEJSONFILENAME","value":"package.json"},"libraries":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES","value":"libraries"},"sameReference":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SAMEREFERENCE","value":"sameReference"},"configDataKeyRegex":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#CONFIGDATAKEYREGEX","value":"configDataKeyRegex"},"configDataSubkeyRegex":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#CONFIGDATASUBKEYREGEX","value":"configDataSubkeyRegex"},"flattenedConfigDataKeyLocalRegex":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAKEYLOCALREGEX","value":"flattenedConfigDataKeyLocalRegex"},"flattenedConfigDataKeyGlobalRegex":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAKEYGLOBALREGEX","value":"flattenedConfigDataKeyGlobalRegex"},"flattenedConfigDataPlaceholderLocalRegex":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAPLACEHOLDERLOCALREGEX","value":"flattenedConfigDataPlaceholderLocalRegex"},"flattenedConfigDataPlaceholderGlobalRegex":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAPLACEHOLDERGLOBALREGEX","value":"flattenedConfigDataPlaceholderGlobalRegex"}},"arguments":{"configPath":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CONFIGPATH","value":"configPath"}},"commentVariables":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES","value":"Comment Variables"},"dotJs":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#DOTJS","value":".js"},"couldntPreZod":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTPREZOD","value":"could not pass pre-validation from zod"},"couldntZod":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTZOD","value":"could not pass validation from zod"},"_theConfig":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG","value":"The config"},"keyValue":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#KEYVALUE","value":"key's value"},"ifProvided":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#IFPROVIDED","value":"if provided"},"shouldOnlyBe":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#SHOULDONLYBE","value":"should only be"},"mustOnlyBe":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#MUSTONLYBE","value":"must only be"},"_asserts":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS","value":"Asserts"},"whenItShould":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD","value":"when it should"},"thatShouldFailure":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#THATSHOULDFAILURE","value":"that should be encountered during failure"},"_void":{"key":"EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID","value":"Void"}}},"fr":{"tsDoc":{"src":{"lib":{"consts":{"public":{"_COMMENT":{"key":"FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT","value":"Le préfixe absolu de tout et chaque substitut Comment Variables."},"subKeySeparator":{"key":"FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUBKEYSEPARATOR","value":"Le caractère singulier qui sépare les segments (ou sous-clés) de clés et substituts Comment Variables."},"defaultConfigFileName":{"key":"FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#DEFAULTCONFIGFILENAME","value":"Le nom de fichier considéré par défaut au dossier racine du projet pour la config de Comment Variables."},"packageJsonFileName":{"key":"FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#PACKAGEJSONFILENAME","value":"Particulièrement utile à surveiller afin de rafraîchir la config Comment Variables pour ses `libraries` à chaque fois que le `package.json` du projet est mis à jour (ignorant créations et suppressions)."}},"regexes":{"public":{"configDataKey":{"key":"FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY","value":"S'assure que les clés `data` de la config ne doivent inclure que des lettres minuscules (`Ll`), lettres majuscules (`Lu`), d'autres lettres (`Lo`), de la ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`), des chiffres (`N`) et des caractères d'espacement (`s`)."},"configDataSubkey":{"key":"FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY","value":"Pareil que `configDataKeyRegex` mais sans les lettres minuscules (`Ll`) remplacées par des lettres majuscules (`Lu`), et sans ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`) et caractères d'espacement (`s`) remplacés par des tirets bas (`_`)."},"flattenedConfigDataKeyLocal":{"key":"FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYLOCAL","value":"Pareil que `configDataSubkeyRegex` mais avec le caractère `#` qui connecte les sous-clés les unes aux autres, s'assurant que la chaîne de caractères comprenne au moins deux sous-clés puisque la première attribuée au variant est obligatoire, tout en s'assurant que le caractère `#` ne termine pas la chaîne de caractères. Capture aussi tant la sous-clé préfixe que le reste de la clé aplatie."},"flattenedConfigDataKeyGlobal":{"key":"FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYGLOBAL","value":"Pareil que `flattenedConfigDataKeyLocalRegex` mais global, tout en enlevant le `^` du début et le `$` de la fin."},"flattenedConfigDataPlaceholderLocal":{"key":"FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL","value":"Pareil que `flattenedConfigDataKeyLocalRegex` mais prenant en compte le préfixe `$COMMENT` et son caractère `#`, avec un groupe de capture unique pour la clé aplatie tout entière."},"flattenedConfigDataPlaceholderGlobal":{"key":"FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL","value":"Pareil que `flattenedConfigDataPlaceholderLocalRegex` mais global, tout en enlevant le `^` du début et le `$` de la fin."}}}},"defs":{"utils":{"public":{"resolveConfigReadonly":{"key":"FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY","value":"Vérifie, valide et résout de façon initiale le chemin de la config pour en obtenir la config et en fournir les données de sa clé `libraries`."}}}},"params":{"utils":{"public":{"configPath":{"key":"FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH","value":"Le chemin absolu de la config qu'importe la manière dont il est fourni. Cela dit, Comment Variables requiert désormais par défaut un fichier `comments.config.js` au dossier racine du projet en cours, tant pour sa `@comvar/cli` que pour ses extensions pour VS Code."}}}},"returns":{"utils":{"public":{"resolveConfigReadonly":{"key":"FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY","value":"La config et ses données `libraries`, ou leur absence pour ces dernières via `null`, dans un objet `{success: true}` à ses clés `config` et `libraries` respectivement, avec aussi `libraryVariationKeys_libraryVariationValues` : une version aplatie et non-nulle de `libraries` pour en faciliter l'usage. Inclut aussi le `code` et le `SourceCode` ESLint du fichier de config, avec les listes de ses fichiers JSON importés pour en observer les changements. En cas d'erreur, un objet `{success: false}` est retourné à la place de sorte que les erreurs puissent être réutilisées de façons adéquates dans l'outil ligne de commande et dans les extensions pour VS Code."}}}}}}},"forComposedVariables":{"variables":{},"arguments":{}},"composedVariablesExclusives":{"variables":{},"arguments":{}}}}} */ ({
  "en": {
    "tsDoc": {
      "src": {
        "consts": {
          "errors": {
            "input": {
              "messages": {
                "configPathSupposedToBeString": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBESTRING",
                  "value": "`configPath` is supposed to be a string."
                },
                "configPathSupposedToBeDotJs": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEDOTJS",
                  "value": "`configPath` is supposed to be strictly JavaScript (`.js` only)."
                },
                "configPathSupposedToBeAbsolute": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEABSOLUTE",
                  "value": "`configPath` is supposed to be absolute."
                },
                "noConfigFileFound": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#NOCONFIGFILEFOUND",
                  "value": "No config file found for Comment Variables."
                },
                "configPathSupposedToBeFile": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGPATHSUPPOSEDTOBEFILE",
                  "value": "`configPath` is supposed to be a file."
                },
                "configModuleCouldntResolve": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMODULECOULDNTRESOLVE",
                  "value": "Config module could not get resolved. (Most probably due to fatal syntax.)"
                },
                "configCouldntPreZod": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGCOULDNTPREZOD",
                  "value": "The config could not pass pre-validation from zod."
                },
                "configMustBeObject": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#MESSAGES#CONFIGMUSTBEOBJECT",
                  "value": "Invalid config format. The config must only be default-exported as an object."
                }
              },
              "statuses": {
                "CONFIGPATH_NOT_STRING": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_STRING",
                  "value": "\"`configPath` is supposed to be a string.\""
                },
                "CONFIGPATH_NOT_DOT_JS": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_DOT_JS",
                  "value": "\"`configPath` is supposed to be strictly JavaScript (`.js` only).\""
                },
                "CONFIGPATH_NOT_ABSOLUTE": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_ABSOLUTE",
                  "value": "\"`configPath` is supposed to be absolute.\""
                },
                "CONFIG_FILE_NOT_FOUND": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_FILE_NOT_FOUND",
                  "value": "\"No config file found for Comment Variables.\""
                },
                "CONFIGPATH_NOT_FILE": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIGPATH_NOT_FILE",
                  "value": "\"`configPath` is supposed to be a file.\""
                },
                "CONFIG_MODULE_NOT_RESOLVED": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_MODULE_NOT_RESOLVED",
                  "value": "\"Config module could not get resolved. (Most probably due to fatal syntax.)\""
                },
                "CONFIG_PRE_INVALID": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_PRE_INVALID",
                  "value": "\"The config could not pass pre-validation from zod.\""
                },
                "CONFIG_NOT_OBJECT": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#INPUT#STATUSES#CONFIG_NOT_OBJECT",
                  "value": "\"Invalid config format. The config must only be default-exported as an object.\""
                }
              }
            },
            "config": {
              "messages": {
                "librariesCouldntZod": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESCOULDNTZOD",
                  "value": "The config's `libraries` key's value could not pass validation from zod."
                },
                "librariesShouldBeRecord": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESSHOULDBERECORD",
                  "value": "The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations)."
                },
                "librariesMustNotBeEmpty": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTNOTBEEMPTY",
                  "value": "The config `libraries` key's record must not be empty."
                },
                "librariesMustSubKey": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTSUBKEY",
                  "value": "The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data."
                },
                "librariesRecordMustBeRecords": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDMUSTBERECORDS",
                  "value": "The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values)."
                },
                "librariesRecordsMustNotBeEmpty": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESRECORDSMUSTNOTBEEMPTY",
                  "value": "The config `libraries` key's record's records must not be empty."
                },
                "librariesMustKey": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESMUSTKEY",
                  "value": "The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data."
                },
                "librariesValuesMustBeStrings": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESMUSTBESTRINGS",
                  "value": "The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with)."
                },
                "librariesValuesCannotBeEmptyStrings": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESCANNOTBEEMPTYSTRINGS",
                  "value": "The config `libraries` key's record's records' values cannot be empty strings."
                },
                "librariesValuesCannotBeEmptyTrimmed": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#MESSAGES#LIBRARIESVALUESCANNOTBEEMPTYTRIMMED",
                  "value": "The config `libraries` key's record's records' values cannot be empty trimmed."
                }
              },
              "statuses": {
                "LIBRARIES_INVALID": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_INVALID",
                  "value": "\"The config's `libraries` key's value could not pass validation from zod.\""
                },
                "LIBRARIES_NOT_RECORD": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_RECORD",
                  "value": "\"The config `libraries` key's value, if provided, should only be a record (representing library keys paired with their selected variations).\""
                },
                "LIBRARIES_EMPTY": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_EMPTY",
                  "value": "\"The config `libraries` key's record must not be empty.\""
                },
                "LIBRARIES_NOT_SUBKEY_CONFORM": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_SUBKEY_CONFORM",
                  "value": "\"The config `libraries` key's record has one or more keys that do not conform with the Comment Variables subkey (`COMMENTVARIABLES_SUBKEY`) format. This cannot happen when using a `libraryKey` obtained from a conform external library's resolved public Comment Variables data.\""
                },
                "LIBRARIES_RECORD_NOT_RECORDS": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_NOT_RECORDS",
                  "value": "\"The config `libraries` key's record's values must only be records as well (representing Comment Variables keys from external libraries paired with their actual values).\""
                },
                "LIBRARIES_RECORDS_EMPTY": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORDS_EMPTY",
                  "value": "\"The config `libraries` key's record's records must not be empty.\""
                },
                "LIBRARIES_NOT_KEY_CONFORM": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_NOT_KEY_CONFORM",
                  "value": "\"The config `libraries` key's record's records' keys include one or more keys that do not conform with the Comment Variables key (`COMMENTVARIABLES#KEY`) format. This cannot happen when using a library variation `libraryVariations.<normalizedVariant>` obtained from a conform external library's resolved public Comment Variables data.\""
                },
                "LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_NOT_STRINGS",
                  "value": "\"The config `libraries` key's record's records' values must only be strings (representing the actual values of the external libraries' Comment Variables keys these strings are paired with).\""
                },
                "LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_STRINGS",
                  "value": "\"The config `libraries` key's record's records' values cannot be empty strings.\""
                },
                "LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_TRIMMED": {
                  "key": "EN#TSDOC#SRC#CONSTS#ERRORS#CONFIG#STATUSES#LIBRARIES_RECORD_RECORDS_VALUES_EMPTY_TRIMMED",
                  "value": "\"The config `libraries` key's record's records' values cannot be empty trimmed.\""
                }
              }
            }
          }
        },
        "lib": {
          "consts": {
            "public": {
              "_COMMENT": {
                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT",
                "value": "The absolute prefix for every single Comment Variables placeholder."
              },
              "subKeySeparator": {
                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUBKEYSEPARATOR",
                "value": "The singular character that separates segments (or subkeys) in Comment Variables keys and placeholders."
              },
              "defaultConfigFileName": {
                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#DEFAULTCONFIGFILENAME",
                "value": "The default file name considered at the project's root directory for the Comment Variables config."
              },
              "packageJsonFileName": {
                "key": "EN#TSDOC#SRC#LIB#CONSTS#PUBLIC#PACKAGEJSONFILENAME",
                "value": "Useful to watch in order to refresh the Comment Variables config for `libraries` every time the project's `package.json` is updated (but not when it's created or deleted)."
              }
            },
            "MODULE_TO_LOAD": {
              "key": "EN#TSDOC#SRC#LIB#CONSTS#MODULE_TO_LOAD",
              "value": "The shared `env` between `fresh-import-a.js` and `fresh-import-b.js` for the `freshImport` utility."
            },
            "regexes": {
              "public": {
                "configDataKey": {
                  "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY",
                  "value": "Ensures config `data` keys should only include lowercase letters (`Ll`), uppercase letters (`Lu`), other letters (`Lo`), dash punctuation (`Pd`), connector punctuation (`Pc`), numbers (`N`), and whitespaces (`s`)."
                },
                "configDataSubkey": {
                  "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY",
                  "value": "Same as `configDataKeyRegex` but without lowercase letters (`Ll`) replaced by uppercase letters (`Lu`), and without dash punctuation (`Pd`), connector punctuation (`Pc`), and whitespaces (`s`) replaced by underscores (`_`)."
                },
                "flattenedConfigDataKeyLocal": {
                  "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYLOCAL",
                  "value": "Same as `configDataSubkeyRegex` but with the `#` character that links each subkey together, ensuring the string is made of at least two subkeys since the first variant subkey is mandatory, while ensuring that the `#` character does not end the string. Also captures both the subkey prefix and the rest of the flattened key."
                },
                "flattenedConfigDataKeyGlobal": {
                  "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYGLOBAL",
                  "value": "Same as `flattenedConfigDataKeyLocalRegex` but globally, while removing the starting `^` and the ending `$`."
                },
                "flattenedConfigDataPlaceholderLocal": {
                  "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL",
                  "value": "Same as `flattenedConfigDataKeyLocalRegex` but taking the prefix `$COMMENT` and its `#` into consideration, with a single capture group for the entire flattened key."
                },
                "flattenedConfigDataPlaceholderGlobal": {
                  "key": "EN#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL",
                  "value": "Same as `flattenedConfigDataPlaceholderLocalRegex` but globally, while removing the starting `^` and the ending `$`."
                }
              }
            }
          },
          "defs": {
            "utils": {
              "public": {
                "resolveConfigReadonly": {
                  "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY",
                  "value": "Initially verifies, validates and resolves the config path to retrieve the config and provide its `libraries` key data."
                }
              },
              "freshImport": {
                "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#FRESHIMPORT",
                "value": "Guarantees a fresh import of the config, negating the innate (and hidden) cache of the dynamic `import` utility."
              }
            }
          },
          "params": {
            "utils": {
              "public": {
                "configPath": {
                  "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH",
                  "value": "The absolute path of the config regardless of the manner through which it is provided. That being said, Comment Variables now requires a default `comments.config.js` at the project's root directory for both its `@comvar/cli` and its extensions for VS Code."
                }
              },
              "moduleUrl": {
                "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#MODULEURL",
                "value": "The absolute path of the module to import."
              }
            }
          },
          "returns": {
            "utils": {
              "public": {
                "resolveConfigReadonly": {
                  "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY",
                  "value": "The config and its `libraries` data, or lack thereof for the latter via `null`, inside a `{success: true}` object, at its `config` and `libraries` keys respectively, along with the flattened, non-null `libraryVariationKeys_libraryVariationValues` data for easier consumption. Also includes the `code` and the ESLint `SourceCode` of the config file, along with its lists of imported JSON files to be watched for changes. In case of an error, a `{success: false}` object is returned instead so that errors can be reused adequately on the CLI and in the extensions for VS Code."
                }
              },
              "freshImport": {
                "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#FRESHIMPORT",
                "value": "Either an object with its `default` property sets to the default export of the module successfully loaded, or `null` when an error arises. (Debugging is currently manual by looking at the error being caught in the child process.)"
              }
            }
          }
        },
        "tests": {
          "defs": {
            "utils": {
              "assertFailureWithMessage": {
                "key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE",
                "value": "Asserts that `resolveConfigReadonly` fails when it should, with only the message of the error specified since its status inferred."
              },
              "assertErrorWithMessage": {
                "key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTERRORWITHMESSAGE",
                "value": "Asserts that `resolveConfigReadonly` fails when it should, with only the message of the error specified since its status inferred. Here, the error message is prefixed with `\"ERROR. \"` to specify a leading user-facing error."
              },
              "assertFailureWithStatus": {
                "key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHSTATUS",
                "value": "Asserts that `resolveConfigReadonly` fails when it should, with only the status of the error specified since the message is dynamic."
              }
            }
          },
          "params": {
            "utils": {
              "resolveConfigReadonlyResults": {
                "key": "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#RESOLVECONFIGREADONLYRESULTS",
                "value": "The results of the `resolveConfigReadonly` instance called in the test, whose success or failure is evaluated via its `success` key's boolean value."
              },
              "expectedMessage": {
                "key": "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE",
                "value": "The expected message of the error that should be encountered during failure, from which the status can be inferred."
              },
              "expectedStatus": {
                "key": "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDSTATUS",
                "value": "The expected status of the error that should be encountered during failure."
              }
            }
          },
          "returns": {
            "utils": {
              "assertFailureWithMessage": {
                "key": "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE",
                "value": "Void."
              },
              "assertErrorWithMessage": {
                "key": "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTERRORWITHMESSAGE",
                "value": "Void."
              },
              "assertFailureWithStatus": {
                "key": "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHSTATUS",
                "value": "Void."
              }
            }
          }
        }
      }
    },
    "forComposedVariables": {
      "variables": {
        "resolveConfigReadonly": {
          "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#RESOLVECONFIGREADONLY",
          "value": "resolveConfigReadonly"
        },
        "defaultConfigFileName": {
          "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#DEFAULTCONFIGFILENAME",
          "value": "defaultConfigFileName"
        },
        "packageJsonFileName": {
          "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#PACKAGEJSONFILENAME",
          "value": "packageJsonFileName"
        }
      },
      "arguments": {}
    },
    "composedVariablesExclusives": {
      "variables": {
        "_COMMENT": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#_COMMENT",
          "value": "$COMMENT"
        },
        "subkeySeparator": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SUBKEYSEPARATOR",
          "value": "subkeySeparator"
        },
        "defaultConfigFileName": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#DEFAULTCONFIGFILENAME",
          "value": "comments.config.js"
        },
        "packageJsonFileName": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PACKAGEJSONFILENAME",
          "value": "package.json"
        },
        "libraries": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#LIBRARIES",
          "value": "libraries"
        },
        "sameReference": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#SAMEREFERENCE",
          "value": "sameReference"
        },
        "configDataKeyRegex": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#CONFIGDATAKEYREGEX",
          "value": "configDataKeyRegex"
        },
        "configDataSubkeyRegex": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#CONFIGDATASUBKEYREGEX",
          "value": "configDataSubkeyRegex"
        },
        "flattenedConfigDataKeyLocalRegex": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAKEYLOCALREGEX",
          "value": "flattenedConfigDataKeyLocalRegex"
        },
        "flattenedConfigDataKeyGlobalRegex": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAKEYGLOBALREGEX",
          "value": "flattenedConfigDataKeyGlobalRegex"
        },
        "flattenedConfigDataPlaceholderLocalRegex": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAPLACEHOLDERLOCALREGEX",
          "value": "flattenedConfigDataPlaceholderLocalRegex"
        },
        "flattenedConfigDataPlaceholderGlobalRegex": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAPLACEHOLDERGLOBALREGEX",
          "value": "flattenedConfigDataPlaceholderGlobalRegex"
        }
      },
      "arguments": {
        "configPath": {
          "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CONFIGPATH",
          "value": "configPath"
        }
      },
      "commentVariables": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES",
        "value": "Comment Variables"
      },
      "dotJs": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#DOTJS",
        "value": ".js"
      },
      "couldntPreZod": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTPREZOD",
        "value": "could not pass pre-validation from zod"
      },
      "couldntZod": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#COULDNTZOD",
        "value": "could not pass validation from zod"
      },
      "_theConfig": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_THECONFIG",
        "value": "The config"
      },
      "keyValue": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#KEYVALUE",
        "value": "key's value"
      },
      "ifProvided": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#IFPROVIDED",
        "value": "if provided"
      },
      "shouldOnlyBe": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SHOULDONLYBE",
        "value": "should only be"
      },
      "mustOnlyBe": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#MUSTONLYBE",
        "value": "must only be"
      },
      "_asserts": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS",
        "value": "Asserts"
      },
      "whenItShould": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD",
        "value": "when it should"
      },
      "thatShouldFailure": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#THATSHOULDFAILURE",
        "value": "that should be encountered during failure"
      },
      "_void": {
        "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID",
        "value": "Void"
      }
    }
  },
  "fr": {
    "tsDoc": {
      "src": {
        "lib": {
          "consts": {
            "public": {
              "_COMMENT": {
                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT",
                "value": "Le préfixe absolu de tout et chaque substitut Comment Variables."
              },
              "subKeySeparator": {
                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUBKEYSEPARATOR",
                "value": "Le caractère singulier qui sépare les segments (ou sous-clés) de clés et substituts Comment Variables."
              },
              "defaultConfigFileName": {
                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#DEFAULTCONFIGFILENAME",
                "value": "Le nom de fichier considéré par défaut au dossier racine du projet pour la config de Comment Variables."
              },
              "packageJsonFileName": {
                "key": "FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#PACKAGEJSONFILENAME",
                "value": "Particulièrement utile à surveiller afin de rafraîchir la config Comment Variables pour ses `libraries` à chaque fois que le `package.json` du projet est mis à jour (ignorant créations et suppressions)."
              }
            },
            "regexes": {
              "public": {
                "configDataKey": {
                  "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY",
                  "value": "S'assure que les clés `data` de la config ne doivent inclure que des lettres minuscules (`Ll`), lettres majuscules (`Lu`), d'autres lettres (`Lo`), de la ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`), des chiffres (`N`) et des caractères d'espacement (`s`)."
                },
                "configDataSubkey": {
                  "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY",
                  "value": "Pareil que `configDataKeyRegex` mais sans les lettres minuscules (`Ll`) remplacées par des lettres majuscules (`Lu`), et sans ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`) et caractères d'espacement (`s`) remplacés par des tirets bas (`_`)."
                },
                "flattenedConfigDataKeyLocal": {
                  "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYLOCAL",
                  "value": "Pareil que `configDataSubkeyRegex` mais avec le caractère `#` qui connecte les sous-clés les unes aux autres, s'assurant que la chaîne de caractères comprenne au moins deux sous-clés puisque la première attribuée au variant est obligatoire, tout en s'assurant que le caractère `#` ne termine pas la chaîne de caractères. Capture aussi tant la sous-clé préfixe que le reste de la clé aplatie."
                },
                "flattenedConfigDataKeyGlobal": {
                  "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYGLOBAL",
                  "value": "Pareil que `flattenedConfigDataKeyLocalRegex` mais global, tout en enlevant le `^` du début et le `$` de la fin."
                },
                "flattenedConfigDataPlaceholderLocal": {
                  "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL",
                  "value": "Pareil que `flattenedConfigDataKeyLocalRegex` mais prenant en compte le préfixe `$COMMENT` et son caractère `#`, avec un groupe de capture unique pour la clé aplatie tout entière."
                },
                "flattenedConfigDataPlaceholderGlobal": {
                  "key": "FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL",
                  "value": "Pareil que `flattenedConfigDataPlaceholderLocalRegex` mais global, tout en enlevant le `^` du début et le `$` de la fin."
                }
              }
            }
          },
          "defs": {
            "utils": {
              "public": {
                "resolveConfigReadonly": {
                  "key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY",
                  "value": "Vérifie, valide et résout de façon initiale le chemin de la config pour en obtenir la config et en fournir les données de sa clé `libraries`."
                }
              }
            }
          },
          "params": {
            "utils": {
              "public": {
                "configPath": {
                  "key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH",
                  "value": "Le chemin absolu de la config qu'importe la manière dont il est fourni. Cela dit, Comment Variables requiert désormais par défaut un fichier `comments.config.js` au dossier racine du projet en cours, tant pour sa `@comvar/cli` que pour ses extensions pour VS Code."
                }
              }
            }
          },
          "returns": {
            "utils": {
              "public": {
                "resolveConfigReadonly": {
                  "key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY",
                  "value": "La config et ses données `libraries`, ou leur absence pour ces dernières via `null`, dans un objet `{success: true}` à ses clés `config` et `libraries` respectivement, avec aussi `libraryVariationKeys_libraryVariationValues` : une version aplatie et non-nulle de `libraries` pour en faciliter l'usage. Inclut aussi le `code` et le `SourceCode` ESLint du fichier de config, avec les listes de ses fichiers JSON importés pour en observer les changements. En cas d'erreur, un objet `{success: false}` est retourné à la place de sorte que les erreurs puissent être réutilisées de façons adéquates dans l'outil ligne de commande et dans les extensions pour VS Code."
                }
              }
            }
          }
        }
      }
    },
    "forComposedVariables": {
      "variables": {},
      "arguments": {}
    },
    "composedVariablesExclusives": {
      "variables": {},
      "arguments": {}
    }
  }
})