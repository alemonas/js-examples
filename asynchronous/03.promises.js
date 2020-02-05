const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('stuff worked');
  } else {
    reject('Error, it broke');
  }
});

// promise.then(result => console.log(result));

// promise
//   .then(result => result + '!')
//   .then(result2 => {
//     console.log(result2)
//   })


// promise
//   .then(result => result + '!')
//   .then(result2 => {
//     throw Error;
//     console.log(result2)
//   })
//   .catch(() => console.log('error!'))

// catch => catches any error that may happend between the chains 

promise
  .then(result => result + '!')
  .then(result2 => result2 + '?')
  .catch(() => console.log('error!'))
  .then(result3 => {
    console.log(result3 + '!')
  })
