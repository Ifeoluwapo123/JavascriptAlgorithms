
var longestCommonPrefix = function (strs) {
  let track = Number.MAX_VALUE;
  let index = 0;

  strs.forEach((e, i) => {
    if (e.length < track) {
      track = e.length;
      index = i;
    }
  });

  let count = 0;
  let compareStr = strs[index];

  while (count != track) {
    let status = true;
    let index = 0;

    strs.forEach((e) => {
      if (e.indexOf(compareStr) == -1) {
        status = false;
      } else if (index != 0 || index != e.indexOf(compareStr)) status = false;
    });

    if (status) break;
    else compareStr = compareStr.substring(0, compareStr.length - 1);

    count++;
  }

  return compareStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["reflower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "fkow"]));