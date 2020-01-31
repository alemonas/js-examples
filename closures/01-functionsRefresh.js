// Ways to execute a function

function one() {
  return 'one';
}

one();

const obj = {
  two() {
    return 'two';
  }
}

obj.two();

function three() {
  return 'three';
}

three.call();

// not see very ofter (with Function constructor)

const four = new Function('return 4'); 

four();

const newFour = new Function('num', 'return num');

newFour(4.1);

// Function are objects, especial type of object, `callable object`

function helloBootcamp() {
  console.log('hello bootcamp');
}

helloBootcamp.id = '05';

console.log(helloBootcamp);

// underneath the hood is something like

// const specialObj = {
//   id: '05',
//   name: 'helloBootcamp',
//   (): console.log('hello bootcamp')
// }

// functions has methods like apply, call, bind
// and arguments: name, arguments, lenth

// helloBoocamp.name;