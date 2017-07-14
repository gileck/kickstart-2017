/* eslint prefer-arrow-callback: 0 */

const cities = ['Tel Aviv', 'Jerusalem', 'Haifa'];

// Old school way
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

for (const i in cities) {
  console.log(cities[i]);
}

// New, no support in IE at all (even 11):
// https://kangax.github.io/compat-table/es6/#test-for..of_loops
for (const city of cities) {
  console.log(city);
}

// Functional, great support
cities.forEach(function (city) {
  console.log(city);
});

/**
 * for loop (old school)
 *   - for (;;)
 *   - let in for loops
 * for-in
 * for-of
 *
 * Best Practice:
 * forEach
*/
