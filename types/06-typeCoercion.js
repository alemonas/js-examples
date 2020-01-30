console.log(1 == '1');


// Type Coercion happens when you use == (two equals)
// ===

if(1) {
  console.log('hello')
}

// -0 and +0

console.log(-0 === +0)

console.log(Object.is(-0, +0))

//NaN === NaN

// https://dorey.github.io/JavaScript-Equality-Table/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3