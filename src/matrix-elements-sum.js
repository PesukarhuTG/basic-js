const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let columnCount = matrix[0].length;
  let counter = 0;

  //проходимся по столбцам (i - столбец)
  for (let i = 0; i < columnCount; i++) {
    //проходимся по всем элементам текущего столбца (j - строка)
    for (let j = 0; j < matrix.length; j++) {
      //если нашли элемент, равный 0, то выходим
      if (matrix[j][i] === 0) {
        break;
      } else {
        //если не равен 0, то считаем
        counter += matrix[j][i];
      }
    }
  }

  return counter;
}

module.exports = {
  getMatrixElementsSum
};
