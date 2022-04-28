const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  //ИЗ ТЕОРИИ: если дисков n, то кол-во перестановок turns = 2^n - 1
  result.turns = Math.pow(2, disksNumber) - 1;
  //ИЗ УСЛОВИЯ: turnsSpeed - это кол-во перестановок в час
  result.seconds = Math.floor(result.turns * 3600 / turnsSpeed);
  return result;
}

module.exports = {
  calculateHanoi
};
