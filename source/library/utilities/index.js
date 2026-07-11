/* trimStringWithLimit */

const ellipsis = "...";

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT
 *
 * @param string - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STRING
 * @param limit - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#LIMIT
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#TRIMSTRINGWITHLIMIT
 *
 * @public
 */
export const trimStringWithLimit = (
  /** @type {string} */ string,
  /** @type {number} */ limit,
) =>
  string.length > limit
    ? string.slice(0, limit - ellipsis.length) + ellipsis
    : string;
