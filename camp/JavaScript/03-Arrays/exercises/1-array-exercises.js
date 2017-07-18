/**
 * Implement the functions below. Don't forget to write tests.
 * Don't forget to use isArrayEqual to check
 * that two arrays are equal when testing.
 */

/**
 * Returns the sum of an array.
 *
 * sum([4, 5, 6]) => 15
 * sum([]) => 0
 */
function sum(array) {
  return array.reduce((sum,current) => sum + current,0);
}

/**
 * Returns the average of an array. Use sum function above.
 *
 * average([4, 5, 6]) => 5
 * average([4]) => 4
 * average([]) => 0
 */
function average(array) {
  return sum(array) / array.length;
}

/**
 * Returns an array that does not contain the value.
 *
 * removeValue([4, 5, 6, 4, 3], 4) => [5, 6, 3]
 * removeValue([4, 4, 4], 4) => []
 */
function removeValue(array, value) {
  return array.filter(item => item !== value);
}

/**
 * receives an array whose elements are also arrays. Returns an array with the
 * same elements as in the sub-arrays.
 *
 * flatten([[1, 2], [4, 3]]) ==> [1, 2, 4, 3]
 * flatten([[1, 2], []]) ==> [1, 2]
 * flatten([[]]) ==> []
 */
function flatten(arrayOfArrays) {
    return arrayOfArrays.reduce((array,item) => array.concat(item),[]);
}

test("sum",sum([1,2,3,4,5,6]),21);
test("average",average([2,3,4]),3);
test("removeValue",removeValue([4, 5, 6, 4, 3],4),[5,6,3]);
test("flatten",flatten([[1, 2], [4, 3]]),[1,2,4,3]);

function test(name,result,expected) {
  if (JSON.stringify(expected) !== JSON.stringify(result)) console.log(name + ": ERROR");
  else console.log(name + ": OK");
}





