/*  ========== Exercícios de Interpretação ==========
*
*  ===== Exercício 01 =====
*
*  a   Verifica o resto da divisão do número informado por 2
*  b    mod = 0 é par
*  c   mod != 0 é ímpar
*
*
*  ===== Exercício 02 =====
*
*  a   Verifica o preço da fruta informada
*  b   O preço da fruta Maçã é R$ 2.25
*  c   R$ 24.55
*  d   O preço da fruta Pêra é R$ 5
*
*
*  ===== Exercício 03 =====
*
*  a   Mensagem de erro, pois 'mensagem' não foi definida
*  b   Uncaught ReferenceError: mensagem is not defined
*  c   'mensagem' foi definida apenas no bloco filho
*      basta declarar 'mensagem' no escopo do console.log
*
*
*/



// ===== Exercícios de Escrita de Código ==========

// ===== Tela Inicial =====
console.log("============================================");
console.log("| Exercício da Tarde | Semana 3 | Aula 2.");
console.log("============================================");
console.log("  Comandos dos exercícios:");
console.log("     exercicio4a();\n\n");
console.log("     exercicio4b();\n\n");
console.log("     exercicio5();\n\n");
console.log("     desafio();\n\n");





// ===== Exercício 04 =====


//  === (a) ===
function exercicio4a () {

    console.clear();

    console.log("===== Exercício 4 (a)\n");
    console.log("===== Ordenar dois números informados em ordem decrescente =====\n\n");


    let firstNum, secondNum;

    firstNum = prompt("Informe o primeiro número: ");
    secondNum = prompt("Informe o segundo número: ");


    console.log("Primeiro número informado: ", firstNum);
    console.log("Segundo número informado: ", secondNum);

    if (firstNum < secondNum) {

        console.log ("\n\nOrdem Decrescente: ", secondNum, " > ", firstNum);
    }
    else
    {
        console.log ("\n\nOrdem Decrescente: ", firstNum, " > ", secondNum);
    }
    
} // resposta: o programa funciona normalmente



//  === (b) ===
function exercicio4b () {

    console.clear();

    console.log("===== Exercício 4 (b)\n");
    console.log("===== Ordenar três números informados em ordem decrescente =====\n\n");


    let firstNum, secondNum, thirdNum;

    firstNum = prompt("Informe o primeiro número: ");
    secondNum = prompt("Informe o segundo número: ");
    thirdNum = prompt("Informe o terceiro número: ");


    console.log("Primeiro número informado: ", firstNum);
    console.log("Segundo número informado: ", secondNum);
    console.log("Terceiro número informado: ", thirdNum);

    const   a = firstNum,
            b = secondNum,
            c = thirdNum;

    if ( a < b && a < c ) {

        if (b < c) {

            console.log (thirdNum, " ", secondNum, " ", firstNum);
        }
        else
        {
            console.log (thirdNum, " ", firstNum, " ", secondNum);
        }
    }
    else if (b < a && b < c) {

        if (a < c) {

            console.log (thirdNum, " ", firstNum, " ", secondNum);
        }
        else 
        {
            console.log (firstNum, " ", thirdNum, " ", secondNum);
        }
    }
    else if (c < a && c < b) {

        if (a < b) {

            console.log (secondNum, " ", firstNum, " ", thirdNum);
        }
        else
        {
            console.log (firstNum, " ", secondNum, " ", thirdNum);
        }
    }
    else
    {

        console.log (firstNum, " ", secondNum, " ", thirdNum);
    }
   
    // resposta: o programa funciona normalmente
}



//  === (c) ===
//  resposta: o programa b funcionou corretamente, não sendo necessário correção do código



// ===== Exercício 05 =====


//  === (a) ===
//  Link do Google Drive
//  https://drive.google.com/open?id=1UT3LyTHN-XmdD34SczKxtI440OayMqjO


//  === (b) ===

function exercicio5 () {
    let haveBones,
        haveFur,
        isRational,
        haveFeathers,
        isLand,
        isAnphibian;
        

    haveBones = prompt("O animal possui esqueleto ósseo? Informe sim ou não: ");

    if (haveBones === "sim") {


        haveFur = prompt("O animal vertebrado possui pelos? Informe sim ou não: ")

        if (haveFur === "sim") {


            isRational = prompt("O mamífero é um ser inteligente? Informe sim ou não: ")

            if (isRational === "sim") {

                console.clear();
                console.log("======== Especificação de Animal =======\n\n");
                console.log("Dados informados: \n\n     não possui esqueleto ósseo.\n\n");
                console.log ("Animal identificado: ser humano.");
            }
            else
            {
                console.clear();
                console.log("======== Especificação de Animal =======\n\n");
                console.log("Dados informados: \n\n     não possui esqueleto ósseo.\n\n");
                console.log ("Animal identificado: mamífero não-humano.");
            }
        }
        else
        {
            haveFeathers = prompt("O animal vertebrado possui penas? Informe sim ou não: ")

            if (haveFeathers === "sim") {

                console.clear();
                console.log("======== Especificação de Animal =======\n\n");
                console.log("Dados informados: \n\n     não possui esqueleto ósseo.\n\n");
                console.log ("Animal identificado: ave.");
            }
            else
            {
                isLand = prompt("O animal vertebrado é terrestre? Informe sim ou não: ")

                if (isLand === "sim") {

                    isAnphibian = prompt("Esse animal vive parte de sua vida no meio aquático? Informe sim ou não: ")

                    if (isAnphibian === "sim") {

                        console.clear();
                        console.log("======== Especificação de Animal =======\n\n");
                        console.log("Dados informados: \n\n     não possui esqueleto ósseo.\n\n");
                        console.log ("Animal identificado: anfíbio.");
                    }
                    else
                    {
                        console.clear();
                        console.log("======== Especificação de Animal =======\n\n");
                        console.log("Dados informados: \n\n     não possui esqueleto ósseo.\n\n");
                        console.log ("Animal identificado: réptil.");
                    }
                }
                else
                {
                    console.clear();
                    console.log("======== Especificação de Animal =======\n\n");
                    console.log("Dados informados: \n\n     não possui esqueleto ósseo.\n\n");
                    console.log ("Animal identificado: peixe.");
                }
            }
        }
    }
    else
    {
        console.clear();
        console.log("======== Especificação de Animal =======\n\n");
        console.log("Dados informados: \n\n     não possui esqueleto ósseo.\n\n");
        console.log ("Animal identificado: invertebrado.");
    }
}



// ===== DESAFIO =====

function desafio () {
    
    console.clear();

    console.log("===== Desafio\n");
    console.log("===== Sistema de Venda de Ingresso\n\n");

    let
        regiaoCliente,
        nomeCliente,
        etapaJogo,
        categoriaIngresso,
        quantidade;
    
    regiaoCliente = prompt("Informe a região do cliente (DO para compras feitas nacionalmente / IN para compras internacionais): ");
    nomeCliente = prompt("Informe o nome completo do comprador: ");
    
    etapaJogo = prompt("Informe a etapa do jogo (SF para semifinal / DT para decisão do terceiro lugar / FI para final): ");

    categoriaIngresso = prompt("Informe a categoria do ingresso (1/2/3/4): ");

    quantidadeIngresso = prompt("Informe a quantidade de ingressos a serem comprados: ");

    console.log("\n===== Dados da Compra =====");
    console.log("Nome do cliente: ", nomeCliente);
    console.log("Tipo do Jogo")


}
