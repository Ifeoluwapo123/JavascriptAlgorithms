const moreZeros = function (nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    counter++;
    if (nums[i] == 0) {
      nums.splice(i, 1);
      i--;
      nums.push(0);
    }

    if (counter == nums.length) break;
  }

  console.log(nums);
};

var moveZeroes = function (nums) {
  nums.forEach((item) => {
    if (item === 0) nums.push(...nums.splice(nums.indexOf(item), 1));
  });

  console.log(nums);
};


moveZeroes([0, 1, 0, 3, 12]);
moreZeros([5, 1, 0, 0, 12]);
