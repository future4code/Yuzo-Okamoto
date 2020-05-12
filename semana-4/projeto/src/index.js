
// Interpretação de Código
document.getElementById("int-ex1").addEventListener("click", async () => {
    const { interpretacaoEx1 } = await import("./modules/interpretacao/interpretacaoEx1.js")
    console.clear()
    interpretacaoEx1()
})
document.getElementById("int-ex2").addEventListener("click", async () => {
    const { interpretacaoEx2 } = await import("./modules/interpretacao/interpretacaoEx2.js")
    console.clear()
    interpretacaoEx2()
})
document.getElementById("int-ex3").addEventListener("click", async () => {
    const { interpretacaoEx3 } = await import("./modules/interpretacao/interpretacaoEx3.js")
    console.clear()
    interpretacaoEx3()
})
document.getElementById("int-ex4").addEventListener("click", async () => {
    const { interpretacaoEx4 } = await import("./modules/interpretacao/interpretacaoEx4.js")
    console.clear()
    interpretacaoEx4()
})

// Lógica de Programação
document.getElementById("log-ex1").addEventListener("click", async () => {
    const { logicaEx1 } = await import("./modules/logica/logicaEx1.js")
    console.clear()
    logicaEx1()
})
document.getElementById("log-ex2").addEventListener("click", async () => {
    const { logicaEx2 } = await import("./modules/logica/logicaEx2.js")
    console.clear()
    logicaEx2()
})
document.getElementById("log-ex3").addEventListener("click", async () => {
    const { logicaEx3 } = await import("./modules/logica/logicaEx3.js")
    console.clear()
    logicaEx3()
})
document.getElementById("log-ex4").addEventListener("click", async () => {
    const { logicaEx4 } = await import("./modules/logica/logicaEx4.js")
    console.clear()
    logicaEx4()
})
document.getElementById("log-ex5").addEventListener("click", async () => {
    const { logicaEx5 } = await import("./modules/logica/logicaEx5.js")
    console.clear()
    logicaEx5()
})

// Funções
document.getElementById("func-ex1").addEventListener("click", async () => {
    const { funcoesEx1 } = await import("./modules/funcoes/funcoesEx1.js");
    console.clear()
    funcoesEx1()
})
document.getElementById("func-ex2").addEventListener("click", async () => {
    const { funcoesEx2 } = await import("./modules/funcoes/funcoesEx2.js");
    console.clear()
    funcoesEx2()
})

// Objetos
document.getElementById("obj-ex1").addEventListener("click", async () => {
    const { objetosEx1 } = await import("./modules/objetos/objetosEx1.js")
    console.clear()
    objetosEx1()
})
document.getElementById("obj-ex2").addEventListener("click", async () => {
    const { objetosEx2 } = await import("./modules/objetos/objetosEx2.js")
    console.clear()
    objetosEx2()
})
document.getElementById("obj-ex3").addEventListener("click", async () => {
    const { objetosEx3 } = await import("./modules/objetos/objetosEx3.js")
    console.clear()
    objetosEx3()
})
document.getElementById("obj-ex4").addEventListener("click", async () => {
    const { objetosEx4 } = await import("./modules/objetos/objetosEx4.js")
    console.clear()
    objetosEx4()
})

// Funções de Arrays
document.getElementById("f-arr-ex1").addEventListener("click", async () => {
    const { funcoesArrayEx1 } = await import("./modules/funcoesArray/funcoesArrayEx1.js")
    console.clear()
    funcoesArrayEx1()
})
document.getElementById("f-arr-ex2").addEventListener("click", async () => {
    const { funcoesArrayEx2 } = await import("./modules/funcoesArray/funcoesArrayEx2.js")
    console.clear()
    funcoesArrayEx2()
})
document.getElementById("f-arr-ex3").addEventListener("click", async () => {
    const { funcoesArrayEx3 } = await import("./modules/funcoesArray/funcoesArrayEx3.js")
    console.clear()
    funcoesArrayEx3()
})
document.getElementById("f-arr-ex4").addEventListener("click", async () => {
    const { funcoesArrayEx4 } = await import("./modules/funcoesArray/funcoesArrayEx4.js")
    console.clear()
    funcoesArrayEx4()
})
document.getElementById("f-arr-ex5").addEventListener("click", async () => {
    const { funcoesArrayEx5 } = await import("./modules/funcoesArray/funcoesArrayEx5.js")
    console.clear()
    funcoesArrayEx5()
})