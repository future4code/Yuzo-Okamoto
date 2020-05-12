export const logicaEx5 = () => {
    // recebe os números para comparação
    const numA = Number(prompt("Informe o primeiro número"));
    const numB = Number(prompt("Informe o segundo número"));

    // função que encontra o maior número
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

    // função que descobre se são divisíveis entre si
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

    // função que calcula a diferença entre os números
    const findDiff = (a, b) => {
        let diff = a - b;
        if (diff < 0) {
            diff *= -1;
        }
        console.log(`A diferença entre eles é ${diff}`);
    }

    // exibe os números informados e chama as funções de análise
    console.log(`Números: ${numA} e ${numB}`);
    findGreat(numA, numB);
    checkMod(numA, numB);
    findDiff(numA, numB);
}