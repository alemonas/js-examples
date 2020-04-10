// use the saga sandbox for this example
// git clone https://github.com/danielstern/redux-saga-sandbox

// instead of taking an action once, it takes every time it comes,
// and every time it forks a new child process to handle it

// and unlike take, but like fork, when you call takeEvery your main
// thread continues to execute, even after it's called 

// 1. Create a Saga that invokes a method every time a specified action is dispatch
// 2. Note how multiple thread can be created in conjuntion
// 3. Note that the thread where TakeEvery is called resumes immediately

// Create a process that all the processes will loop every 1000 ms   
let process = function* () {
  while(true) {
    console.log("Process loop.");
    yield delay(1000);
  }
}

// now we'll create a saga that listen for a particular event,
// we'll call the event START_PROCESS, and forks the process for 
// every time it's called. So, well yield effects.takeEvery
// and we'll listen for START_PROCESS, and then call process 
// and add a log to show that the saga ended

let saga = function* () {
  yield effects.takeEvery('START_PROCESS', process);
  console.log('Saga got to the end.');
}

// then run the saga

run(saga);

// so the saga gets to the end, but our process hasn't been called any times
// the saga is still waiting  for the START_PROCESS action, let's dispatch it manually

dispatch({ type: 'START_PROCESS '});

// if we dispatch the event again, our process just keeps looping faster,
// because is continuosly forking a new process. 




