/* eslint prefer-arrow-callback: 0 */

const cities = ['Tel Aviv', 'Jerusalem', 'Haifa'];

// Old school way
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// Usually used for Objects
for (const index in cities) {
  console.log(index, cities[index]);
}

// New, no support in IE at all (even 11):
// https://kangax.github.io/compat-table/es6/#test-for..of_loops
for (const city of cities) {
  console.log(city);
}

// Functional, great support, most commonly used
cities.forEach(function (city, index) {
  console.log(index, city);
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
