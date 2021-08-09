/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let result = matrix.length,
    newArr = Array.from(matrix),
    index = 0;

  while (result != index) {
    const arr = [];

    for (let i = newArr.length - 1; i > -1; i--) {
      arr.push(newArr[i][index]);
    }

    matrix.shift();
    matrix.push(arr);

    index++;
  }

  return (newArr.length = 0), matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
