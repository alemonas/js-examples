const obj = {
  name: 'Jhon Snow',
  sing() {
    console.log('a', this);
    // s3LF
    // we should change to an arrow function to solve this issue // because have a lexical this behavior
    var anotherFunc = function() {
      console.log('b', this);
    }
    // or return anotherFunc.bind(this)
    anotherFunc();
  }
}


// Everything in JS is lexical scope except for the this keyword 