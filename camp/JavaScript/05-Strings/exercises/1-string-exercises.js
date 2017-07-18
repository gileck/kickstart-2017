/**
 * Write the functions below. Don't forget to write tests!
 */

/**
 * Checks whether a string contains only blanks
 * isAllBlanks('   ') => true
 * isAllBlanks(' x ') => false
 * isAllBlanks('') => true
 */
function isAllBlanks(str) {
   for (let i = 0; i < str.length; i++) {
     if (str[i] !== " ") return false;
   }
   return true;
}

test("isAllBlank",isAllBlanks('   '),true)
test("isAllBlank",isAllBlanks('  x '),false)

/**
 * Truncates to a specific width, with ellipsis characters if needed.
 *
 * truncate('Robin Hood') ==> 'Robin Hood'
 * truncate('Robin Hood', 5) ==> 'Robin'
 * truncate('Robin Hood', 5, '!!') ==> 'Rob!!'
 * truncate('Robin', 5, '!!') ==> 'Robin'
 * truncate('Rob', 5, '!!') ==> 'Rob'
 *
 * How do you know if a parameter was passed? Its value is undefined!
 */
function truncate(str, maxLength, ellipsis) {
  if (!maxLength || str.length <= maxLength) return str;
  if (!ellipsis) ellipsis = '';
  str = str.substring(0,maxLength - ellipsis.length);
  str = str + ellipsis;
  return str;
}

console.log("----")
test("truncate",truncate('Robin Hood'),'Robin Hood');
console.log("----")
test("truncate",truncate('Robin Hood', 5),'Robin');
test("truncate",truncate('Robin Hood', 5, '!!'),'Rob!!');
test("truncate",truncate('Robin', 5, '!!'),'Robin');
test("truncate",truncate('Rob', 5, '!!'),'Rob');

/**
 * Bonus:
 * Removes substrings from a string
 *
 * remove('Robin Hood', ' ') ==> 'RobinHood'
 * remove('Robin Hood', 'Ho') ==> 'Robin od'
 * remove('Robin Hood', 'o') ==> 'Rbin Hd'
 * remove('Robin Hood', 'zzz') ==> 'Robin Hood'
 */
function remove(str, substring) {
  var regex = new RegExp(substring,"g");
  return str.replace(regex,"")
}

test("remove",remove('Robin Hood', ' '),'RobinHood');
test("remove",remove('Robin Hood', 'Ho'),'Robin od');
test("remove",remove('Robin Hood', 'o'),'Rbin Hd');
test("remove",remove('Robin Hood', 'zzz'),'Robin Hood');


/**
 * Capitalize the words in the sentence. You can use split and join to separate the words and bring
 * them back together, capitalized
 * (If you don't know how to uppercase, well, search for it!)
 *
 * capitalize('robin hood') ==> 'Robin Hood'
 * capitalize('') ==> ''
 * capitalize('robin    hood') ==> 'Robin Hood'
 */
function capitalize(str) {

}

/**
 * Bonus:
 * Converts a string to an integer
 *
 * toInt('45') ==> 45
 * toInt('-4') ==> -4
 * toInt('0') ==> 0
 */
function toInt(str) {

}

/**
 * Bonus:
 * Converts an integer to a string
 *
 * toString(45) ==> '45'
 * toString(0) ==> '0'
 * toString(-45) ==> '-45'
 */
function toStr(num) {

}

function test(name,result,expected) {
  console.log("----")
  console.log("result: " + result);
  console.log("expected: " + expected);
  if (JSON.stringify(expected) !== JSON.stringify(result)) console.log(name + ": ERROR");
  else console.log(name + ": OK");
}
