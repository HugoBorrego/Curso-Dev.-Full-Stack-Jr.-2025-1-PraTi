package Exercicio7;

import java.math.BigDecimal;

public class Produto implements Identificavel<String> {
    private final String id;
    private final String nome;
    private final BigDecimal preco;

    public Produto(String id, String nome, BigDecimal preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    @Override
    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    @Override
    public String toString() {
        return "Produto{" + "id='" + id + '\'' + ", nome='" + nome + '\'' + ", preco=" + preco + '}';
    }
}
