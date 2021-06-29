//palindrome
function palindrome(str) {
  const regis = /[\W_]/g;
  //const reg = /[^A-Za-b0-9]/g;

  str = str.toLowerCase().replace(regis, "");
  console.log(str);
  var len = str.length;

  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome("nOo+n"));
