export const objetosEx4 = () => {

    // grava dados de um usuário em um objeto
    const user = {
        nome: "John Doe",
        idade: 30,
        email: "johndoe@gg.io",
        endereco: "Rua 1 N 2 Apartamento 3 DF"
    };

    // função geradora que copia os dados de um objeto para outro, mudando a propriedade nome
    const anonimizarPessoa = (data) => {

        // copia o objeto
        let userAnon = Object.assign({}, data);

        // modifica o nome do objeto copiado
        userAnon.nome = "anônimo";

        // exibe o objeto original e sua cópia modificada
        console.log(`Objeto original: `, user);
        console.log("-------------------------------")
        console.log(`Objeto anônimo: `, userAnon);
    }

    // chama a função geradora de cópia de objeto
    anonimizarPessoa(user);
}