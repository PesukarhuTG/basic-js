const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //глубокая копия массива
  const minesArea = JSON.parse(JSON.stringify(matrix));

  //каждый элемент обнуляем для дальнейшего расчета
  for (let subArray of minesArea) {
    for (let i = 0; i < subArray.length; i++) {
      subArray[i] = 0;
    }
  }

  //проходимся по каждой строчке исходного массива
  for (let i = 0; i < matrix.length; i++) {
    //проходимся по каждому элементу подмассива
    for (let j = 0; j < matrix[i].length; j++) {
      //2)проверяем относительно предыдущей строки
      if (matrix[i - 1] && matrix[i - 1][j] === true) minesArea[i][j] += 1;
      if (matrix[i - 1] && matrix[i - 1][j + 1] === true) minesArea[i][j] += 1;
      if (matrix[i - 1] && matrix[i - 1][j - 1] === true) minesArea[i][j] += 1;

      //1) проверяем относительно центральной строки
      //if (matrix[i] && matrix[i][j] === true) result[i][j] +=1;
      if (matrix[i] && matrix[i][j + 1] === true) minesArea[i][j] += 1;
      if (matrix[i] && matrix[i][j - 1] === true) minesArea[i][j] += 1;

      //3)проверяем относительно следующей строки
      if (matrix[i + 1] && matrix[i + 1][j] === true) minesArea[i][j] += 1;
      if (matrix[i + 1] && matrix[i + 1][j + 1] === true) minesArea[i][j] += 1;
      if (matrix[i + 1] && matrix[i + 1][j - 1] === true) minesArea[i][j] += 1;
    }
  }
  return minesArea;
}

module.exports = {
  minesweeper
};
