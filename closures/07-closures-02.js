const print = (string) => (name) => (name2) =>
  console.log(`${string} ${name} ${name2}`);

const helloPrint = print('hi');
// after 1 year 
const helloPrintName = helloPrint();

