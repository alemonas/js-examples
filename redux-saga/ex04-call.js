// use the saga sandbox for this example
// git clone https://github.com/danielstern/redux-saga-sandbox


// use for testing
// if we call a method, instead of yielding to it directly
// we can have so that method isn't really called during test


// in this example we'll call a method from within a saga
// compare functionality between using call and directly invoking the method

let fn = () => { console.log("Called the function") }

// we'll create a saga that just yield to the fn
let saga = function*() { yield fn() }

run(saga)

// now rewrite that saga using call()
saga = function*() {yield effects.call(fn)}

run(saga)

// should be the same as calling the funcion