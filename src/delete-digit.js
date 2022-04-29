const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = [];

  //разбиваем число на массив отдельных цифр
  let arrFromNum = Array.from(String(n));

  for (let i = 0; i < arrFromNum.length; i++) {
    arrFromNum.splice(i, 1); //удаляем i элемент
    result.push([...arrFromNum]); //остаток массива без этого элемента фиксируем
    arrFromNum = Array.from(String(n)); //восстанавливаем массив для удаления следующего i
  }

  //формируем полученные числа
  for (let i = 0; i < result.length; i++) {
    result[i] = +result[i].join('');
  }

  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
