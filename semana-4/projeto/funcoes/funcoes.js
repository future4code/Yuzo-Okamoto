/*  
    ========================
        Projeto Semana 4
    ========================    
*/

console.log("Execute os exercícios chamando sua respectiva função:\nex1() e ex2()");

//  Funções

/* Exercício 1 */
// Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função.

const ex1 = () => {
    const randArray = [];
    
    // gera um número pseudo-aleatório entre 1 e 10 para limitar o tamanho do array randArray
    let arraySize = Math.floor(Math.random() * 10);

    // cria uma quantidade delimitada de valores aleatórios entre 1 e 100 para randArray
    for (let i = 0; i < arraySize; i++) {
        randArray[i] = Math.floor(Math.random() * 100);
    }

    const data = {
        smallest: Infinity,
        small: Infinity,
        biggest: -Infinity,
        big: -Infinity
    };
    
    // varre um array recebido e armazena no objeto data os dois menores e maiores valores
    const findExtremes = (array) => {
        for (num of array) {
            if (num < data.smallest) {
                data.small = data.smallest;
                data.smallest = num;
            }
            else if (num < data.small) {
                data.small = num;
            }
            
            if (num > data.biggest) {
                data.big = data.biggest;
                data.biggest = num;
            }
            else if (num > data.big) {
                data.big = num;
            }
        }
        console.log(`Segundo maior e menor valores são: ${data.big} | ${data.small}`);
    }

    findExtremes(array);
}



/* Exercício 2 */
// Escreva uma função não nomeada que faça um `alert("Hello Future4");`. Em seguida, invoque essa função.

const ex2 = () => {
    const greet = (msg) => {
        alert(msg);
    }

    const msg = "Hello Labenu!";

    greet(msg);
}