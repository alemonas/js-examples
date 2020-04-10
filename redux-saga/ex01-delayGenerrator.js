// use the saga sandbox for this example
// git clone https://github.com/danielstern/redux-saga-sandbox


var delayGenerator = function* () {
  let data1 = yield delay(1000, 1);
  console.info("Step 1");
  let data2 = yield delay(1000, 2);
  console.info("Step 2");
  let data3 = yield delay(1000, 1);
  console.info("Step 3");

  return data1 + data2 + data3;
}

var obj = delayGenerator();
obj.next();
obj.next();
obj.next();

// we could call next() method before the yield before finished, so we could have and error if we return before one of the delay finished

// with redux saga with could use run()


run(delayGenerator);

// using co.js that is inside redux saga

var wrapped = co.wrap(delayGenerator);
wrapped().then(v => console.log("Got the value: ", v));
