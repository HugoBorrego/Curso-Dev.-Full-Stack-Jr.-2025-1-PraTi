package Exercicio2;

import Exercicio1.Produto;

public class Desconto extends Produto {

    public Desconto(String nome, double preco, int quantidadeEmEstoque) {
        super(nome, preco, quantidadeEmEstoque);
    }

    public void aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("Desconto inválido: deve estar entre 0% e 50%.");
        }

        double desconto = getPreco() * (porcentagem / 100);
        setPreco(getPreco() - desconto);
    }
}

/*
Exercício 2 — Encapsulamento com Validação de Regra (Desconto)

Estenda Produto com o metodo aplicarDesconto(double porcentagem). Permita apenas valores entre 0 e 50 (inclusive) e lance exceção (IllegalArgumentException ou DescontoInvalidoException) se a regra for violada. Mostre, em um main ou testes, o preço antes/depois do desconto e a reação a entradas inválidas.
*/
