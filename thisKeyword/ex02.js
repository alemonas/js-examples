// 2. Execute the same code for multiple objects 

function showCharacterName() {
  console.log(this.name)
}

const name = 'Walter White';
const obj1 = {
  name: 'Jessy Pinkman',
  showCharacterName: showCharacterName
}

const obj2 = {
  name: 'Gus Fring',
  showCharacterName: showCharacterName
}

showCharacterName();
obj1.showCharacterName();