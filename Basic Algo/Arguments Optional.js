function addTogether () {
  if (arguments.length === 1) {
    var num = arguments[0]
    if (typeof num === 'number') {
      return function (a) {
        if (typeof a === 'number') {
          return a + num
        } else {
          return undefined
        }
      }
    } else {
      return undefined
    }
  } else if (arguments.length > 1) {
    var arr = Array.from(arguments)
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        break
      }
    }
    if (i === arr.length) {
      return arr.reduce(function (prev, next) {
        return prev + next
      })
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}

addTogether(2, 3)
