/**check if the sequence of integer in array is geometric or arithmetic */
function arithGeo(arr) {
  const arithDiff = arr[1] - arr[0]
  const geoRatio = arr[1] / arr[0]
  var arithRes = 0,
    geoRes = 0

  for (var i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== arithDiff) arithRes++
    if (arr[i] / arr[i - 1] !== geoRatio) geoRes++
  }

  if (arithRes === 0) return 'arithmetic'
  if (geoRes === 0) return 'geometric'
  if (arithRes !== 0 && geoRes !== 0) return false
} 

module.exports = arithGeo
