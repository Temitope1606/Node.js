// A Function called calculate with three parameters; two numbers and one operator
const calculate = (num1, num2, operator) => {
  // conditionals to perform operations
  switch (operator) {
    case "add":
      return num1 + num2;
      break;
    case "subtract":
      return num1 - num2;
      break;
    case "multiply":
      return num1 * num2;
      break;
    case "divide":
      return num1 / num2;
      break;

    default:
      return "Wrong Operator chosen!!";
      break;
  }
};
if (
  typeof num1 === null ||
  typeof num1 === undefined ||
  typeof num2 === null ||
  typeof num2 === undefined
) {
  console.log("Invalid Value!!");
}
addition = calculate(5, 3, "add");
console.log("ADDITION: ", addition);

division = calculate(10, 2, "divide");
console.log("DIVISION: ", division);

division = calculate(10, null, "divide");
console.log("DIVISION: ", division);

// console.log(calculate(null,null, "add"))
