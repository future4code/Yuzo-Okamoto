// Exercícios da Tarde

/* Interpretação de código

(1)
a. false
b. false
c. true
d. false
e. boolean


(2)
I. undefined
II. undefined
III. 11
IV. 3 e 4
V. 19 e 8
VI. 3
VII. 1

a. no cenário de programação, o array pode ser um vetor ou uma matriz
        para criar um array, basta indicar as linhas e colunas entre colchetes
b. inicia na linha 0 coluna 0
c. através da propriedade '.length'
d. repostas acima

*/


// Exercícios de escrita de código

/*  ===========================
        Exercício 1
    =========================== */

let tempF, tempK, tempC

console.log("\nEx.1 ===== Conversor de Temperatura =====\n\n")

// (a)
tempF = 77
tempK = (tempF - 32)*5/9 + 273.15

console.log(tempF, "° F =" , tempK)

//(b)
tempC = 80
tempF = tempC*9/5 +32

console.log(tempC, "° C =" , tempF, "° F")

//(c)
tempC = 30
tempF = tempC*9/5 +32
tempK = (tempF - 32)*5/9 + 273.15

console.log(tempC, "° C =" , tempF, "° F = ", tempK)

//(d)
//tempC = prompt("Informe a temperatura em graus Celsius")
tempF = tempC*9/5 +32
tempK = (tempF - 32)*5/9 + 273.15

console.log(tempC, "° C =" , tempF, "° F = ", tempK)


/*  ===========================
        Exercício 2
    =========================== */

let productID = prompt("ID do produto")
let productName = prompt("Nome do produto")
let productPrice = prompt("Preço do produto")
let productCateg = prompt("Categoria do produto")
let productSubCateg = prompt("Subcategoria do produto")

console.log("\n\nEx.2 ===== Registro de catálogo =====\n\n")
console.log("ID", productID)
console.log("Nome", productName)
console.log("Preço", productPrice)
console.log("Categoria", productCateg)
console.log("Subcategoria", productSubCateg)


/*  ===========================
        Exercício 3
    =========================== */

const kWh = 0.05
const discount = 15 // (c)

console.log("\n\n===== Cálculo de Gasto de Energia kWh =====\n\n")

// (a)
let kWhUsed = 280
let kWhCost = kWhUsed * kWh;

console.log("Gasto de energia = ", kWhUsed, " kWh")
console.log("Valor integral = R$ ", kWhCost)

let kWhCostDisc = kWhCost * (100 - discount)/100

console.log("Valor com desconto de ", discount, " % = ", kWhCostDisc)

// (b)
kWhUsed = prompt("Informe o quilowatt-hora consumido")
kWhCost = kWhUsed * kWh;

console.log("\nGasto de energia = ", kWhUsed, " hWh")
console.log("Valor integral = R$ ", kWhCost)

kWhCostDisc = kWhCost * discount

console.log("Valor com desconto de ", discount, " % = ", kWhCostDisc)



