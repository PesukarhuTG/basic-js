const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //Активность (т.е. скорость распада = ΔN / Δt (формула 1)
  //Активность = k* N (формула 2)
  //=> ΔN/Δt = k * N (соединяем формула 1 = формула 2)
  //=> ln(N/N0) = k * t (переписано по интегральному закону через логарифм)
  //=> t = ln(N/N0)/k (выводим нужное нам t - примерное время распада) (Формула 3)

  //HALF_LIFE_PERIOD = 0,693 / k (формула 4)
  //из нее k = 0.693 / HALF_LIFE_PERIOD

  //Подставляем в формулу 3 наш вывод из формулы 4:
  //t = ln(N/N0)/k = ln(N/N0)/(0.693 / HALF_LIFE_PERIOD)

  let log = 0.693;

  if (typeof sampleActivity !== 'string' ||
    +sampleActivity < 0 ||
    +sampleActivity === 0 ||
    isNaN(+sampleActivity)) {

    return false;

  } else {
    let k = log / HALF_LIFE_PERIOD;
    let activity = Math.log(MODERN_ACTIVITY / +sampleActivity);
    let t = Math.ceil(activity / k);

    return (t < 0) ? false : t;
  }
}

module.exports = {
  dateSample
};
