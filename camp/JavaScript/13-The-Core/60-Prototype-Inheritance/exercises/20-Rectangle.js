/**
 * Create Square constructor function that inherits from Rectangle using "Object.create"
 */

function Rectangle(width, height) {
  this.width  = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

/**
 * Your code here
 * 1. Create Square
 * 2. Inherit from Rectangle
 */

function Square(size) {
  Rectangle.call(this,size,size);
}

Square.prototype = Object.create(Rectangle.prototype);
// width and height are equal in a square.
const square = new Square(4);

/**
 * Expected
 */
console.log(square.area()); // 16
