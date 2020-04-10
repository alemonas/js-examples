// pure function 
// input --> output

function sum(a, b) {
  return a + b;
}

const mySum = sum(1, 5);  

console.log(mySum);

// always return 6 right?
// This is called referencial transparency that means 
// that If I completely change the value of sum(1.5) at line 10 to the number 6
// and this will never affect this part of the program

function multiplyBy2(num) {
  return num * 2;
}

const mulRes = multiplyBy2(sum(1,5))
console.log(mulRes)


