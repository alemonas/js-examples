function printMoney() {
  var c = 'c';
  return '10.000$us';
  
}

function findMoney() {
  var b = 'b';
  return printMoney();
}

function showMeTheMoney() {
  var a = 'a';
  return findMoney()
}

showMeTheMoney();
