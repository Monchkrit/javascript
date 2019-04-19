let readlineSync = require('readline-sync');

let ordinal = function(digit) {
  let digitNum = Number(digit);
  let lastDigit = digitNum % 10;
  let lastTwoDigits = digitNum % 100;
  
  if (lastTwoDigits > 10 && lastTwoDigits < 20) {
    return digit + "th";
  }
  else if (lastDigit === 1) {
    return digit + "st";
  }
  else if (lastDigit === 1) {
    return digit + "nd";
  }
  else if (lastDigit === 3) {
    return digit + "rd";
  }
  else {
    return digit + "th";
  }

return lastDigit;
}

let input = readlineSync.question("Enter a digit: ");

let value = ordinal(input);

console.log(value);
