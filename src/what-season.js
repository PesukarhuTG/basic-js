const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  let timeOfTheYear = '';

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    //если не принадлежит объекту Даты или передали объект
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month > 1 && month < 5) {
    timeOfTheYear = seasons[1];
  } else if (month > 4 && month < 8) {
    timeOfTheYear = seasons[2];
  } else if (month > 7 && month < 11) {
    timeOfTheYear = seasons[3];
  } else {
    timeOfTheYear = seasons[0];
  }

  return timeOfTheYear;
}

module.exports = {
  getSeason
};
