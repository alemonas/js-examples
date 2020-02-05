const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "hello");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "BOOTCAMP 05");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "are you ready for the next demo?");
});

Promise.all([promise, promise2, promise3])
  .then(values => {
    console.log(values)
  })