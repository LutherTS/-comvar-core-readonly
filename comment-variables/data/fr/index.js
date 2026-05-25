/* data */

export const frData = Object.freeze({
  tsDoc: Object.freeze({
    src: Object.freeze({
      lib: Object.freeze({
        consts: Object.freeze({
          public: Object.freeze({
            _COMMENT:
              "Le préfixe absolu de tout et chaque substitut $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#COMMENTVARIABLES." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#PUBLIC#_COMMENT */,
          }),
          regexes: Object.freeze({
            public: Object.freeze({
              configDataKey:
                "S'assure que les clés `data` de la config ne doivent inclure que des lettres minuscules (`Ll`), lettres majuscules (`Lu`), d'autres lettres (`Lo`), de la ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`), des chiffres (`N`) et des caractères d'espacement (`s`)." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATAKEY */,
              configDataSubKey:
                "Pareil que `configDataKeyRegex` mais sans les lettres minuscules (`Ll`), et sans ponctuation tiret (`Pd`), ponctuation connecteur (`Pc`) et caractères d'espacement (`s`) remplacés par des tirets bas (`_`)." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#CONFIGDATASUBKEY */,
              flattenedConfigDataKey:
                "Pareil que `configDataSubKeyRegex` mais sans le caractère `#` qui connecte les sous-clés les unes aux autres." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAKEY */,
              flattenedConfigDataPlaceholderLocal:
                "Pareil que `flattenedConfigDataKeyRegex` mais prenant en compte le préfixe `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#_COMMENT` et son caractère `#`, empêchant la succession de deux `#` consécutifs, tout en enlevant les `^` et `$` du début et de la fin du groupe de capture." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERLOCAL */,
              flattenedConfigDataPlaceholderGlobal:
                "Pareil que `flattenedConfigDataPlaceholderLocalRegex` mais global." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#REGEXES#PUBLIC#FLATTENEDCONFIGDATAPLACEHOLDERGLOBAL */,
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
                "Le chemin absolu de la config qu'importe la manière dont il est fourni : que ce soit par défaut avec `comments.config.js` dans le dossier courant, à partir d'un chemin relatif passer via le drapeau `--config` par l'outil ligne de commande, ou d'un chemin relatif entré à la clé `config` de l'extension dans `.vscode/settings.json` pour VS Code." /* variations: $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH / core: $COMMENT#FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CONFIGPATH */,
            }),
          }),
        }),
        returns: Object.freeze({
          utils: Object.freeze({
            public: Object.freeze({
              resolveConfigReadonly:
                "La config et ses données `libraries`, ou leur absence pour ces dernières via `null`, dans un objet `{success: true}` à ses clés `config` and `libraries` respectivement. En cas d'erreur, un objet `{success: false}` est retourné à la place de sorte que les erreurs puissent être réutilisées de façons adéquates dans l'outil ligne de commande et dans l'extension pour VS Code." /* variations: $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY / core: $COMMENT#FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#RESOLVECONFIGREADONLY */,
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
