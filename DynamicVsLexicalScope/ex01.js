const a = function() {
  console.log(this)
  const b = function() {
    console.log(this)
    const c = {
      hi: function() {
        console.log(this)
      }
    }
    c.hi()
  }
  b()
}

a()


// 