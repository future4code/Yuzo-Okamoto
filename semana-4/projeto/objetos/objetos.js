/*  
    ========================
        Projeto Semana 4
    ========================    
*/

console.log("Execute os exercícios chamando sua respectiva função:\nex2(), ex3() e ex4()");

//  Objetos

/* Exercício 1 

Array é uma cadeia ordenada, já objeto não segue um padrão. Ambos servem para armazenar dados e organizar o fluxo do código armazenando informações em seus elementos.

*/

// Exercício 2
// Crie uma função chamada criaRetangulo que recebe como parâmetros dois lados (lado1 e lado2) e retorna um objeto com 4 informações: largura (lado1), altura (lado2), perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2).

const ex2 = () => {

    let ladoA = Number(prompt("Informe o tamanho do lado A"));
    let ladoB = Number(prompt("Informe o tamanho do lado B"));

    const criaRetangulo = (lado1, lado2) => {
        return {
            largura: lado1,
            altura: lado2,
            perimetro: 2 * (lado1 + lado2),
            area: (lado1 * lado2)
        }
    };

    console.log(`Lados do retângulo: ${ladoA} e ${ladoB}`, criaRetangulo(ladoA, ladoB));
}



// Exercício 3
// Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes).
const ex3 = () => {
    const favMovie = {
        title: "Tropic Thunder",
        year: 2008,
        director: "Ben Stiller",
        cast: ["Ben Stiller", " Robert Downey Jr", " Jack Black"]
    };

    console.log(`Venha assistir ao filme ${favMovie.title}, de ${favMovie.year}, dirigido por ${favMovie.director} e estrelado por ${favMovie.cast}.`);
}



// Exercício 4
// Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes).

const ex4 = () => {
    const user = {
        nome: "John Doe",
        idade: 30,
        email: "johndoe@gg.io",
        endereco: "Rua 1 N 2 Apartamento 3 DF"
    };

    const anonimizarPessoa = (data) => {
        let userAnon = Object.assign({}, data);
        userAnon.nome = "anônimo";
        console.log(`Array original: `, user);
        console.log(`Array anônimo: `, userAnon);
    }

    anonimizarPessoa(user);
}