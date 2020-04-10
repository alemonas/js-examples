// use the saga sandbox for this example
// git clone https://github.com/danielstern/redux-saga-sandbox

// 1. paused code execution until action is called 

// reutnr an object
effects.take("MY_ACTION");


// create a generator an call it mySaga
let mySaga = function* () {
  console.info('Saga Begins');
  const state = yield effects.take('SET_STATE');
  console.info('Got state...', state);
}

run(mySaga);
dispatch({type: 'SET_STATE', value: 42})