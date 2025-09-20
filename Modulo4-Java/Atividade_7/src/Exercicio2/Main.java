package Exercicio2;

public class  Main {
    public static void main(String[] args) {
        Desconto produto = new Desconto("Notebook", 3000.00, 10);

        System.out.println("Preço original: R$" + produto.getPreco());

        try {
            produto.aplicarDesconto(20);
            System.out.println("Preço com 20% de desconto: R$" + produto.getPreco());
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao aplicar desconto: " + e.getMessage());
        }

        try {
            produto.aplicarDesconto(60); // inválido
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao aplicar desconto: " + e.getMessage());
        }

        try {
            produto.aplicarDesconto(-10); // inválido
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao aplicar desconto: " + e.getMessage());
        }
    }
}
