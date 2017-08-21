function whatIsInAName (collection, source) {
  // What's in a name?
  var arr = []
  var keys = Object.keys(source)

  // Only change code below this line
  arr = collection.filter(function (val, index) {
    var key
    var res = []
    for (var i = 0; i < keys.length; i++) {
      key = keys[i]
      res.push(!!val[key] && val[key] === source[key])
    }
    return res.reduce(function (start, current) {
      return start && current
    })
  })

  // Only change code above this line
  return arr
}
// [{ "a": 1, "b": 2, "c": 2 }]
console.log(whatIsInAName([{
  'a': 1,
  'b': 2
}, {
  'a': 1
}, {
  'a': 1,
  'b': 2,
  'c': 2
}], {
  'a': 1,
  'c': 2
}))
