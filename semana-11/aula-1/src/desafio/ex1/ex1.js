export function sortArrayNumber(arr) {
  // Check if arr is an Array
  if (!Array.isArray(arr)) {
    return false;
  }

  // Check if arr has only numbers
  if (arr.some((num) => typeof num !== 'number')) {
    return false;
  }

  // Sort arr without sort()
  let array = [...arr];
  let sortedArray = [];

  do {
    let min = Infinity;
    let index = -1;
    array.forEach((num, i) => {
      if (num < min) {
        min = num;
        index = i;
      }
    });
    sortedArray.push(min);
    array.splice(index, 1);
  } while (array.length >= 1);

  return sortedArray;
}
