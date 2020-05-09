/*  
    ========================
        Projeto Semana 4
    ========================    
*/

console.log("Execute os exercícios chamando sua respectiva função:\nex1(), ex2(), ex3(), ex4(), ex5()");

//  Funções de Array

// Exercício 1
const ex1 = () => {
    const
    array = [
                { nome: "Pedro", idade: 20 },
                { nome: "João", idade: 10 },
                { nome: "Paula", idade: 12 },
                { nome: "Artur", idade: 89 } 
            ];
    
    // Faça uma função que retorne um novo array só com os adultos (pessoas com idade igual ou superior a 20)
    const adultArray = array.filter((person) => {
        return (person.idade >= 20);
    });
    console.log(`Array com adultos:`, adultArray);

    // Faça uma função que retorne um novo array só com as crianças/adolescentes (pessoas com idade inferior a 20)
    const youngArray = array.filter((person) => {
        return (person.idade < 20);
    });
    console.log(`Array com jovens: `, youngArray);
}



// Exercício 2
const ex2 = () => {
    const   array = [1,2,3,4,5,6],
            arrayX2 = [],
            arrayX3String = [],
            arrayOddEven = [];

    const mountArrays = array.forEach((num) => {

        // Escreva uma função que retorne um array com as entradas multiplicadas por 2. Isto é [2, 4, 6, 8, 10, 12].
        arrayX2.push(num * 2);

        // Escreva uma função que **retorne** um array com as entradas multiplicadas por 3 e como strings. Isto é: `["3", "6", "9", "15", "18"]`
        arrayX3String.push((num * 3).toString());

        // Escreva uma função que retorne um array de strings dizendo: "${número} é par/impar". Isto é: ["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"] 
        if (num % 2 === 0) {
            arrayOddEven.push(`${num} é par`);
        }
        else {
            arrayOddEven.push(`${num} é ímpar`);
        }
    });

    mountArrays;
    console.log(`Array com valores dobrados: `, arrayX2);
    console.log(`Array com valores triplicados e convertidos para String`, arrayX3String);
    console.log(`Array com valores definidos como par ou ímpar`, arrayOddEven);
}



// Exercício 3
const ex3 = () => {
    const pessoas = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ];

    // altura >= 1.5 , idade > 14 e idade < 60
    const   aprovadas = [],
            reprovadas = [];

    const checarPessoas = (pessoas) => {
        for (let i = 0; i < pessoas.length; i++) {

            // Escreva uma função que receba este array e devolva outro array somente com as pessoas que tem permissão de entrar no brinquedo
            if (pessoas[i].idade > 14 && pessoas[i].idade < 60 && pessoas[i].altura >= 1.5) {
                aprovadas.push(pessoas[i]);
            }
            // Escreva uma função que receba este array e devolva outro array somente com as pessoas que não podem entrar no brinquedo.
            else {
                reprovadas.push(pessoas[i]);
            }
        }
        console.log(`Array com pessoas permitidas a entrar no brinquedo: `, aprovadas)
        console.log(`Array com pessoas impedidas de entrar no brinquedo: ` , reprovadas);
    }

    checarPessoas(pessoas);
}



// Exercício 4
const ex4 = () => {
    const consultas = [
        { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
        { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
        { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
        { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ];

    const   confirmadas = [],
            canceladas = [];

    const checarConsultas = (consultas) => {
        // adiciona propriedade tratamento
        consultas.forEach((cliente) => {
            if(cliente.genero === "masculino") {
                cliente.tratamento = [];
                cliente.tratamento.push("Sr. ", "lembrá-lo")
            }
            else {
                cliente.tratamento = [];
                cliente.tratamento.push("Sra. ", "lembrá-la")
            }
        });

        // separação das consultas por cancelamento
        for (let i = 0; i < consultas.length; i++) {
            if (consultas[i].cancelada === false) {
                confirmadas.push(consultas[i]);
            }
            else {
                canceladas.push(consultas[i]);
            }
        }
        // criação de String para e-mail das consultas confirmadas
        console.log(`Consultas confirmadas:`);
        confirmadas.forEach((cliente) => {
            console.log(`Olá, ${cliente.tratamento[0]} ${cliente.nome}. Estamos enviando esta mensagem para ${cliente.tratamento[1]} da sua consulta no dia ${cliente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`);
        });

        // criação de String para e-mail das consultas canceladas
        console.log(`Consultas canceladas:`);
        canceladas.forEach((cliente) => {
            
            console.log(`Olá, ${cliente.tratamento[0]} ${cliente.nome}. Infelizmente, sua consulta marcada para o dia ${cliente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`);
        });
    }

    checarConsultas(consultas);
}



// Exercício 5
const ex5 = () => {
    const contas = [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]

    // atualiza saldoTotal
    const atualizarSaldo = contas.forEach((conta) => {
        let compraTotal = 0;
        conta.compras.forEach((compra) => {
            compraTotal += compra;
        });
        conta.saldoTotal = conta.saldoTotal - compraTotal;
    });

    atualizarSaldo;
    console.log(`Array com saldo atualizado: `, contas);
}
