const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) 0;

  let counter = 0;
  let mainString = (s1.length > s2.length) ? s1.split('') : s2.split('');
  let comparedStr = (s1.length <= s2.length) ? s1 : s2;

  //пробегаемся по сравниваемой строке и проверяем вхождение в главную строку
  for (let i = 0; i < comparedStr.length; i++) {
    let index = mainString.indexOf(comparedStr[i]);

    if (index > -1) {
      counter++;
      mainString[index] = '';
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
