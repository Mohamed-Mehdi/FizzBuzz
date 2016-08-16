var FizzBuzz = require('./lib/FizzBuzz').FizzBuzz;
var readlineSync = require('readline-sync');

if (readlineSync.keyInYN('Do you want configure the RunTime (first and second number) or use the standard number (3,5) ?')) {
    var n1 = readlineSync.questionInt('Enter first number : ');
    var n2 = readlineSync.questionInt('Enter second number : ');

    n1 = n1 > 0 ? n1 : 3;
    n2 = n2 > 0 ? n2 : 5;
    
    console.log(FizzBuzz(n1, n2));
} else {
    console.log(FizzBuzz(3, 5))
}
 
