/* eslint no-else-return: 0 */

function max(a, b) {
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}

console.log(max(4, 6));

/**
 * Same, but better. Why?
 * - Reusable for other purposes
 * - Easier to reason about
 * - Easier to test
 *
 * Best Practice:
 * - no-else-return
 * - Ternary operator, if it's a short line
 */
