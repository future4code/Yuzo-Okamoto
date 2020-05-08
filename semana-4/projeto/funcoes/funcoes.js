/*  
    ========================
        Projeto Semana 4
    ========================    
*/

console.log("Execute os exercícios chamando sua respectiva função:\nex1() e ex2()");

//  Funções

/* Exercício 1 */

const ex1 = () => {
    
    const array = [];

    for (let i = 0; i<= 4; i++) {
        array[i] = Number(prompt("Informe um valor"));
    }

    const data = {
        smallest: Infinity,
        small: Infinity,
        biggest: -Infinity,
        big: -Infinity
    };
    
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

const ex2 = () => {
    const greet = (msg) => {
        alert(msg);
    }

    const msg = "Hello Labenu!";

    greet(msg);
}