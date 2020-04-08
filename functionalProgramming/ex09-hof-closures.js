// HOF
// 1. A function that return another function
const hof = () => () => 5;
console.log(hof());
console.log(hof()());

// 2. A function that receives a function as parameter
const hof2 = (fn) => fn(5);
hof2(function a(x) {return x});

// Closures
// mechanism for containing some sort of state
const closureImpure = function() {
  let count = 0;
  return function increment() {
    count++; // modify the state outside of this function -> impure
    return count; 
  }
}

const incrementFn = closureImpure();
console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());

const closurePure = function() {
  let counter = 1024;
  return function getCounter() {
    return counter; // not modify the state outside -> pure
  }
}

// in this way we have a count variable that is private 
// We can't modify the countet

