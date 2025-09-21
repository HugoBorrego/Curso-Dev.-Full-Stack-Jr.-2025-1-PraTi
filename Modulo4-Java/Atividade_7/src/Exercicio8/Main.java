package Exercicio8;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        Endereco endereco = new Endereco("12345678", "SP");
        Pedido pedido = new Pedido(new BigDecimal("250.00"), endereco, FretePadrao.SEDEX);

        try {
            System.out.println("Frete SEDEX: R$" + pedido.calcularFrete());

            pedido.trocarEstrategia(FretePadrao.PAC);
            System.out.println("Frete PAC: R$" + pedido.calcularFrete());

            pedido.trocarEstrategia(FretePadrao.RETIRADA_LOJA);
            System.out.println("Frete Retirada na Loja: R$" + pedido.calcularFrete());

            pedido.trocarEstrategia(FretePadrao.PROMO_FRETE_GRATIS);
            System.out.println("Frete Promocional: R$" + pedido.calcularFrete());

        } catch (CepInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}


/*
Exercício 8 — Padrão Strategy (Cálculo de Frete com Lambdas)

Modele CalculadoraFrete com calcular(Pedido): BigDecimal. Crie estratégias Sedex, Pac e RetiradaNaLoja e permita injeção/troca da estratégia no Pedido. Acrescente uma estratégia promocional via lambda (frete grátis acima de X). Valide CEP/região e dispare exceções para CEP inválido. Mostre a troca de estratégia em tempo de execução.
*/