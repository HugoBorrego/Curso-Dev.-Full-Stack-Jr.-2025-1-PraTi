package Exercicio5;

import java.math.BigDecimal;

class PagamentoInvalidoException extends Exception {
    public PagamentoInvalidoException(String mensagem) {
        super(mensagem);
    }
}

public abstract class FormaPagamento {
    public abstract void validarPagamento() throws PagamentoInvalidoException;
    public abstract void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException;
}
