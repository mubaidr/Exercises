function spinalCase (str) {
  str = str.replace(new RegExp('[A-Z]', 'g'), '-$&').replace(/\s[a-z]/g, '-$&').replace(/\s/g, '').replace(/_/gi, '')
  if (str[0] === '-') {
    str = str.substr(1)
  }
  return str.toLowerCase()
}

spinalCase('Teletubbies say Eh-oh')
