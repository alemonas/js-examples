// memoization
// Special type of caching

function addTo80(n) {
  console.log('after long time....');
  return n + 80;
}

console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

// start memoizing

let cache = {}; // using hashmap
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  }SILAS

  console.log('after long time...');
  cache[n] = n + 80;
  return cache[n];
}

cache = [];

console.log('1', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(5));
console.log('3', memoizedAddTo80(5));
