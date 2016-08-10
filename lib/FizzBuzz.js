var FizzBuzz = function () {
    var tab = [];
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            tab.push("FizzBuzz")
        }
        else if (i % 3 === 0) {
            tab.push("Fizz")
        }
        else if (i % 5 === 0) {
            tab.push("Buzz")
        }
        else tab.push(i)
    }
    return tab;
};


module.exports = FizzBuzz;
