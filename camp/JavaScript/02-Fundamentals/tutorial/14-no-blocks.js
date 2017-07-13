/* eslint curly: 0 */

function printMax(a, b) {
  if (a > b)
    console.log(a);
  else
    console.log(b);
}

printMax(4, 6);

/**
 * Dreaded missing curly
 *
 * Best Practice:
 * Always add curly braces to avoid implicit blocks
 */
