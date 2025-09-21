package Exercicio6;

public class Produto {
    private final String nome;
    private final Dinheiro preco;

    public Produto(String nome, Dinheiro preco) {
        if (nome == null || nome.isBlank()) throw new IllegalArgumentException("Nome inválido.");
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public Dinheiro getPreco() {
        return preco;
    }
}
