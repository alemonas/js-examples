// use the saga sandbox for this example
// git clone https://github.com/danielstern/redux-saga-sandbox


// Create a forked process, then cancel it after short delay
// Note how forked process runs until cancelled
// Note how finally block is invoked

let process = function*() {
  try{
    while(true) {
      console.log("process looped");
      yield delay(500);
    }
  } finally {
    const cancelled = yield effects.cancelled();
    console.info('Cancelled ? ', cancelled);
  }
}

let saga = function*() {
  let forked = yield effects.fork(process);
  yield delay(5000);
  yield effect.cancel(forked);
  console.info('DONE!');
}

run(saga); 
