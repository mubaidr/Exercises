function translatePigLatin (str) {
  var vowels = ['a', 'e', 'i', 'o', 'u']

  if (vowels.indexOf(str[0].toLowerCase()) > -1) {
    str += 'way'
  } else {
    var outPut = ''
    for (var i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i].toLowerCase()) === -1) {
        outPut += str[i]
      } else {
        break
      }
    }
    str = str.substr(outPut.length) + outPut + 'ay'
  }
  return str
}

console.log(translatePigLatin('glove'))
