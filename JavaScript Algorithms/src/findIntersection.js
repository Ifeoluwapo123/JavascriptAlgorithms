/*
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will 
contain 2 elements: the first element will represent a list of comma-separated numbers sorted in 
ascending order, the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing the numbers that 
occur in elements of strArr in sorted order. If there is no intersection, return the string false.
example
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
*/

function FindIntersection(strArr) { 
    // code goes here  
    const left = strArr[0].split(', '); 
    const right = strArr[1].split(', ');
    var result = [];

    for(var i = 0; i < left.length; i++){
        for(var j = 0; j < right.length; j++){
            if(left[i] === right[j]){
                result.push(left[i]);
            }
        }
    }

    strArr = result.join();
    return strArr; 
}
     
  // keep this function call here 
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));