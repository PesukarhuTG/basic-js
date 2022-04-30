const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const filesCounter = {};
  let fileName = '';

  for (let i = 0; i < names.length; i++) {
    if (filesCounter[names[i]]) { //если имя файла уже существует
      fileName = `${names[i]}(${filesCounter[names[i]]})`; //формируем новое имя файла
      filesCounter[fileName] = 1; //присваимаем значение 1 тк новое (для себя)
      filesCounter[names[i]]++; //а счетчик существующего увеличиваем (для себя)
    } else {
      fileName = names[i];
      filesCounter[names[i]] = 1;
    }
  }

  console.log(Object.keys(filesCounter));
  return Object.keys(filesCounter);
}

module.exports = {
  renameFiles
};
