// Pure function 
// Return a value depends only on the value of his arguments
// don't have any observables side effects, such a database calls 
// just calculate the new value, and you can be confident that id you call the pure function 
// with the same arguments, you going to get the same value. 
// Also pure function don't modify the values pass to them 
function square(x) {
    return x * x;
}

function squareAll(items) {
    return items.map(square);
}

// Impure functions
// have side effects: 
// call the database or the network
// operate on the DOM 
// overwrite the values that you pass to them.   
function square(x) {
    updateXInDatabase(x);
    return x * x;
}

function squareAll(item) {
    for (let i = 0; i < items.length; i++) {
        items[i] = square(items[i]);
    }
}