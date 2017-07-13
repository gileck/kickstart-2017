/**
 * Function Currying (aka Partial Function Application),
 * is the use of a function that accept one or more arguments and
 * returns a new function with some of the arguments already set.
 */

function greet(gender, age, name) {
  const salutation = gender === 'male' ? 'Mr. ' : 'Ms. ';
  let result;

  if (age > 25) {
    result = 'Hello, ' + salutation + name + '.';
  }
  else {
    result = 'Hey, ' + name + '.';
  }

  return result;
}

// So we are passing null because we are not using the "this" keyword in our greet function.
const greetAdultMale = greet.bind(null, 'male', 45);

greetAdultMale('John Doe');
// "Hello, Mr. John Doe."
greetAdultMale('Peter Pan');
// "Hello, Mr. Peter Pan."

const greetYoungster = greet.bind(null, '', 16);

greetYoungster('Mike');
// "Hey, Mike."
greetYoungster('Emma Waterloo');
// "Hey, Emma Waterloo."
