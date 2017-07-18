/**
 * Given a set `[{weight:Number, benefit:Number}]` and a capacity,
 * find the maximum value possible while keeping the weight below
 * or equal to the capacity
 * params:
 *  `capacity`  : Number,
 *  `items`     : [{w:Number, b:Number}]
 * returns:
 *  An object containing `maxValue` and `set`
 */

function solution(items,weight) {
  let sum = 0;
  let set = [];


  let res1 = solution(items.slice(1),);
  let res2 = solution(items);
  return {maxValue: sum, set: set}
}

let items = [{w: 12,b: 4},{w: 1,b: 2},{w: 4, b: 10},{w: 1,b: 1},{w: 2,b: 2}];
let result = solution(items,15);
console.log(result.maxValue === 15);
console.log(result.set);



