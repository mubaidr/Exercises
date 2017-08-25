function dropElements (arr, func) {
  var result = Array.from(arr)
  var deleted = 0

  for (var i = 0; i < arr.length; i++) {
    var elem = arr[i]
    if (func(elem)) {
      break
    } else {
      result.splice(i - deleted, 1)
      deleted++
    }
  }
  console.log(result, arr)
  return result
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3
})
