// this

function show() {
  console.log(this)
}

function show() {
  'use-strict'
  console.log(this)
}

const obj = {
  name: 'pedro',

  sing: function() {
    return 'lalala ' + this.name;
  },

  singAgain() {
    return 'lalala ' + this.name + '!!!!'
  }
}

obj.sing()

// this is the object that the function is a property of

// 1. Gives methods access to their objects
