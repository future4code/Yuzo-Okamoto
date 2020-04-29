/*  ========== Exercícios de Interpretação ==========
*
*  ===== Exercício 01 =====
*
*  Um loop que se repete quinze vezes e 
*  adiciona +1 no valor da variável 'sum' a cada repetição
*  No final, imprime no console o valor de 'sum' = 15
*  
*
*  ===== Exercício 02 =====
*
*  a   adiciona um elemento na última posição do array
*  b   um array novaLista com todos os números múltiplos de 5 do array lista
*  c   array novaLista[18, 23]
*      array novaLista[19]
*   
*
*  ===== Desafio =====
*
*  Imprime a string linha quatro vezes, concatenando "0" a cada repetição
*  
*  
*/



// ===== Exercícios de Escrita de Código ==========

// ===== Tela Inicial =====

function telaInicial () {
    console.log("====================");
    console.log("Exercício da Tarde \n Semana 3 - Aula 3");
    console.log("====================");
    console.log("Comandos dos exercícios:\n\n");
    console.log("     ex3a()\n\n");
    console.log("     ex3b()\n\n");
    console.log("     ex3c()\n\n");
    console.log("     ex3d()\n\n");
    console.log("     desafio()\n\n");
    console.log("     desafioPC()\n\n");
    console.log("--------------------")
    console.log("Execute o comando dos\nexercícios no console ");
}



// ===== Exercício 03 =====

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];


//  === (a) ===

function ex3a () {

    console.clear();

    let smallNum, bigNum;

    for (let i = 0; i < array.length; i++) {
        
        for (num of array) {

            if (i === 0) {              // para não precisar declarar valores iniciais
                smallNum = num;
                bigNum = num;
            }
            else
            {
                if (num < smallNum) {
                    smallNum = num;
                }
                else if (num > bigNum) {
                    bigNum = num;
                }
            }
        }
    }

    console.log("===== Exercício 3 (a) =====")
    console.log("---------------------\n");

    console.log("O maior número é ", bigNum, " e o menor número é ", smallNum);

    console.log("\n--------------------\n");

    telaInicial();
}



//  === (b) ===

function ex3b() {

    console.clear();

    const newArray = [];

    for (let num of array) {

        newArray.push(num/10);
    }


    console.log("===== Exercício 3 (b) =====")
    console.log("---------------------\n");

    console.log(newArray);

    console.log("\n--------------------\n");

    telaInicial();
}



//  === (c) ===

function ex3c() {

    console.clear();

    const newArray = [];

    for (let num of array) {
        if ((num % 2) === 0) {
            newArray.push(num);
        }
    }


    console.log("===== Exercício 3 (c) =====")
    console.log("---------------------\n");

    console.log(newArray);

    console.log("\n--------------------\n");

    telaInicial();
}



//  === (d) ===

function ex3d() {

    console.clear();

    let newArray = [],
        count = 0,
        text;

    for (let num of array) {

        text = ""
        text = text.concat("O elemento do index ", count, " é: ", num);

        newArray.push(text);

        count++;
    }

    console.log("===== Exercício 3 (d) =====")
    console.log("---------------------\n");

    console.log(newArray);

    console.log("\n--------------------\n");

    telaInicial();
}



// ===== Desafio =====

function desafio() {

    console.clear();

    let targetNum,
        guessNum,
        count = 0,
        endGame = false,
        gameError = false,
        guessArray = [];

    targetNum = prompt("Player 01, escolha seu número: ");
    targetNum = Number(targetNum);

    console.log("Vamos jogar!");

    while (endGame != true) {

        guessNum = prompt("Player 02, adivinhe o número: ");
        guessNum = Number(guessNum);

        if (guessNum > targetNum) {
            console.log("Errrrrrrrou, é menor");
        }
        else if (guessNum < targetNum) {
            console.log("Errrrrrrrou, é maior");
        }
        else if (guessNum === targetNum) {
            endGame = true;
        }
        else
        {
            endGame = true;
            gameError = true;
        }

        guessArray.push(guessNum);
        count++;
    }
    
    console.clear();

    console.log("===== Desafio =====")
    console.log("---------------------\n");

    if (gameError === true) {
        console.log("Erro: número informado inválido");
        console.log("Valor informado: ", guessNum);
        console.log("Encerrando o game...");
    }
    else
    {
        console.log("Acertou!!");
        console.log("O número escondido era ", targetNum);
        console.log("O número de tentativas foi ", guessArray.length);
        console.log("Chutes realizados: ")
        
        for (num of guessArray) {
            console.log(num);
        }
    }

    console.log("\n--------------------\n");

    telaInicial();
}



// ===== Desafio =====

function desafioPC() {

    console.clear();

    let targetNum,
        guessNum,
        count = 0,
        endGame = false,
        gameError = false,
        guessArray = [];

    targetNum = Math.floor(Math.random() * 100) + 1;

    console.log("Vamos jogar!");

    while (endGame != true) {

        guessNum = prompt("Player 01, adivinhe o número de 1 a 100: ");
        guessNum = Number(guessNum);

        if (guessNum > targetNum) {
            console.log("Errrrrrrrou, é menor");
        }
        else if (guessNum < targetNum) {
            console.log("Errrrrrrrou, é maior");
        }
        else if (guessNum === targetNum) {
            endGame = true;
        }
        else
        {
            endGame = true;
            gameError = true;
        }

        guessArray.push(guessNum);
        count++;
    }
    
    console.clear();

    console.log("===== Desafio com PC =====")
    console.log("---------------------\n");

    if (gameError === true) {
        console.log("Erro: número informado inválido");
        console.log("Valor informado: ", guessNum);
        console.log("Encerrando o game...");
    }
    else
    {
        console.log("Acertou!!");
        console.log("O número escondido era ", targetNum);
        console.log("O número de tentativas foi ", guessArray.length);
        console.log("Chutes realizados: ")
        
        for (num of guessArray) {
            console.log(num);
        }
    }

    console.log("\n--------------------\n");

    telaInicial();
}

telaInicial();