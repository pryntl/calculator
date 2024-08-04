//calculator
let calculator = {
    // optional numbers
    num1: 100,
    num2: 75,
  };
  // mathematics symbols
  let plus = calculator.num1 + calculator.num2,
    minus = calculator.num1 - calculator.num2,
    minus2 = calculator.num2 - calculator.num1,
    division = calculator.num1 / calculator.num2,
    division2 = calculator.num2 / calculator.num1,
    multiplication = calculator.num1 * calculator.num2,
    remainder = calculator.num1 % calculator.num2,
    remainder2 = calculator.num2 % calculator.num1;
    //printing the results
  console.log("numbers:" , calculator.num1, "," ,calculator.num2);
  console.log("plus:", plus);
  console.log("minus(a-b):", minus);
  console.log("minus(b-a):", minus2);
  console.log("division(a/b):", division.toFixed(2));
  console.log("division (b/a):" , division2);
  console.log("multiplication:", multiplication);
  console.log("remainder(a%b):", remainder);
  console.log("remainder(b%a):", remainder2);