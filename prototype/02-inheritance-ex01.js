let dragon = {
  name: 'Drogon',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Gex',
  fight() {
    return 1
  }
}

// const lizardFire = dragon.sing.bind(lizard)
// console.log(lizardFire())

// Don't do this, bad performance. Show with bind.

// lizard.__proto__ = dragon;
// dragon.isPrototypeOf(lizard);
// console.log(lizard.fire)
// console.log(lizard.sing())

// hasOwnProperty
