let readlineSync = require('readline-sync');

let ordinal = function(digit) {
  digitNum = Number(digit);
  let lastDigit = digitNum % 10;
  if (lastDigit === 1) {

  return digit + "st";
  }
  else if (lastDigit === 1) {
    return digit + "nd";
  }
  else if (lastDigit === 3) {
    return digit + "rd";
  }

return lastDigit;
}

let input = readlineSync.question("Enter a digit: ");

let value = ordinal(input);

console.log(value);
