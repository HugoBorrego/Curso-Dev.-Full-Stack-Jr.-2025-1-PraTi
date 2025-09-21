package Exercicio5;

import java.math.BigDecimal;

class Boleto extends FormaPagamento {
    private String codigoBoleto;

    public Boleto(String codigoBoleto) {
        this.codigoBoleto = codigoBoleto;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        if (codigoBoleto == null || !codigoBoleto.matches("\\d{47}")) {
            throw new PagamentoInvalidoException("Código de boleto inválido.");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {

    }
}

