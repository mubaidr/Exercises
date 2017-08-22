function fearNotLetter (str) {
  var last = 0
  for (var i = 0; i < str.length; i++) {
    var cc = str[i].charCodeAt(0)
    if (i !== 0 && (cc - last) > 1) {
      return String.fromCharCode(last + 1)
    }
    last = cc
  }
  return undefined
}

fearNotLetter('abce')
