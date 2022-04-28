const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

//суть для себя: мы подсчитываем, какая максимальная вложенность в массиве, а не считаем эти вложенности суммарно
//поэтому юудет текущая вложенность и вложенность каждого элемента, которые сравниваются и выводится максимальная

class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        let currentDepth = 1 + this.calculateDepth(item);

        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
    }
    //console.log('maxDepth ', maxDepth);
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
