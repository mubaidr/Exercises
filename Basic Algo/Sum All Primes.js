function sumPrimes (num) {
  var store = []
  for (var i = 2; i <= num; i++) {
    var j = 1
    for (; j < i; j++) {
      if (i % j === 0 && j !== 1 && j !== i) {
        break
      }
    }
    if (i === j) {
      store.push(i)
    }
  }

  return store.reduce(function (a, b) {
    return a + b
  }, 0)
}

console.log(sumPrimes(977))
