package Exercicio1;

public class Main {
    public static void main(String[] args) {
        Produto produto1 = new Produto("Caneta", 2.50, 100);
        System.out.println("Produto criado: " + produto1.getNome() + ", Preço: " + produto1.getPreco() + ", Estoque: " + produto1.getQuantidadeEmEstoque());

        produto1.setPreco(3.00);
        produto1.setQuantidadeEmEstoque(120);
        produto1.setNome("Caneta Azul");
        System.out.println("Produto atualizado: " + produto1.getNome() + ", Preço: " + produto1.getPreco() + ", Estoque: " + produto1.getQuantidadeEmEstoque());

        try {
            produto1.setPreco(-5.00);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao definir preço: " + e.getMessage());
        }

        try {
            produto1.setQuantidadeEmEstoque(-10);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao definir estoque: " + e.getMessage());
        }

        try {
            produto1.setNome("");
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao definir nome: " + e.getMessage());
        }

        try {
            Produto p2 = new Produto(null, -1.0, -5);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }
    }
}
