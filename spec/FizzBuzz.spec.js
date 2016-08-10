var FizzBuzz = require('../lib/FizzBuzz');

// Knowing that our prog starts from 1 and not from 0, when the made the loop
// we should check the value of (i-1), cause our function is a tab starting from 1 and the
//index of 1 is 0

describe("FizzBuzz Test", function () {
    it("should have 100 elements", function () {
        expect(FizzBuzz().length).toBe(100);
    });
    it("should have 1 as first element", function () {
        expect(FizzBuzz()[0]).toBe(1);
    });
    it("should have Buzz as last element", function () {
        expect(FizzBuzz()[FizzBuzz().length - 1]).toBe("Buzz");
    });

    it("should return FizzBuzz when the number is multiple of 3 and 5", function () {
        for (var i = 15; i < 100; i += 5) {
            if (i % 15 === 0) {
                expect(FizzBuzz()[i - 1]).toBe("FizzBuzz");
            }
        }
    });

    it("should return Fizz when the number is multiple of 3", function () {
        for (var i = 3; i < 100; i += 3) {
            if (i % 5 != 0) {
                expect(FizzBuzz()[i - 1]).toBe("Fizz");
            }
        }
    });
    it("should return Fizz when the number is multiple of 5", function () {
        for (var i = 5; i < 100; i += 5) {
            if (i % 3 != 0) {
                expect(FizzBuzz()[i - 1]).toBe("Buzz");
            }
        }
    });
});