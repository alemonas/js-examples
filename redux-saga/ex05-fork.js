// use the saga sandbox for this example
// git clone https://github.com/danielstern/redux-saga-sandbox

// works a lot like call()
// you pass it a method and the method is invoked 
// however you can't capture the variables that are yielded from a forked
// because the caller continuos to run instatly without pausing 

// 1. Create a method that loops and creaates a fork with another method
// 2. Note first thread does not pause when it calls the 2nd thread
// 3. Note that more instances of second method are continaully created


// define a function that loops and run a console log every second
function* fn() {
  while(true) {
    console.log('FN!');
    yield delay(1000)
  }
}

// now, create the fork inside a saga

let saga = function* () {
  while(true) {
    yield effect.fork(fn);
    yield delay(500);
  }
}

return(saga);


// So, we should see that countinuosly more and more FNs get called, as the saga loops
// creates more and more forks