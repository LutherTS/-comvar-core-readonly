/* data */

export const frData = Object.freeze({
  tsDoc: Object.freeze({
    src: Object.freeze({
      lib: Object.freeze({
        consts: Object.freeze({
          public: Object.freeze({
            _COMMENT:
              "Le préfixe absolu de tout et chaque substitut $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT */,
            subKeySeparator:
              "Le caractère singulier qui sépare les segments (ou sous-clés) de clés et substituts Comment Variables." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUBKEYSEPARATOR / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUBKEYSEPARATOR */,
            defaultConfigFileName:
              "Le nom de fichier considéré par défaut au dossier racine du projet pour la config de $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#DEFAULTCONFIGFILENAME / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#DEFAULTCONFIGFILENAME */,
            packageJsonFileName:
              "Particulièrement utile à surveiller afin de rafraîchir la config Comment Variables pour ses `libraries` à chaque fois que le `package.json` du projet est mis à jour (ignorant créations et suppressions)." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#PACKAGEJSONFILENAME / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#PACKAGEJSONFILENAME */,
          }),
          regexes: Object.freeze({
            public: Object.freeze({
              configDataKey:
                "S'assure que les clés `data` de la config ne doivent inclure que des lettres minuscules (`Ll`), lettres majuscules (`Lu`), d'autres lettres (`Lo`), de la ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`), des chiffres (`N`) et des caractères d'espacement (`s`)." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY */,
              configDataSubkey:
                "Pareil que `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#CONFIGDATAKEYREGEX` mais sans les lettres minuscules (`Ll`) remplacées par des lettres majuscules (`Lu`), et sans ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`) et caractères d'espacement (`s`) remplacés par des tirets bas (`_`)." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY */,
              flattenedConfigDataKeyLocal:
                "Pareil que `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#CONFIGDATASUBKEYREGEX` mais avec le caractère `#` qui connecte les sous-clés les unes aux autres, s'assurant que la chaîne de caractères comprenne au moins deux sous-clés puisque la première attribuée au variant est obligatoire, tout en s'assurant que le caractère `#` ne termine pas la chaîne de caractères. Capture aussi tant la sous-clé préfixe que le reste de la clé aplatie." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYLOCAL / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYLOCAL */,
              flattenedConfigDataKeyGlobal:
                "Pareil que `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAKEYLOCALREGEX` mais global, tout en enlevant le `^` du début et le `$` de la fin." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYGLOBAL / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEYGLOBAL */,
              flattenedConfigDataPlaceholderLocal:
                "Pareil que `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAKEYLOCALREGEX` mais prenant en compte le préfixe `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#_COMMENT` et son caractère `#`, avec un groupe de capture unique pour la clé aplatie tout entière." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL */,
              flattenedConfigDataPlaceholderGlobal:
                "Pareil que `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#FLATTENEDCONFIGDATAPLACEHOLDERLOCALREGEX` mais global, tout en enlevant le `^` du début et le `$` de la fin." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL */,
            }),
          }),
        }),
        defs: Object.freeze({
          utils: Object.freeze({
            public: Object.freeze({
              resolveConfigReadonly:
                "Vérifie, valide et résout de façon initiale le chemin de la config pour en obtenir la config et en fournir les données de sa clé `libraries`." /* variations: $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY / core: $COMMENT#FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#RESOLVECONFIGREADONLY */,
            }),
          }),
        }),
        params: Object.freeze({
          utils: Object.freeze({
            public: Object.freeze({
              configPath:
                "Le chemin absolu de la config qu'importe la manière dont il est fourni. Cela dit, $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES requiert désormais par défaut un fichier `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#DEFAULTCONFIGFILENAME` au dossier racine du projet en cours, tant pour sa `@comvar/cli` que pour ses extensions pour VS Code." /* variations: $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH / core: $COMMENT#FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH */,
            }),
          }),
        }),
        returns: Object.freeze({
          utils: Object.freeze({
            public: Object.freeze({
              resolveConfigReadonly:
                "La config et ses données `libraries`, ou leur absence pour ces dernières via `null`, dans un objet `{success: true}` à ses clés `config` et `libraries` respectivement, avec aussi `libraryVariationKeys_libraryVariationValues` : une version aplatie et non-nulle de `libraries` pour en faciliter l'usage. Inclut aussi le `code` et le `SourceCode` ESLint du fichier de config, avec les listes de ses fichiers JSON importés pour en observer les changements. En cas d'erreur, un objet `{success: false}` est retourné à la place de sorte que les erreurs puissent être réutilisées de façons adéquates dans l'outil ligne de commande et dans les extensions pour VS Code." /* variations: $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY / core: $COMMENT#FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY */,
            }),
          }),
        }),
      }),
    }),
  }),
  forComposedVariables: Object.freeze({
    variables: Object.freeze({}),
    arguments: Object.freeze({}),
  }),
  composedVariablesExclusives: Object.freeze({
    variables: Object.freeze({}),
    arguments: Object.freeze({}),
  }),
});

/* manual composedVariablesExclusives */

export const frComposedVariablesExclusives = /** @type {const} */ ([]);
