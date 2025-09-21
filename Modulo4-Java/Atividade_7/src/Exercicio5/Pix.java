package Exercicio5;

import java.math.BigDecimal;

class Pix extends FormaPagamento {
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        if (chavePix == null || chavePix.isEmpty()) {
            throw new PagamentoInvalidoException("Chave Pix inválida.");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {

    }

}
