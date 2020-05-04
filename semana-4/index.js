/*
========== Interpretação ==========

----- Exercício 1 -----

(a)
    array[]

(b)
    array[0,0,1,2,3]

(c)
    array[0,0,1,2,3,0,1,2,3,4,5,]



----- Exercício 2 -----

(a)
    0
    2

(b)
    Sim, pois a função compara o valor e tipo dos dois argumentos



----- Exercício 3 -----

    A função addAndMultiplyArray recebe um array e retorna outro array que contém:
        a soma de todos os itens do array informado na posição 0
        a multiplicação de todos os itens do array informado na posição 1

*/



// ========== Exercícios de Código ===========

// Exercício 4

// (a) Calcula a idade humana de cachorro
{
const myDogAge = humanAge => {

    if (humanAge !== undefined) {
        const dogAge = humanAge * 7;
        return (dogAge);
    }
};

console.log("My dog is 6 years old, which is equal to", myDogAge(6), "years in human age."); // Meu cachorro tem 6 anos, o que equivalem a 42 anos humanos
}

// (b) Unir dados informados em uma string atraves de funcao
{
const concatPersonInfo = (name, age, address, isStudent) => {

    let personResume = "";

    personResume += ("My name is " + name + ", ");
    personResume += ("I am " + age + " years old, ");
    personResume += ("I live in " + address + " and ");

    if (isStudent === true) {
        personResume += ("I'm a student.");
    } else {
        personResume += ("I'm not a student.");
    }
    
    return personResume;
};

console.log(concatPersonInfo("John" , 30, "7th Street California", false));
}


// Exercício 5
{
const findCentury = year => {

    if (year !== undefined && year >= 1000 && year <= 2020) {
        let century = Math.floor(year / 100);

        if (year % 100 !== 0) {
            century++;
        }

        let romanFirst = century.toString()[0];
        let romanSecond = century.toString()[1];
        let centuryRoman = "";

        const findFirstRomanLetter = (romanFirst) => {

            switch(Number(romanFirst)) {
                case 1:
                    return ("X");
                    break;
                case 2:
                    return ("XX");
                    break;
                default:
                    return ("err");
            }
        }

        const findSecondRomanLetter = (romanSecond) => {
        
            switch(Number(romanSecond)) {
                case 0:
                    return ("");
                    break;
                case 1:
                    return ("I");
                    break;
                case 2:
                    return ("II");
                    break;
                case 3:
                    return ("III");
                    break;
                case 4:
                    return ("IV");
                    break;
                case 5:
                    return ("V");
                    break;
                case 6:
                    return ("VI");
                    break;
                case 7:
                    return ("VII");
                    break;
                case 8:
                    return ("VIII");
                    break;
                case 9:
                    return ("IX");
                    break;
                default:
                    return ("err");
            }
        }

        centuryRoman += findFirstRomanLetter(romanFirst);
        centuryRoman += findSecondRomanLetter(romanSecond);
        
        return centuryRoman;
    }
};

console.log("O ano 1753 pertence ao século", findCentury(1753));
}


// Exercicio 6

// (a)
{
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

const calcArraySize = array => {
    return (array.length);
}

console.log(calcArraySize(array));
}

// (b)
{
const isNumEven = num => {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log("O número 10 é par?\nResposta:", isNumEven(10));
}


// (c)
{
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

const countEven = array => {
    let count = 0;
    for (let num of array) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log("O array tem", countEven(array), "número pares.");
}


// (d)
{
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

const isNumEven = num => {      // função do exercício (c)
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const countEven = array => {
    let count = 0;

    for (num of array) {
        if (isNumEven(num) === true) {
            count++;
        }
    }
    return count;
}

console.log("O array tem",countEven(array),"número pares.");
}