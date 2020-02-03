function a() {
  let grandpa = 'grandpa';
  return function b() {
    let father = 'father';
    // let random = 'random';
    return function c() {
      let son = 'son';
      console.log(`${grandpa} ${father} ${son}`);
    }
  }
}

// a()