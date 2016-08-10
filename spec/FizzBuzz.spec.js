var FizzBuzz = require('../lib/FizzBuzz');

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

    it("should return Fizz when the number is multiple of 3", function () {
        for (var i = 3; i < 100; i += 3) {
            expect(FizzBuzz()[i - 1]).toBe("Fizz");
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