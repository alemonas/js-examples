// no side effects
// given the same input returns the same value

// FUNCTION WITHOUT SIDE EFFECTS EXAMPLES

const array = [1,2,3];

function removeLastItem(arr) {
  const newArr = [].concat(arr);
  newArr.pop();
  return newArr;
}

const removeLastItemArray = removeLastItem(array);

console.log('array:', array)
console.log('removeLastItemArray: ', removeLastItem);

function multiplyBy2(arr) {
  return arr.map(item => item * 2);
}

const multiplyBy2Array = multiplyBy2(array);

console.log('array:', array)
console.log('multiplyBy2Array: ', multiplyBy2Array);
