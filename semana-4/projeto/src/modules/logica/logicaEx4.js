export const logicaEx4 = () => {
    // recebe os lados do triângulo
    const a = prompt("Informe o tamanho do lado");
    const b = prompt("Informe o tamanho do lado");
    const c = prompt("Informe o tamanho do lado");

    // função de checagem do tipo de triângulo
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
    // chama a função de checagem
    checkType(a, b, c);
}