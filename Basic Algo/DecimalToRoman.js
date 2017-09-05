function convertToRoman (num) {
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var result = ''

  decimal.forEach(function (value, index) {
    while (num >= value) {
      num -= value
      result += roman[index]
    }
  })

  return result
}

convertToRoman(3999)
