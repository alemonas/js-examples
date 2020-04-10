var delayGenerator = function*() {
  yield new Promise(r => setTimeout(r, 1000));
  return 45;
}

