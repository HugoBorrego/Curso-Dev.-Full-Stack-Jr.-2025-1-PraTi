package Exercicio6;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

public class Carrinho {
    private final List<ItemCarrinho> itens;
    private final BigDecimal desconto; // percentual entre 0 e 0.30

    public Carrinho(List<ItemCarrinho> itens, BigDecimal desconto) {
        if (desconto.compareTo(BigDecimal.ZERO) < 0 || desconto.compareTo(new BigDecimal("0.30")) > 0) {
            throw new IllegalArgumentException("Desconto inválido.");
        }
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
        this.desconto = desconto;
    }

    public Carrinho adicionarItem(ItemCarrinho item) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.add(item);
        return new Carrinho(novaLista, desconto);
    }

    public Carrinho removerItem(Produto produto) {
        List<ItemCarrinho> novaLista = new ArrayList<>();
        for (ItemCarrinho item : itens) {
            if (!item.getProduto().equals(produto)) {
                novaLista.add(item);
            }
        }
        return new Carrinho(novaLista, desconto);
    }

    public Carrinho aplicarCupom(BigDecimal percentual) {
        if (percentual.compareTo(new BigDecimal("0.30")) > 0) {
            throw new IllegalArgumentException("Cupom acima do limite permitido.");
        }
        return new Carrinho(itens, percentual);
    }

    public Dinheiro calcularTotal() {
        BigDecimal total = BigDecimal.ZERO;
        Moeda moeda = itens.isEmpty() ? Moeda.BRL : itens.get(0).getProduto().getPreco().getMoeda();

        for (ItemCarrinho item : itens) {
            total = total.add(item.getTotal().getValor());
        }

        Dinheiro bruto = new Dinheiro(total, moeda);
        return bruto.aplicarDesconto(desconto);
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public BigDecimal getDesconto() {
        return desconto;
    }
}
