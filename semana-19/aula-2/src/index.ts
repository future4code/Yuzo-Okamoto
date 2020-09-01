import validateCharacter from "./exercises/validateCharacter";
import Character from "./exercises/model/Character";

const validChar = new Character("John Doe", 1500, 100, 200);
const invalidChar = new Character("John Doe", -10, 100, 200);

const resultTrue = validateCharacter(validChar);
const resultFalse = validateCharacter(invalidChar);

console.log(`Result must be true: ${resultTrue}`);
console.log(`Result must be false: ${resultFalse}`);
