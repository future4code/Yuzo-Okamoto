export const funcoesArrayEx2 = () => {
    const array = [1, 2, 3, 4, 5, 6]

    // função que gera os arrays do exercício
    const gerarArrays = (arr) => {
        const  a = [], b = [], c = []

        // itera a função do parâmetro
        for (let num of arr) {
            
            // grava os números dobrados
            a.push(num * 2)

            // grava as strings dos números triplicados
            b.push((num * 3).toString())

            // grava as strings do tipo de número, par ou ímpar
            if (num % 2 === 0) {
                c.push(` ${num} é par`)
            }
            else {
                c.push(` ${num} é ímpar`)
            }
        }
        
        // mostra os arrays gerados no console
        console.log(`(a) ${a}`)
        console.log(`(b) ${b}`)
        console.log(`(c) ${c}`)
    }
    // chama a função geradora
    gerarArrays(array)
}