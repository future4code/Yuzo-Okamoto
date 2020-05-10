export const logicaEx3 = () => {

    // Exercício de Interpretação de Código
    console.log(`Não funciona, tem alguns erros: constante não está recebendo o prompt(); loop while sem incremento do contador vai gerar loop infinito e comparador deve ser menor e não menor ou igual.`);

    // Exercício de Codificação
    const quantidadeDeNumerosPares = prompt("Informe N");
    let i = 0;

    console.log(`Os ${quantidadeDeNumerosPares} primeiros números pares: `);
    while (i < quantidadeDeNumerosPares) {
        console.log(i*2)
        i++;
    }
}