// dont initialize the function inside a loop

for (let i = 0; i < 5; i++) {
  function a() {
    console.log('a')
  } 
  a() 
}

// use default values ES6 name = 'someName'
function hello(name) {
  console.log(name)
}

hello()
