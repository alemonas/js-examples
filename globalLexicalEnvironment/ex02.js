function giveMeTheMoney() {
  var a = 'a';
  return function findMoney() {
    var b = 'b';
    return function printMoney() {
      var c = 'c';
      return '10000 $us';
    }
  }
}

giveMeTheMoney();