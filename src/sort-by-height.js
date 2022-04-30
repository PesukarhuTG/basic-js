const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [...arr];
  let sortedNumbers = [];

  //пробегаясь по копии массива, забираем значения для сортировки
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== -1) {
      sortedNumbers.push(result[i]);
    }
  }

  //сортируем полученный массив
  sortedNumbers.sort((a, b) => a - b);

  /*пробегаемся по копии массива и, в соответсвии с индексами, заменяем значения из сортированного массива
  i - счетчик индекса массива result, s - счетчик индекса массива sortedNumbers*/
  for (let i = 0, s = 0; i < result.length; i++) {
    if (result[i] !== -1) {
      result[i] = sortedNumbers[s];
      s++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
