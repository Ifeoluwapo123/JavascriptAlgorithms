/**
 * insert a "-" btw 2 odd numbers
 * 
 * **/
function insertDash(str) {
  var newstr = ''
  for (var i = 0; i < str.length - 1; i++) {
    if (Number(str[i] % 2) !== 0 && Number(str[i + 1]) % 2 !== 0)
      newstr += '-' + str[i + 1]
    else newstr += str[i + 1]
  }
  return str[0] + newstr
}

console.log(insertDash('1324579'))

module.exports = insertDas
