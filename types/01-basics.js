// Primitive
console.log('5: ', typeof(5));
console.log('true: ', typeof(true));
console.log('hello world: ', typeof('hello world'));
console.log('undefined: ', typeof(undefined)); // abscense of a definition (default value - hoisting)
console.log('null: ', typeof(null)); // abscence of a value 
console.log('Symbol: ', typeof(Symbol('just me')));

// Non-primitive
console.log('{}: ', typeof({}));
console.log('[]: ', typeof([]));
console.log('function(){}: ', typeof(function(){}));




// Symbol is new since ES6, it create something unique to us, 
// is useful for identitifier an object for example