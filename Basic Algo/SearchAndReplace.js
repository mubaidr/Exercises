function myReplace (str, before, after) {
  var tmp
  if (/[A-Z]/.test(before[0])) {
    tmp = after[0].toUpperCase()
  } else {
    tmp = after[0].toLowerCase()
  }
  return str.replace(before, tmp + after.substr(1))
}

console.log(myReplace('A quick brown fox Jumped over the lazy dog', 'Jumped', 'leaped'))
