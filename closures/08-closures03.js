function callMeMaybe() {
  const callMe = 'Hi!';
  setTimeout(function() {
      console.log(callMe);
  }, 4000);

}

callMeMaybe();