let readlineSync = require('readline-sync');

let degrees = readlineSync.question('Enter degrees in Fahrenheit: ');
let degreesNum = Number(degrees);
let degreesCelsius = (degreesNum - 32) * 5/9;
console.log('It is ' + degreesCelsius + ' degrees Celsius!');
