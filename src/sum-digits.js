const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let arr = String(n).split(''); //приводим число к строке и превращаем в массив из отдельных цифр

  //суммируем все значения
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }

  //если полученная сумма больше 1 знака, то запускаем рекурсию
  return (sum > 9) ? getSumOfDigits(sum) : sum;
}

module.exports = {
  getSumOfDigits
};
