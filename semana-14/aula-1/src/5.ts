function calculateNumbers(firstNum: number, secondNum: number): void {
  const sum = firstNum + secondNum;
  const subtraction = firstNum - secondNum;
  const multiplication = firstNum * secondNum;
  const biggest = firstNum > secondNum ? firstNum : secondNum;

  console.log(sum);
  console.log(subtraction);
  console.log(multiplication);
  console.log(biggest);
}

calculateNumbers(3, 5);
