package Exercicio8;

import java.math.BigDecimal;

public class FretePadrao {

    public static final CalculadoraFrete SEDEX = pedido -> {
        validarCep(pedido.getEndereco().getCep());
        return new BigDecimal("30.00");
    };

    public static final CalculadoraFrete PAC = pedido -> {
        validarCep(pedido.getEndereco().getCep());
        return new BigDecimal("20.00");
    };

    public static final CalculadoraFrete RETIRADA_LOJA = pedido -> BigDecimal.ZERO;

    public static final CalculadoraFrete PROMO_FRETE_GRATIS = pedido -> {
        validarCep(pedido.getEndereco().getCep());
        return pedido.getValorTotal().compareTo(new BigDecimal("200.00")) >= 0
                ? BigDecimal.ZERO
                : new BigDecimal("25.00");
    };

    private static void validarCep(String cep) {
        if (cep == null || !cep.matches("\\d{8}")) {
            throw new CepInvalidoException("CEP inválido: " + cep);
        }
    }
}
