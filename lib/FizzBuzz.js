//FizzBuzz take as argument the 2 numbers n1 and n2, this way it's dynamic
var FizzBuzz = function (n1, n2) {
    var tab1 = [n1, "Fizz"];
    var tab2 = [n2, "Buzz"];
    var tabToReturn = [];
    for (var i = 1; i <= 100; i++) {
        /**if the number is not divisible by each n1 and n2 then we push in tabToReturn just the number
         else we concatenate the result of the return of function divByN with the first combination and with
         the second combination.*/
        if (divByN(tab1, i) != "" || divByN(tab2, i) != "") {
            /** we concatenate the 2 strings, we have 3 possibilities :
             "Fizz"+"Buzz" = "FizzBuzz" in case i is divisible by both numbers
             "Fizz"+"" = "Fizz" in case i is divisible only by the first number
             ""+"Buzz" = "Buzz" in case i is divisible only by the second number
             */
            tabToReturn.push(divByN(tab1, i) + divByN(tab2, i));
        } else {
            tabToReturn.push(i)
        }
    }
    return tabToReturn;
};

/**this function take as argument a tab with 2 as length and a hazard number. We check if the hazard number is divisible
 by first argument of our tab. If it is, this function return the key Word (the second argument in our entry tab)
 if not, it return an empty string.*/
var divByN = function (n, i) {
    if (i % n[0] === 0) {
        return n[1]
    }
    else return ""
};


module.exports = {
    FizzBuzz: FizzBuzz
};

