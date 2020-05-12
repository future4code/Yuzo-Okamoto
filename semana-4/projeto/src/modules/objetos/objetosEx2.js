export const objetosEx2 = () => {

    // recebe os lados do retângulo
    let ladoA = Number(prompt("Informe o tamanho do lado A"));
    let ladoB = Number(prompt("Informe o tamanho do lado B"));

    // função geradora de objeto que grava os dados calculados do retângulo
    const criaRetangulo = (lado1, lado2) => {
        return {
            largura: lado1,
            altura: lado2,
            perimetro: 2 * (lado1 + lado2),
            area: (lado1 * lado2)
        }
    };

    // chama a função de geração de objeto e exibe o resultado no console
    console.log(`Lados do retângulo: ${ladoA} e ${ladoB}`, criaRetangulo(ladoA, ladoB));
}