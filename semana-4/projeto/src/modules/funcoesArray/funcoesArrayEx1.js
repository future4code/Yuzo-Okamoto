export const funcoesArrayEx1 = () => {
    const array = [
        { nome: "Pedro", idade: 20 },
        { nome: "João", idade: 10 },
        { nome: "Paula", idade: 12 },
        { nome: "Artur", idade: 89 } 
    ]

    // função de checagem de idade
    const checkAge = (array) => {

        // grava os adultos em um array
        const adult = array.filter(arr => arr.idade >= 20)

        // grava os jovens em um array
        const young = array.filter(arr => arr.idade < 20)

        // apresenta os arrays no console
        console.log("Adultos: ")
        console.table(adult)
        console.log("-----------------------------")
        console.log("Jovens: ")
        console.table(young)
    }
    // chama a função com o array
    checkAge(array)
}