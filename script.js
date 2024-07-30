let calculator = {
    num1: 100,
    num2: 75,
  };
  let plus = calculator.num1 + calculator.num2,
    minus = calculator.num1 - calculator.num2,
    division = calculator.num1 / calculator.num2,
    multiplication = calculator.num1 * calculator.num2,
    remainder = calculator.num1 % calculator.num2;
  console.log("numbers:" , calculator.num1, "," ,calculator.num2);
  console.log("plus:", plus);
  console.log("minus:", minus);
  console.log("division:", division.toFixed(2));
  console.log("multiplication:", multiplication);
  console.log("remainder:", remainder);
  