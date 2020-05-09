/*  
    ========================
        Projeto Semana 4
    ========================    
*/

console.log("Execute os exercícios chamando sua respectiva função:\nex1(), ex3(), ex4(), ex5()");

//  Lógica de programação

/* Exercício 1

Para percorrer/iterar uma lista pode-se usar for of; forEach(); filter();

*/

// Códificação do exercício 1
const ex1 = () => {
    const array = [0,1,2,3,4,5];

    // for of
    console.log(`Percorrendo array com for of: `);
    for (num of array) {
        console.log(num);
    }

    console.log(`Percorrendo array com forEach(): `);
    // forEach()
    const sweepArray = (num) => {
        console.log(num);
    }
    array.forEach(sweepArray);

    console.log(`Percorrendo array com filter(): `);
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
// Você tem que escrever um código que, dado um número N, ele imprima (no console) os N primeiros números pares

const ex3 = () => {
    const quantidadeDeNumerosPares = prompt("Informe N");
    let i = 0;

    console.log(`Os ${quantidadeDeNumerosPares} primeiros números pares: `);
    while (i < quantidadeDeNumerosPares) {
        console.log(i*2)
        i++;
    }
}



/* Exercício 4 */

// Codificação do exercício 4
//  Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: a, b, c  e retorne se ele é equilátero, isósceles ou escaleno.

const ex4 = () => {
    const a = prompt("Informe o tamanho do lado");
    const b = prompt("Informe o tamanho do lado");
    const c = prompt("Informe o tamanho do lado");

    // checa o tipo de triângulo
    const checkType = (a, b, c) => {
        // equilátero
        if (a === b && b === c) {
            console.log(`Triângulo equilátero: a = ${a}; b = ${b}, c = ${c} `)
        }
        // isósceles
        else if ((a === b && b !== c) || (a !== b && b === c)) {
            console.log(`Triângulo isósceles: a = ${a}; b = ${b}, c = ${c} `)
        }
        // escaleno
        else {
            console.log(`Triângulo escaleno: a = ${a}; b = ${b}, c = ${c} `)
        }
    }

    checkType(a, b, c);
}



/* Exercício 5 */

// Codificação do exercício 5
// Faça um programa que, dados dois números, i. indique qual é o maior, ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)

const ex5 = () => {
    const numA = Number(prompt("Informe o primeiro número"));
    const numB = Number(prompt("Informe o segundo número"));

    // encontra o maior número
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

    // descobre se são divisíveis entre si
    const checkMod = (a, b) => {
        if (a % b === 0) {
            console.log(`${a} é divisível por ${b}`);
        }
        else if (b % a === 0) {
            console.log(`${b} é divisível por ${a}`);
        }
        else {
            console.log(`Não são divisíveis entre si`);
        }
    }

    // calcula a diferença entre os números
    const findDiff = (a, b) => {
        let diff = a - b;
        if (diff < 0) {
            diff *= -1;
        }
        console.log(`A diferença entre eles é ${diff}`);
    }

    console.log(`Números: ${numA} e ${numB}`);
    findGreat(numA, numB);
    checkMod(numA, numB);
    findDiff(numA, numB);
}