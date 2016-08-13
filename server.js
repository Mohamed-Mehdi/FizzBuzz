var FizzBuzz = require('./lib/FizzBuzz').FizzBuzz;
var readlineSync = require('readline-sync');

// Wait for user's response. 
var n1 = readlineSync.questionInt('Enter first number : ');
var n2 = readlineSync.questionInt('Enter second number : ');

console.log(FizzBuzz(n1, n2));

