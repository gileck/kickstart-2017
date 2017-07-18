/**
 * Implement the tests below. Don't forget to use isArrayEqual to check
 * that two arrays are equal when testing.
 */

/**
 * Use Array.map to write the function below that returns an array
 * which is the uppercases all the strings in an array
 *
 * upperCaseArray(['hello', 'world']) => ['HELLO', 'WORLD']
 * upperCaseArray([]) => []
 *
 */
function upperCaseArray(array) {
  return array.map(item => item.toUpperCase());
}

test("upperCaseArray",upperCaseArray(['hello', 'world']), ['HELLO', 'WORLD']);

/**
 * Use Array.filter to write a function below that returns
 * an array that contains only strings that include the string 'str'
 *
 * onlyIncludes(['helloy', 'boy', 'Baby'], 'oy') => ['helloy', 'boy']
 *
 */
function onlyIncludes(array, str) {
  return array.filter((item) => item.indexOf(str) !== -1)
}

test("onlyIncludes",onlyIncludes(['helloy', 'boy', 'Baby'],"oy"), ['helloy', 'boy']);


/**
 * Write a function repeat that repeats a call to a function n times.
 *
 * repeat(() => console.log('hi'), 3) => prints hi
 *                                              hi
 *                                              hi
 */
function repeat(func, n) {
  for(let i=0; i < n; i++){
    func();
  }
}

repeat(() => console.log('hi'), 3)

function test(name,result,expected) {
  // console.log("result: " + result);
  // console.log("expected: " + expected);
  if (JSON.stringify(expected) !== JSON.stringify(result)) console.log(name + ": ERROR");
  else console.log(name + ": OK");
}

function isArrayEqual(array1,array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length ; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

