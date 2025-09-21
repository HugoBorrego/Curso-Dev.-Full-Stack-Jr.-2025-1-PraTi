package Exercicio5;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        FormaPagamento[] pagamentos = new FormaPagamento[]{
                new CartaoCredito("1234567812345678"),
                new Boleto("12345678901234567890123456789012345678901234567"),
                new Pix("meuemail@exemplo.com")
        };

        BigDecimal valor = new BigDecimal("150.00");

        for (FormaPagamento pagamento : pagamentos) {
            try {
                pagamento.processarPagamento(valor);
            } catch (PagamentoInvalidoException e) {
                System.out.println("Erro ao processar pagamento: " + e.getMessage());
            }
        }
    }
}

/*
Exercício 5 — Abstração (Sistema de Pagamentos)

Implemente a classe abstrata FormaPagamento com validarPagamento() e processarPagamento(BigDecimal valor). Crie CartaoCredito, Boleto e Pix com validações específicas (ex.: número do cartão, formato de boleto, chave Pix). Simule o uso de cada forma por polimorfismo e trate erros de validação com exceções específicas (ex.: PagamentoInvalidoException).
*/