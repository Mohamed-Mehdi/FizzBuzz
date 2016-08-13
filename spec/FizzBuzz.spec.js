var FizzBuzz = require('../lib/FizzBuzz').FizzBuzz;
var readlineSync = require('readline-sync');

/**Knowing that our prog starts from 1 and not from 0, when we made the loop
 we should check the value of (i-1), because our function is a tab starting from 1 and the
 index of 1 is 0*/

// Wait for user's response.
var n1 = parseInt(readlineSync.question('n1 : '));
var n2 = parseInt(readlineSync.question('n2 : '));

describe("FizzBuzz Test", function () {
    it("should have 100 elements", function () {
        expect(FizzBuzz(n1, n2).length).toBe(100);
    });
    it("should have 1 as first element", function () {
        expect(FizzBuzz(n1, n2)[0]).toBe(1);
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