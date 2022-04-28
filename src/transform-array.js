const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) {
    return arr;
  }

  const workArr = [...arr];

  for (let i = 0; i < workArr.length; i++) {

    //если нашли условие и оно В конце массива
    if ((workArr[i] === '--discard-next' && workArr.indexOf('--discard-next') === (workArr.length - 1)) ||
      (workArr[i] === '--double-next' && workArr.indexOf('--double-next') === (workArr.length - 1))) {
      //удаляем условие из массива
      workArr.splice(-1, 1);
    }

    //если нашли условие, оно НЕ конце массива И рядом есть другое условие
    if (workArr[i] === '--discard-next' &&
      workArr.indexOf('--discard-next') !== (workArr.length - 1) &&
      (workArr[i + 2] === '--double-prev' || workArr[i + 2] === '--discard-prev')) {
      //удаляем условие, элемент после него и второе условие
      workArr.splice(workArr.indexOf('--discard-next'), 3);
    }


    //если нашли условие и оно НЕ конце массива
    if (workArr[i] === '--discard-next' && workArr.indexOf('--discard-next') !== (workArr.length - 1)) {
      //удаляем условие и элемент после него
      workArr.splice(workArr.indexOf('--discard-next'), 2);
    }

    //если нашли условие и оно В начале массива
    if ((workArr[i] === '--discard-prev' && workArr.indexOf('--discard-prev') === 0) ||
      (workArr[i] === '--double-prev' && workArr.indexOf('--double-prev') === 0)) {
      //удаляем условие из массива
      workArr.splice(0, 1);
    }

    //если нашли условие и оно НЕ в начале массива
    if (workArr[i] === '--discard-prev' && workArr.indexOf('--discard-prev') !== 0) {
      //удаляем условие и элемент до него
      workArr.splice(workArr.indexOf('--discard-prev') - 1, 2);
    }

    //если нашли условие и оно НЕ конце массива
    if (workArr[i] === '--double-next' && workArr.indexOf('--double-next') !== (workArr.length - 1)) {
      //заменяем условие на элемент после него
      workArr[i] = workArr[i + 1];
    }

    //если нашли условие и оно НЕ в начале массива
    if (workArr[i] === '--double-prev' && workArr.indexOf('--double-prev') !== 0) {
      //заменяем условие на элемент до него
      workArr[i] = workArr[i - 1];
    }
  }

  console.log(workArr);
  return workArr;
}

module.exports = {
  transform
};
