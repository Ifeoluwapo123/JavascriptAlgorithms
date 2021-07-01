//display second largest and smallest
function SecGrtLow(arr){
    arr = arr.sort();
    uniqueArr = [...new Set(arr)];
    return uniqueArr[1]+ " "+uniqueArr[uniqueArr.length-2];
}

console.log(SecGrtLow([2,1,2,4,4,7,6]));