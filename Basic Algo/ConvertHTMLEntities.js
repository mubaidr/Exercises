function convertHTML (str) {
  var list = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }

  var keys = Object.keys(list)

  for (var i = 0; i < keys.length; i++) {
    str = str.replace(new RegExp(keys[i], 'gi'), list[keys[i]])
  }

  return str
}

convertHTML('Stuff in "quotation marks"')
