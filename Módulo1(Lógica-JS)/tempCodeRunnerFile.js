function agruparPorCliente(vendas) {
    return vendas.reduce((acc, { cliente, total }) => {
        acc[cliente] = (acc[cliente] || 0) + total;
        return acc;
    }, {});
}

// Exemplo de uso
const vendas = [
    { cliente: "Alice", total: 150 },
    { cliente: "Bob", total: 200 },
    { cliente: "Alice", total: 50 },
    { cliente: "Bob", total: 100 }
];

console.log(agruparPorCliente(vendas));