/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Exercício da Tarde

function blackjack() {

   console.log("===============================");
   console.log("Bem-vindo ao jogo de Blackjack!");
   console.log("===============================\n");

   if (confirm("Quer iniciar uma nova rodada?")) {
      
      let   maoJogadorTexto = [],
            maoJogadorValor = [],
            maoJogadorPontos = 0;
      
      let   maoPcTexto = [],
            maoPcValor = [],
            maoPcPontos = 0;

      let   controleJogador = 0,
            controlePc = 0;

      for (let i = 0; i <= 3; i++) {   // distribui as quatro cartas (mão inicial de ambos jogadores) de uma vez

         const carta = comprarCarta();
         
         if (i % 2 === 0) {            // simula a distribuição de cartas de um jogo real, alternando quem recebe a carta
            
            maoJogadorTexto[controleJogador] = carta.texto;
            maoJogadorValor[controleJogador] = carta.valor;
            controleJogador++;

            maoJogadorPontos+= carta.valor;
         }
         else
         {
            maoPcTexto[controlePc] = carta.texto;
            maoPcValor[controlePc] = carta.valor;
            controlePc++;

            maoPcPontos+= carta.valor;
         }
      }

      console.log("QUE VENÇA O MAIS SORTUDO!");
      console.log("===============================");

      console.log("     Mão do Jogador    = ", maoJogadorTexto[0], maoJogadorTexto[1], " (",maoJogadorPontos," pontos)");
      console.log("\n");
      console.log("     Mão do Computador = ", maoPcTexto[0], maoPcTexto[1], " (",maoPcPontos," pontos)");

      console.log("===============================");
      console.log("Resultado da Rodada");
      console.log("===============================");

      if (maoJogadorPontos > maoPcPontos) {

         console.log("     Vitória do Jogador!");
      }
      else if (maoJogadorPontos < maoPcPontos) {

         console.log("     Vitória do PC!");
      }
      else
      {
         console.log("     Empate! Ninguém ganhou!");
      }



   }
   else
   {
      console.log("O jogo acabou.");
   }

}

// Desafio

console.log("===============================");
console.log("Bem-vindo ao jogo de Blackjack v2!");
console.log("===============================\n");

if (confirm("Quer iniciar uma nova rodada?")) {
   
   let   maoJogadorTexto = [],
         maoJogadorValor = [],
         maoJogadorPontos = 0;
   
   let   maoPcTexto = [],
         maoPcValor = [],
         maoPcPontos = 0;

   let   controleJogador = 0,
         controlePc = 0;

   for (let i = 0; i <= 3; i++) {   // distribui as quatro cartas (mão inicial de ambos jogadores) de uma vez

      const carta = comprarCarta();
      
      if (i % 2 === 0) {            // simula a distribuição de cartas de um jogo real, alternando quem recebe a carta
         
         maoJogadorTexto[controleJogador] = carta.texto;
         maoJogadorValor[controleJogador] = carta.valor;
         controleJogador++;

         maoJogadorPontos+= carta.valor;
      }
      else
      {
         maoPcTexto[controlePc] = carta.texto;
         maoPcValor[controlePc] = carta.valor;
         controlePc++;

         maoPcPontos+= carta.valor;
      }
   }

   console.log("-------------------------------");
   console.log("Regras de Pontos");
   console.log("-------------------------------");
   console.log("• Vence quem fizer mais pontos, o limite é 21 (Blackjack)");
   console.log("• Quem ultrapassar 21 pontos 'estoura' e perde automaticamente");
   console.log("• Cada carta vale seu número em pontos, exceto as figuras");
   console.log("• Figuras J Q K A valem 10 pontos");
   console.log("• O Ás é especial: (A) vale 10 pontos ou 1 ponto")  

   console.log("-------------------------------");
   console.log("QUE VENÇA O MAIS SORTUDO!");
   console.log("-------------------------------");

   console.log("► Mão do Jogador    = ", maoJogadorTexto[0], maoJogadorTexto[1], " (",maoJogadorPontos," pontos)");
   console.log("\n");
   console.log("► Carta revelada do Computador = ", maoPcTexto[0]," (",maoPcValor[0]," pontos)");


   let   continuar = confirm("Deseja compra mais uma carta?"),
         blackjack = false,
         estourou = false;

   while (continuar === true) {

      const carta = comprarCarta();
      
      maoJogadorTexto.push(carta.texto);
      maoJogadorValor.push(carta.valor);
      maoJogadorPontos+= carta.valor;

      console.clear();

      console.log("-------------------------------");
      console.log("Resultados Até Agora");
      console.log("-------------------------------");
   
      console.log("► Mão do Jogador (", maoJogadorPontos, " pontos)");

      for (let num of maoJogadorTexto) {
         console.log(num);
      }

      console.log("\n\n► Carta revelada do Computador = ", maoPcTexto[0]," (",maoPcValor[0]," pontos)");

      if (maoJogadorPontos > 21) {

         continuar = false;
         estourou = true;
      }
      else if (maoJogadorPontos === 21) {

         continuar = false;
         blackjack = true;
      }
      else
      {
         continuar = confirm("Deseja compra mais uma carta?");
      }
   }
 
   if (maoJogadorPontos < 21 && maoPcPontos <= maoJogadorPontos) {
     
      console.clear();

      do {

         const carta = comprarCarta();
      
         maoPcTexto.push(carta.texto);
         maoPcValor.push(carta.valor);
         maoPcPontos+= carta.valor;

         console.log("-------------------------------");
         console.log("Rodada do Computador");
         console.log("-------------------------------");
      
         console.log("► Mão do Jogador (", maoJogadorPontos, " pontos)\n");

         for (let num of maoJogadorTexto) {
            console.log(num);
         }

         console.log("\n► Mão do Computador (", maoPcPontos, " pontos)");

         for (let num of maoPcTexto) {
            console.log(num);
         }

      } while (maoPcPontos < maoJogadorPontos);
   }

   console.clear();

   console.log("===============================");
   console.log("Resultado da Rodada");
   console.log("===============================");

   console.log("► Mão do Jogador (", maoJogadorPontos, " pontos)\n");

   for (let num of maoJogadorTexto) {
      console.log(num);
   }

   console.log("\n► Mão do Computador (", maoPcPontos, " pontos)");

   for (let num of maoPcTexto) {
      console.log(num);
   }

   console.log("-------------------------------");

   if (maoJogadorPontos <= 21 && maoJogadorPontos > maoPcPontos) {

      console.log("► Vitória do Jogador!");
   }
   else if (maoPcPontos <= 21 && maoPcPontos > maoJogadorPontos) {

      console.log("► Vitória do Computador!");
   }
   else if (maoJogadorPontos === maoPcPontos) {
      
      console.log("► Empate! Ninguém ganhou!");
   }
   else if (estourou === true) {
      console.log("► Jogador estourou os 21 pontos!\nVitória do Computador!");
   }
   else {
      console.log("► Computador estourou os 21 pontos!\nVitória do Jogador!")
   }
}
else
{
   console.log("O jogo acabou.");
}