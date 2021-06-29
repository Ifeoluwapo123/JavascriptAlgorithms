/**
 * @param  {//sequence [0, 1, 1, 2, 3, 5, 13, 21, ...]
 * num as the index} num
 * @returns 
 */
function fibonacci(num) {
  if (num < 2) return num
  return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(2))

module.exports = fibonacci
