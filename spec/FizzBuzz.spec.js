var FizzBuzz = require('../lib/FizzBuzz').FizzBuzz;
var readlineSync = require('readline-sync');

/**Knowing that our prog starts from 1 and not from 0, when we made the loop
 we should check the value of (i-1), because our function is a tab starting from 1 and the
 index of 1 is 0*/

var n1 = 0;
var n2 = 0;

if (readlineSync.keyInYN('Do you want configure the first and second number to run the tests or use the standard numbers (3,5) ?')) {
    n1 = readlineSync.questionInt('Enter first number : ');
    n2 = readlineSync.questionInt('Enter second number : ');
}

n1 = n1 > 0 ? n1 : 3;
n2 = n2 > 0 ? n1 : 5;

describe("FizzBuzz Test", function () {
    it("should have 100 elements", function () {
        expect(FizzBuzz(n1, n2).length).toBe(100);
    });

    it("should have a number if this number is not multiple of one of the two numbers", function () {
        for (var i = 1; i < 100; i++) {
            if (i % n1 != 0 && i % n2 != 0) {
                expect(FizzBuzz(n1, n2)[i - 1]).toBe(i);
            }
        }
    });

    it("should return FizzBuzz when the number is multiple of " + n1 + " and " + n2, function () {
        for (var i = (n1 * n2); i < 100; i += n2) {
            if (i % (n1 * n2) === 0) {
                expect(FizzBuzz(n1, n2)[i - 1]).toBe("FizzBuzz");
            }
        }
    });

    it("should return Fizz when the number is multiple of " + n1, function () {
        for (var i = n1; i < 100; i += n1) {
            if (i % n2 != 0) {
                expect(FizzBuzz(n1, n2)[i - 1]).toBe("Fizz");
            }
        }
    });
    it("should return Fizz when the number is multiple of " + n2, function () {
        for (var i = n2; i < 100; i += n2) {
            if (i % n1 != 0) {
                expect(FizzBuzz(n1, n2)[i - 1]).toBe("Buzz");
            }
        }
    });
});
console.log("--------------------------------");
console.log("tests with n1= " + n1 + " and n2= " + n2);
