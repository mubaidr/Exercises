function smallestCommons (arr) {
  var lcm = 1
  var max = Math.max.apply(null, arr)
  var min = Math.min.apply(null, arr)

  for (var i = max; ; i += max) {
    for (var j = min; j <= max; j++) {
      if (i % j !== 0) {
        break
      }
    }
    if (i % j === 0) {
      lcm = i
      break
    }
  }

  console.log(lcm)

  return lcm
}

smallestCommons([23, 18])
