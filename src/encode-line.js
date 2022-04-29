const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = str.split('');

  for (let i = 0; i < result.length; i++) {
    result[i] = Array.from(result[i]); //создаем подмассив из каждой буквы
    result[i].unshift(1); //добавляем счетчик
  }

  for (let i = 0; i < result.length - 1;) {
    if (result[i][1] === result[i + 1][1]) {
      result[i][0]++; //увеличиваем счетчик
      result.splice(result.indexOf(result[i + 1]), 1); //удаляем дубль-элемент
      i = i;
    } else {
      i++;
    }
  }

  //избавляемя от '1' перед элементами
  for (let i = 0; i < result.length; i++) {
    if (result[i][0] === 1) {
      result[i] = [result[i][1]];
    }
    result[i] = result[i].join('');
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
