function steamrollArray (arr) {
  var result = []
  // I'm a steamroller, baby
  reduceArray(arr, result)
  return result
}

function reduceArray (arr, result) {
  arr.forEach(function (val, index) {
    if (typeof val === 'object' && val.length >= 0) {
      reduceArray(val, result)
    } else {
      result.push(val)
    }
  })
}

steamrollArray([1, [2],
  [3, [
    [4]
  ]]
])
