const factorialOfNumber = require("../factorial/index");
const ratioOfNumbers = require("../ratio/index");

let ratioAndFactorial = (num, num1, num2) => {
  let factorial = factorialOfNumber(num2);
  let ratio = ratioOfNumbers(num, num1);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
