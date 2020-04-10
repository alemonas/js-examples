// Idempotence
// Always returns or does what we expected to do

function idempotence(num) {
  return Math.random(num);
}

console.log(idempotence(5));

function idempotence2(num) {
  console.log(num)
}

idempotence2(5);

// no matters how many times execute idempotence2(5) always output 5


function deleleUser(id) {
  // after delete the user, should always returns the same
  // we can't delete a user multiple times
}

// another example could be an http API call that given some param return some that I expected 
// It makes our code predictable

// Another interting idea is to been able to call yourself over and over

const absRes = Math.abs(Math.abs(-5));
console.log(absRes);