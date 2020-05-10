export const funcoesArrayEx5 = () => {
    const contas = [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]

    // função de atualização das contas
    const atualizarSaldo = contas.forEach((conta) => {
        let compraTotal = 0;
        conta.compras.forEach((compra) => {
            compraTotal += compra;
        });
        conta.saldoTotal = conta.saldoTotal - compraTotal;
    });

    // chama a função de atualização e exibe o resultado final
    atualizarSaldo;
    console.log(`Array com saldo atualizado: `, contas);
}