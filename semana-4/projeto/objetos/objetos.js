/*  
    ========================
        Projeto Semana 4
    ========================    
*/

console.log("Execute os exercícios chamando sua respectiva função:\nex2(), ex3() e ex4()");

//  Objetos

/* Exercício 1 

Array é uma cadeia ordenada, já objeto não segue um padrão. Ambos servem para organizar o fluxo do código armazenando informações em seus elementos.

*/

// Exercício 2
const ex2 = () => {

    const criaRetangulo = (lado1, lado2) => {
        return {
            largura: lado1,
            altura: lado2,
            perimetro: 2 * (lado1 + lado2),
            area: (lado1 * lado2)
        }
    };

    console.log(criaRetangulo(5,8));
}



// Exercício 3
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
const ex4 () => {console.log("Incompleta.")}
// const ex4 = () => {
//     const user = {
//         nome: "John Doe",
//         idade: 30,
//         email: "johndoe@gg.io",
//         endereco: "Rua 1 N 2 Apartamento 3 DF"
//     };

//     const anonimizarPessoa = (data) => {
//         let anonUser = user.map((a)=>{
//             return a;
//         });
//         console.log(anonUser);
//     }

//     anonimizarPessoa(user);
   
// }