export const funcoesEx1 = () => {
    // cria um array de tamanho 10 com valores entre 0 e 100
    const array = Array.from({length: 10}, () => Math.floor(Math.random() * 100))

    const getResult = (arr) => {
        // organiza os elementos em ordem numérica crescente
        arr.sort((a, b) => a - b)
        // imprime array informado e resultado da pesquisa
        console.table(array)
        console.log(`Segundo menor: ${arr[1]}
Segundo maior: ${arr[arr.length - 2]}`)
    }
    // chama a função de pesquisa
    getResult(array)
}