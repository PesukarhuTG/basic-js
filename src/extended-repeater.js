const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];

  const createSubString = () => {
    let substring = [];

    for (let j = 0; j < (options.additionRepeatTimes || 1); j++) {

      if (options.addition === undefined) {
        options.addition = '';
      }

      substring.push(`${String(options.addition)}`)
    }

    return substring.join(options.additionSeparator || '|');
  };

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    result.push(`${str}${createSubString()}`)
  }

  //console.log(result.join(options.separator || '+'));
  return result.join(options.separator || '+');
}

module.exports = {
  repeater
};
