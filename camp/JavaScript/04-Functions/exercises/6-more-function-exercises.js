/**
 * Implement the tests below. Don't forget to use isArrayEqual to check
 * that two arrays are equal when testing.
 */

/* Write a function forEach that calls a func on each array value
 * forEach([1, 4, 5], (x) => console.log(x)) => prints 1
 *                                                     4
 *                                                     5
 */
function forEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i])
  }

}

/**
 * Bonus:
 *
 * Implement a function that reduces an array into a single value using a given function.
 * reduce(array, func, initialValue)
 *
 * For example:
 *   reduce([4, 5, 6], (a, b) => a + b, 0) will return 0 + 4 + 5 + 6
 *
 * In other words, it takes the initialValue and the first value in the array,
 * applies func on them (func(initialValue, array[0])). It stores it in reducedValue.
 *
 * Then it does the same with reducedValue and array[1]
 * Then it does the same with reducedValue and array[2]
 *
 * Then it returns reducedValue
 */
function reduce(array, func, initialValue) {
  let sum = initialValue;
  for (let i = 0; i < array.length; i++) {
    sum = func(sum,array[i]);
  }
  return sum;
}
test("reduce",reduce([4, 5, 6], (a, b) => a + b, 0),4 + 5 + 6);


/**
 * Bonus:
 *
 * Implement the function sumOfPairs below using reduce (you may also need to use filter).
 *
 * sumOfPairs([3, 4, 6, 7]) => 10
 * sumOfPairs([3, 5, 7]) => 0
 *
 */
function sumOfPairs(array) {

}

/**
 * Bonus:
 *
 * Implement the function max below using reduce.
 */
function max(array) {

}

function test(name,result,expected) {
  console.log("result: " + result);
  console.log("expected: " + expected);
  if (JSON.stringify(expected) !== JSON.stringify(result)) console.log(name + ": ERROR");
  else console.log(name + ": OK");
}
