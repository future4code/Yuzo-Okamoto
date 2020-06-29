export function pascalCase(str) {
  // Check type of str and returns false case not string or undefined/null/empty
  if (
    typeof str !== 'string' ||
    str === '' ||
    str === undefined ||
    str === null
  ) {
    return false;
  }

  let newStr = str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  return newStr;
}
