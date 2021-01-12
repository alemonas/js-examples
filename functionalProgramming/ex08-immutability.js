// Immutability

const obj = { name: 'R2D2' };

function clone(obj) {
  // return Object.assign({}, obj)
  return {...obj}; // this is pure
}

obj.name = 'BB-8' // here we're mutating the state

// otherwise we could create a function for that

function updateName(obj) {
  const newObj = clone(obj);
  newObj.name = 'BB-88';
  return newObj
}

const objUpdated = updateName(obj)

console.log({obj});
console.log({objUpdated})