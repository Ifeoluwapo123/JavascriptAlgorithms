var isValidSudoku = function (board) {
  if (!checkRow(board)) return false;
  if (!validate(sliceOne(board, 0, 3))) return false;
  if (!validate(sliceOne(board, 3, 6))) return false;
  if (!validate(sliceOne(board, 6, 9))) return false;

  return true;
};

const sliceOne = (arrayCopy, start, end) => {
  const arr = [];

  for (let index = 0; index < arrayCopy.length; index++) {
    arr.push(arrayCopy[index].slice(start, end));
  }

  return arr.flat(Infinity);
};

const validate = (arr) => {
  // 3*3 matrix
  let start = 0,
    end = 9,
    tracker = 0,
    isValid = true,
    arrTrack = [];

  while (isValid) {
    arrTrack = arr.slice(start, end).filter((data) => data != ".");
    isValid = new Set(arrTrack).size === arrTrack.length;

    if (isValid) {
      start += 9;
      end += 9;
      arrTrack.length = 0;
    }

    tracker++;

    if (tracker > 2) break;
  }

  //column validity check
  let counter = 0;
  while (counter < 3) {
    const column = [];
    for (let i = counter; i < arr.length; i += 3)
      if (arr[i] != ".") column.push(arr[i]);

    if (new Set(column).size !== column.length) return false;
    counter++;
  }
  //end

  return isValid;
};

//row validity check
const checkRow = (arr) => {
  const newArr = Array.from(arr);

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].filter((data) => data != ".");
    if (new Set(newArr[i]).size !== newArr[i].length) return false;
  }

  return (newArr.length = 0), true;
};

//test cases
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
