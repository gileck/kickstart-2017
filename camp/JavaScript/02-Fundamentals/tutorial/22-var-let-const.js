/* eslint no-var: 0, prefer-const: 0 */

function varScope(num) {
  var prefix = 'Function scoped.';
  const consty = 'Block scoped, and cannot be changed.';

  if (num > 10) {
    let letty = 'Block scoped, and can be changed.';

    prefix = prefix + '\nlet: ' + letty;
  }

  return `var: ${prefix}\nconst: ${consty}`;
}

console.log(varScope(20));

/**
 * var vs. let vs. const
 * Template Strings
 *
 * Best Practices:
 * no-var
 * prefer-const
 */
