// Currying
// Take a function that can take multiple params and
// instead incurring modify it to a function that takes one
// param at a time

const multiply = (a, b) => a * b;
multiply(10,4)

const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(5)(3) 

// we could do something like:
const curriedMultiplyBy5 = curriedMultiply(5);

curriedMultiplyBy5(10);