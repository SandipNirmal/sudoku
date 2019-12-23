/**
 * Returns number between 0 to 9 which does not exists in passed array.
 *
 * @param {array} rowArr
 * @param {array} columnArr
 * @returns {number}
 */
export function getUnique(rowArr, columnArr) {
  let number = Math.ceil(Math.random() * 9);

  while (rowArr.includes(number)) {
    number = Math.ceil(Math.random() * 9);
  }

  return number;
}

/**
 * Generates 2 dimensional array for sudoku
 *
 * @returns {array}
 */
export function sudokuGenerator() {
  const length = 9;
  const sudoku = [];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (!sudoku[i]) {
        sudoku[i] = [];
      }
      sudoku[i][j] = getUnique(sudoku[i], getColumn(sudoku, j));
    }
  }

  return sudoku;
}

/**
 * Returns particular column from array
 *
 * @param {array} arr
 * @param {number} column
 *
 * @returns {array}
 */
export function getColumn(arr, index = 0) {
  return arr.map(item => item[index]);
}

/**
 * Returns repeated items in given array
 *
 * @param {array} arr
 * @returns {array}
 */
function getDuplicate(arr) {
  return arr.filter(item => arr.indexOf(item) !== arr.lastIndexOf(item));
}
