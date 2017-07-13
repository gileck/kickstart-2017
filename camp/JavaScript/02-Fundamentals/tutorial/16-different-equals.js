/* eslint eqeqeq: 0 */

function assert(booleanTest) {
  if (booleanTest) {
    console.log('true that!');
  }
  else {
    console.log('false...');
  }
}

assert(7 == 7);
assert('77' == 77);
assert('77' === 77); // false
assert(7 != 8);
assert('78' != 78); // false
assert('78' !== 78);

/**
 * === vs. ==
 * != vs. !==
 */
