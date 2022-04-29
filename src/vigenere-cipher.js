const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let inputMessage = Array.from(String(message).toLowerCase());
    let arrayFromKey = Array.from(String(key).toLowerCase());
    let charCodeInputMessage = [];
    let encode = [];

    //переводим символы в charCode
    for (let i = 0; i < inputMessage.length; i++) {
      charCodeInputMessage.push(inputMessage[i].charCodeAt());
    }

    //пробегаемся по массиву исходных charCodes, проверяя только буквы
    for (let i = 0, j = 0; i < charCodeInputMessage.length; i++) {
      if (charCodeInputMessage[i] > 96 && charCodeInputMessage[i] < 123) {
        let newChar = (charCodeInputMessage[i] + arrayFromKey[j].charCodeAt() - 97) > 122 ?
          (charCodeInputMessage[i] + arrayFromKey[j].charCodeAt() - 97 - 26) :
          (charCodeInputMessage[i] + arrayFromKey[j].charCodeAt() - 97);

        encode.push(newChar);
        j++;
        j = (j > arrayFromKey.length - 1) ? (j - arrayFromKey.length) : j;
      } else {
        //где не буквы, просто переносим код
        encode.push(charCodeInputMessage[i]);
      }
    }

    //из новых charCodes геренируем буквы
    for (let i = 0; i < encode.length; i++) {
      encode[i] = String.fromCharCode(encode[i]);
    }

    //console.log(encode.join('').toUpperCase());
    return encode.join('').toUpperCase();

  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
  }
}

module.exports = {
  VigenereCipheringMachine
};
