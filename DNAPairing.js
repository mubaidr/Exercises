function pairElement (str) {
  var output = []
  var pairs = {
    G: 'C',
    C: 'G',
    A: 'T',
    T: 'A'
  }
  for (var i = 0, len = str.length; i < len; i++) {
    var arr = []
    arr.push(str[i], pairs[str[i]])
    output.push(arr)
  }
  return output
}

console.log(pairElement('GCG'))
