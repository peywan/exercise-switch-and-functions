// 1.1 Skriv funktionerna som anropas i myCalculator så att
// myCalculator kan fungera.

let myAddFunction = function (n1, n2) {
  return n1 + n2;
};
let myDivisionFunction = function (n1, n2) {
  if (n2 === 0) {
    return "cant divide by 0";
  } else {
    return n1 / n2;
  }
  let myMultiplyFunction = function (operator, n1, n2) {
    return n1 * n2;
  };
  let mySubtractFunction = function (operator, n1, n2) {
    return n1 - n2;
  };

  // 1.2 Gör om myCalculator så att den använder if och else

  function myCalculator(operator, num1, num2) {
    switch (operator) {
      case "+":
        return myAddFunction(num1, num2);

      case "-":
        return mySubtractFunction(num1, num2);

      case "*":
        return myMultiplyFunction(num1, num2);

      case "/":
        return myDivisionFunction(num1, num2);
        // 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
      default:
        return "Error operator not found!";
    }
  }
};

let result = myCalculator("-", 42, 2);
console.log(result);
