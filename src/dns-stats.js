const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let reverseDomains = [];

  //разделяем наши имена и разворачиваем
  for (let i = 0; i < domains.length; i++) {
    reverseDomains.push(domains[i].split('.').reverse());
  }

  for (let i = 0; i < reverseDomains.length; i++) {
    let dnsName = '';
    for (let j = 0; j < reverseDomains[i].length; j++) {
      //создаем имя для каждого подэлемента (накопительный эффект)
      dnsName += `.${reverseDomains[i][j]}`;

      //если имя уже существует, увеличиваем счетчик. Если нет - записываем в объект и  счетчик = 1
      result[dnsName] = (result[dnsName]) ? result[dnsName] + 1 : 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
