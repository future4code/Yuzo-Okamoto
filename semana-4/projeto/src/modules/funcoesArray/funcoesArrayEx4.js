export const funcoesArrayEx4 = () => {
    const consultas = [
        { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
        { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
        { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
        { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ];

    const   confirmadas = [],
            canceladas = [];

    // função de geração de email
    const checarConsultas = (consultas) => {
        
        // checa o gênero e adiciona propriedade tratamento com strings de acordo 
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

        // grava em arrays separados as consultas canceladas e confirmadas
        for (let i = 0; i < consultas.length; i++) {
            if (consultas[i].cancelada === false) {
                confirmadas.push(consultas[i]);
            }
            else {
                canceladas.push(consultas[i]);
            }
        }

        // exibe o e-mail para consultas confirmadas
        console.log(`Consultas confirmadas:`);
        confirmadas.forEach((cliente) => {
            console.log(`Olá, ${cliente.tratamento[0]} ${cliente.nome}. Estamos enviando esta mensagem para ${cliente.tratamento[1]} da sua consulta no dia ${cliente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`);
        });

        // exibe o e-mail para consultas canceladas
        console.log(`Consultas canceladas:`);
        canceladas.forEach((cliente) => {
            
            console.log(`Olá, ${cliente.tratamento[0]} ${cliente.nome}. Infelizmente, sua consulta marcada para o dia ${cliente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`);
        });
    }
    
    // chama a função de geração de email
    checarConsultas(consultas);
}