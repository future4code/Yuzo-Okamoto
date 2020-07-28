let operation: string;
let firstNum: number;
let secondNum: number;
let result: number = 0;

operation = process.argv[2];
firstNum = Number(process.argv[3]);
secondNum = Number(process.argv[4]);

if (operation === 'add') {
  result = firstNum + secondNum;
} else if (operation === 'sub') {
  result = firstNum - secondNum;
} else if (operation === 'mult') {
  result = firstNum * secondNum;
} else if (operation === 'div') {
  result = firstNum / secondNum;
}

console.log(`Resposta: ${result}`);
