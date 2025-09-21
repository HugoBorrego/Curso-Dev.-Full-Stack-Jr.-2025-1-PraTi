package Exercicio6;

import java.math.BigDecimal;

public class ItemCarrinho {
    private final Produto produto;
    private final int quantidade;

    public ItemCarrinho(Produto produto, int quantidade) {
        if (quantidade <= 0) throw new IllegalArgumentException("Quantidade deve ser maior que zero.");
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Produto getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public Dinheiro getTotal() {
        BigDecimal total = produto.getPreco().getValor().multiply(BigDecimal.valueOf(quantidade));
        return new Dinheiro(total, produto.getPreco().getMoeda());
    }
}
