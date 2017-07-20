function getFullName() {
  return this.firstName + ' ' + this.lastName;
}

/**
 * Write the code to get the result below
 */
function getResult() {
  return getFullName.call({firstName: "John",lastName: "Doe"});
}

/**
 * Expected
 */
console.log(getResult());
// John Doe
