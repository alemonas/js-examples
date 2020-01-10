function two() {
  var isValid;
}

function one() {
  var isValid = true;
  two();
}

var isValid = false;
one();

// two() -- isValid = undefined
// one() -- isValid = true
// global() -- isValid = false
// STACK  

