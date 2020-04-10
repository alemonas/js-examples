// no side effects
// same input --> same value

// Side effects examples

const array = [1, 2, 3];

// this function has side-effects
// becuase a side-effect modify when the function modify anything outside of himself
function mutateArray(arr) {
  arr.pop();
}

mutateArray(array);
console.log(array);

function mutateArray2(arr) {
  arr.forEach(item => arr.push(9))
}

mutateArray2(array);
console.log(array);