function sym () {
  var args = Array.prototype.slice.call(arguments)
  return args.reduce(function (result, item) {
    return result
      .filter(function (itemInAcc) {
        return item.indexOf(itemInAcc) === -1
      })
      .concat(item.filter(function (itemInItem) {
        return result.indexOf(itemInItem) === -1
      }))
      .filter(function (item, index) {
        return result.indexOf(item) === index
      })
  }, [])
}

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4, 3], [5, 1, 3]))
