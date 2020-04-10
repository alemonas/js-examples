// partial application
// process to producing a function with a smaller number of params

const multiply = (a, b, c) => a * b * c;
console.log(multiply(2,2,2));

// curried version
const curriedMultiply = (a) => (b) => (c) => a*b*c;
curriedMultiply(5)(2)(2) 

// Partial application version
// Partial application: on the second call I expect all the arguments
const partialMultiply5 = multiply.bind(null, 5);
const res = partialMultiply5(2, 2);

console.log(res);