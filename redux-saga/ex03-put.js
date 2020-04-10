// use the saga sandbox for this example
// git clone https://github.com/danielstern/redux-saga-sandbox

// 1, pause code execution until action is called
//. use take to verify action is called

let mySaga = function* () {
  console.info('Saga Begins');
  const state = yield effects.take('SET_STATE');
  console.info('Got state...', state);
}

run(mySaga);


let putSaga = function* () {
  yield effects.put({type: 'SET_STATE', value: 42 });
}

run(putSaga);

// so take and put could be use to pass data from one saga to another 

 