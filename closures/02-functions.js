// Functions are first class citizen in JS
// 1. Functions can be assign to variables and properties
var stuff = function() {}

// 2. pass functions are argumnets 

function a(fn) {
  fn()
}

a(() => console.log('hello there'));

// 3. Return functions as a values 

function b() {
  return function c() {
    console.log('bye');
  }
}

b();
// b()();
// var d = b()
// d()