function uniteUnique (arr) {
  var result = []
  var tmp = []

  result = Array.from(arguments).reduce(function (a, b) {
    return a.concat(b)
  }, [])

  result.forEach(function (a) {
    if (tmp.indexOf(a) === -1) {
      tmp.push(a)
    }
  })

  return tmp
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
