// Compose
// when several instances can be combined in a certain way to produce the same type of thing.

// data --> fn --> data --> 

// For example we want to create a program that multiply 2 number and returns
// the absolute value of the result

// const multiplyBy3AndAbsolute(a, b) = compose()

// In js doesn't existe, but we have a lot of library that has compose like: Ramba, lodash

const compose = (f, g) => data => f(g(data));

const multiplyBy3 = num => num * 3;

const makePositive = num => Math.abs(num);

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);


console.log('res: ', multiplyBy3AndAbsolute(-30));

// Pipe 
// same as compose, but instead to go right -> left
// it goes left -> right

const pipe = (f, g) => (data) => g(f(data));

// to understand better
fn1(fn2(fn3(-30)))
compose(fn1, fn2, fn3)(-30);
pipe(fn3, fh2, fn1)(-30);

