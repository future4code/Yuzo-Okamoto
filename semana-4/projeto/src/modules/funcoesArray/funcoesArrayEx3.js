export const funcoesArrayEx3 = () => {
    const pessoas = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]

    // função de checagem de embarque
    const checkPessoas = (array) => {
        const result = {
            permitidas: [],
            negadas: []
        }

        // itera o array do parâmetro
        array.forEach(arr => {

            // grava as pessoas permitidas e negadas em arrays diferentes
            if (arr.idade > 14 && arr.idade < 60 && arr.altura >= 1.5) {
                result.permitidas.push(arr)
            }
            else {
                result.negadas.push(arr)
            }
        })

        // mostra os arrays gerados na checagem no console
        console.log("Pessoas permitidas:")
        console.table(result.permitidas)
        console.log("----------------------------------")
        console.log("Pessoas negadas: ")
        console.table(result.negadas)
    }

    // chama a função de checagem
    checkPessoas(pessoas)
}