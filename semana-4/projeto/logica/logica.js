/*  
    ========================
        Projeto Semana 4
    ========================    
*/

//  Lógica de programação

/* Exercício 1

Para percorrer/iterar uma lista pode-se usar for of; forEach(); filter();

*/

// Códificação do exercício 1
const ex1 = () => {
    const array = [0,1,2,3,4,5];

    // for of
    for (num of array) {
        console.log(num);
    }

    console.log("-----");

    // forEach()
    const sweepArray = (num) => {
        console.log(num);
    }

    array.forEach(sweepArray);

    console.log("-----");

    // filter()
    array.filter(sweepArray);
}



/* Exercício 2

a) false
b) false
c) false
d) true
e) true

*/



/* Exercício 3

Não funciona, tem alguns erros: constante não está recebendo o prompt(); loop while sem incremento do contador vai gerar loop infinito e comparador deve ser menor e não menor ou igual. 

*/

// Codificação do exercício 3
const ex3 = () => {
    const quantidadeDeNumerosPares = prompt("Informe N");
    let i = 0;

    while (i < quantidadeDeNumerosPares) {
        console.log(i*2)
        i++;
    }
}



/* Exercício 4 */

// Codificação do exercício 4
const ex4 = () => {
    const a = prompt("Informe o tamanho do lado");
    const b = prompt("Informe o tamanho do lado");
    const c = prompt("Informe o tamanho do lado");

    const checkType = (a, b, c) => {
        if (a === b && b === c) {
            console.log(`Triângulo equilátero: a = ${a}; b = ${b}, c = ${c} `)
        }
        else if ((a === b && b !== c) || (a !== b && b === c)) {
            console.log(`Triângulo isósceles: a = ${a}; b = ${b}, c = ${c} `)
        }
        else {
            console.log(`Triângulo escaleno: a = ${a}; b = ${b}, c = ${c} `)
        }
    }

    checkType(a, b, c);
}



/* Exercício 5 */

// Codificação do exercício 4
const ex5 = () => {
    const numA = Number(prompt("Informe o primeiro número"));
    const numB = Number(prompt("Informe o segundo número"));

    const findGreat = (a, b) => {
        if (a > b) {
            console.log(`O maior é: ${a}`);
        }
        else if (a < b) {
            console.log(`O maior é: ${b}`);
        }
        else {
            console.log(`Ambos são iguais: ${a}`);
        }
    }

    const checkMod = (a, b) => {
        if (a % b === 0) {
            console.log(`${a} é divisível por ${b}`);
        }
        else if (b % a === 0) {
            console.log(`${a} é divisível por ${b}`);
        }
        else {
            console.log(`Não são divisíveis entre si`);
        }
    }

    const findDiff = (a, b) => {
        let diff = a - b;
        if (diff < 0) {
            diff *= -1;
        }
        console.log(`A diferença entre eles é ${diff}`);
    }

    findGreat(numA, numB);
    checkMod(numA, numB);
    findDiff(numA, numB);
}