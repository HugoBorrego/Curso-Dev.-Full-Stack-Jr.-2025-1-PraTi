package Exercicio6;

import java.math.BigDecimal;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Produto livro = new Produto("Livro Java", new Dinheiro(new BigDecimal("120.00"), Moeda.BRL));
        Produto mouse = new Produto("Mouse Gamer", new Dinheiro(new BigDecimal("80.00"), Moeda.BRL));

        Carrinho carrinho = new Carrinho(List.of(), BigDecimal.ZERO);
        carrinho = carrinho.adicionarItem(new ItemCarrinho(livro, 1));
        carrinho = carrinho.adicionarItem(new ItemCarrinho(mouse, 2));

        System.out.println("Total sem desconto: " + carrinho.calcularTotal());

        carrinho = carrinho.aplicarCupom(new BigDecimal("0.25"));
        System.out.println("Total com 25% de desconto: " + carrinho.calcularTotal());

        carrinho = carrinho.removerItem(mouse);
        System.out.println("Total após remover mouse: " + carrinho.calcularTotal());
    }
}


/*
Exercício 6 — Imutabilidade e Objetos de Valor (Carrinho de Compras)

Crie o objeto de valor imutável Dinheiro (valor BigDecimal e enum Moeda) com equals/hashCode coerentes. Modele Produto, ItemCarrinho e um Carrinho cuja lista de itens seja imutável: operações de adicionar/remover/aplicar cupom retornam um novo carrinho. Valide quantidades > 0, proíba valores negativos e limite cupons a 30% com arredondamento bancário. Demonstre o fluxo completo em testes.
*/