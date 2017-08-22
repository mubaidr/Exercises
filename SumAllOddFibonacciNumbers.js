function sumFibs (num) {
  var old = 1
  var cur = 1
  var tmp = 0
  var store = [1]

  while (cur <= num) {
    tmp = cur
    cur += old
    old = tmp
    if (old % 2 !== 0) store.push(old)
  }

  return store.reduce(function (a, b) {
    return a + b
  }, 0)
}

sumFibs(10)
