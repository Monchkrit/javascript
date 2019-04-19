let readlineSync = require('readline-sync');

let degrees = readlineSync.question('Enter degress in Celsius: ');
let degreesNum = Number(degrees);
var degreesFarenheit = degreesNum * 1.8 + 32;
console.log('It is ' + degreesFarenheit + ' degrees Fahrenheit!');