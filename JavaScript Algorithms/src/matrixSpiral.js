var printSpiral = function (matrix) {
  // Your code here
  const result = [];
  const spiralCount = matrix[0].length + matrix.length - 1;

  let count = 4;
  let j = 1;

  if (spiralCount < count) {
    if (matrix.length == 1) return matrix[0];
    else return matrix[0].concat(matrix[1].reverse());
  }

  while (count <= spiralCount) {
    count *= j;
    j++;

    if (matrix.length == 1) {
      for (let i = 0; i < matrix[0].length; i++) result.push(matrix[0][i]);
      break;
    }

    positiveXDir(matrix, result);

    negativeYDir(matrix, result);

    negativeXDir(matrix, result);

    positiveYDir(matrix, result);
  }

  return result.filter((res) => res != undefined);
};

var positiveXDir = (arr, result) => {
  result.push(...arr.splice(0, 1)[0]);
  return arr;
};

var negativeYDir = (arr, result) => {
  return arr.map((element) => {
    result.push(element[element.length - 1]);
    element.splice(element.length - 1, 1);
    return element;
  });
};

var negativeXDir = (arr, result) => {
  result.push(...arr.splice(arr.length - 1, 1)[0].reverse());
  return arr;
};

var positiveYDir = (arr, result) => {
  let save = [];

  arr.map((element) => {
    save.unshift(element[0]);
    element.splice(0, 1);
    return element;
  });

  save.forEach((element) => {
    result.push(element);
  });

  return arr;
};

// returns [1,2,3,6,7,8,3,3,9,0,2,6,7,4,5,6,9,3,4,8]
console.log(
  printSpiral([
    [1, 2, 3, 6],
    [4, 5, 6, 7],
    [7, 8, 9, 8],
    [6, 4, 3, 3],
    [2, 0, 9, 3],
  ])
);
// returns [1,2,3,6,7,8,3,3,4,6,7,4,5,6,9,8]
console.log(
  printSpiral([
    [1, 2, 3, 6],
    [4, 5, 6, 7],
    [7, 8, 9, 8],
    [6, 4, 3, 3],
  ])
);
// returns [1,2,3,1,1,4,9,8,7,4,5,6]
console.log(
  printSpiral([
    [1, 2, 3, 1],
    [4, 5, 6, 1],
    [7, 8, 9, 4],
  ])
);
// returns [1,2,3,6,9,8,7,4,5]
console.log(
  printSpiral([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// returns [1,2,4,6,5,3]
console.log(
  printSpiral([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
// returns [1,2]
console.log(printSpiral([[1, 2]]));
