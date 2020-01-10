const wizard = {
  name: 'Gandalf',
  health: 50,
  heal() {
    return this.health = 100;
  }
}

const archer = {
  name: 'Legolas',
  health: 30
}

//cl
wizard.heal.call(archer)
// use call with extra params
// use apply instead of call with []
console.log(archer)

// bind returns a new function

