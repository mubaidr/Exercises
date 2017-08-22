function smallestCommons (arr) {
  var lcm = 1
  var max = Math.max.apply(null, arr)
  var min = Math.min.apply(null, arr)

  for (var i = 1; i <= max; i *= min) {
    for (var j = min; j <= max; j++) {

    }
  }

  console.log(lcm)

  return lcm
}

smallestCommons([1, 5])
