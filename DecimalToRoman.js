function convertToRoman (num) {
  var decimal = [1000, 500, 100, 50, 10, 5, 1]
  var roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
  var result = ''

  decimal.forEach(function (value, index) {
    if (num >= value) {
      var diff = num - value
      var RomanDiff = decimal[index - 1] - decimal[index]
      console.log(num, value, diff, RomanDiff)
      if (diff > RomanDiff) {
        console.log(num, value, diff, RomanDiff)
      }
    }
    while (num >= value) {
      num -= value
      result += roman[index]
    }
  })

  return result
}

console.log(convertToRoman(39))
