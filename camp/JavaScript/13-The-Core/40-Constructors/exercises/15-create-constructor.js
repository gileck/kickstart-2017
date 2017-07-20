/**
 * Add "getBrand" function that returns the Car brand
 */

function Car(brand) {
  this.brand = brand
}

Car.prototype.getBrand = function () {
  return this.brand;
};



const beemer = new Car('BMW');

/**
 * Expected
 */
console.log(beemer.getBrand());
// BMW
