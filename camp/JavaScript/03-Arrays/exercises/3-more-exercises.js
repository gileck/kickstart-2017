/**
 * Implement the functions below. Don't forget to write tests.
 * Don't forget to use isArrayEqual to check
 * that two arrays are equal when testing.
 */

/**
 * Pushes a value into the array, at the 'index' place.
 *
 * a = [4, 5, 6]
 * insertValue([4, 5, 6], 0, 999) will change a to [999, 4, 5, 6]
 * a = [4, 5, 6]
 * insertValue([4, 5, 6], 2, 999) will change a to [4, 5, 999, 6]
 * a = [4, 5, 6]
 * insertValue([4, 5, 6], 3, 999) will change a to [4, 5, 6, 999]
 *
 * See why I don't like mutating functions? They are so much clunkier!
 */
function insertValue(array, index, value) {
  array.splice(index,0,value);
  return array;
}

test("insertValue",insertValue([4, 5, 6], 3, 999),[4, 5, 6, 999]);

/**
 * Same as above, but returns a new array.
 *
 * insertValue([4, 5, 6], 0, 999) => [999, 4, 5, 6]
 * insertValue([4, 5, 6], 2, 999) => [4, 5, 999, 6]
 * insertValue([4, 5, 6], 3, 999) => [4, 5, 6, 999]
 */
function insertValuePure(array, index, value) {
  return array.slice(0,index).concat(value).concat(array.slice(index));
}

test("insertValuePure",insertValuePure([4, 5, 6], 3, 999),[4, 5, 6, 999]);

/**
 * Returns whether an array is sorted.
 *
 * isSorted([4, 5, 6]) => true
 * isSorted([4, 7, 3]) => false
 * isSorted([]) => true
 */
function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++)
    if (array[i] > array[i + 1]) return false;
  return true;
}

test("isSorted",isSorted([1,2,3,4,5,6,7,8,9]),true);
test("isSorted",isSorted([1,2,3,2,3,4,5,6,7]),false);

/*
 * Returns the cross product of the two vectors.
 * This is defined as vec1[0]*vec1[0] + vec1[1]*vec2[1] + ... vec1[n - 1] * vec2[n - 1]
 *
 * crossProduct([2, 4], [5, 8]) ==> 10 + 32 = 42
 */
function crossProduct(vec1, vec2) {
  let sum = 0;
  for (let i = 0; i < vec1.length ; i++) {
    sum += vec1[i] * vec2[i];
  }
  return sum;
}

test("crossProduct",crossProduct([2, 4], [5, 8]),42);

/**
 * Bonus:
 *
 * Returns an array containing only one value from the array
 *
 * unique([4, 5, 1]) ==> [4, 5, 1]
 * unique([4, 5, 5, 4, 1, 5]) ==> [4, 5, 1]
 * unique([]) ==> []
 */
function unique(array) {
  return array.filter((element, index) =>
     array.indexOf(element) === index
  )
}

test("uniqe",unique([4, 5, 5, 4, 1, 5]),[4, 5, 1]);
test("uniqe",unique([4, 5, 1]),[4, 5, 1]);

/**
 * Bonus:
 *
 * Returns true if the two arrays have the same members.
 *
 * sameMembers([1, 2, 3], [3, 1, 2]) ==> true
 * sameMembers([1, 2, 3, 4], [3, 1, 2]) ==> false
 * sameMembers([1, 2, 3, 4], [3, 1, 2]) ==> false
 * sameMembers([1, 2, 3, 3], [3, 1, 2, 3]) ==> true
 * sameMembers([1, 2, 3, 3], [3, 1, 2]) ==> false
 * sameMembers([], []) ==> true
 */
function sameMembers(array1, array2) {
  return isArrayEqual(array1.sort(),array2.sort());
}

test("sameMembers",sameMembers([1, 2, 3], [3, 1, 2]), true);
test("sameMembers",sameMembers([1, 2, 3, 4], [3, 1, 2]) ,false);
test("sameMembers",sameMembers([1, 2, 3, 4], [3, 1, 2]) ,false);
test("sameMembers",sameMembers([1, 2, 3, 3], [3, 1, 2, 3]), true);
test("sameMembers",sameMembers([1, 2, 3, 3], [3, 1, 2]) ,false);
test("sameMembers",sameMembers([], []), true);

/**
 * Bonus:
 *
 * returns a sorted array that is the merge of two other sorted arrays.
 *
 * mergeSorted([1, 5, 7], [2, 3, 6, 7, 8]) ==> [1, 2, 3, 5, 6, 7, 7, 8]
 */
function mergeSorted(array1, array2) {
  let min_length = Math.min(array1.length, array2.length);
  let res = [];
  let index1 = 0, index2 = 0;
  while (index1 < min_length || index2 < min_length) {
    if (array1[index1] < array2[index2]) {
      res.push(array1[index1]);
      index1++;
    } else {
      res.push(array2[index2]);
      index2++;
    }
  }
  return res.concat(array1.slice(index1)).concat(array2.slice(index2));
}

test("mergeSorted",mergeSorted([1, 5, 7], [2, 3, 6, 7, 8]),[1, 2, 3, 5, 6, 7, 7, 8]);

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
