/**
 * Write the code to get the result below
 */
function getMinimum(scores) {
  return Math.max.apply(null,scores)
}

function getResult() {
  const scores = [65, 71, 54, 96];

  return getMinimum(scores);
}

/**
 * Expected
 */
console.log(getResult());
// 54
