var a = 5;
var b = a;

b++

console.log(a)
console.log(b)

let obj1 = {name: 'Jon', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1);
console.log(obj2); 

// Object.assign({}, obj1)
// ...obj1

let c = [1,2,3,4,5]
var d = c;

d.push(6);

console.log(c);
console.log(d); 

// shallow cloning - only clone the first layer

let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};

let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.b = 'new b';
obj.c.deep = 'hahaha';
console.log(obj);
console.log(clone);
console.log(clone2);

// deep cloning 

let deepClone = JSON.parse(JSON.stringify(obj));

// this can have some performance implications with masive objects.