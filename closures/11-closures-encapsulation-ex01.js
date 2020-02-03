// Make it so that the initialize function can only be called once!
let view;
function initialize() {
  view = '🏔';
  console.log('view has been set!')
}

initialize();
initialize();
initialize();

console.log(view)