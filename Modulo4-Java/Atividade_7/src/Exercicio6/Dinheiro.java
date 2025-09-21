package Exercicio6;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

public final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor == null || moeda == null) throw new IllegalArgumentException("Valor e moeda não podem ser nulos.");
        if (valor.compareTo(BigDecimal.ZERO) < 0) throw new IllegalArgumentException("Valor não pode ser negativo.");
        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);
        this.moeda = moeda;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public Moeda getMoeda() {
        return moeda;
    }

    public Dinheiro aplicarDesconto(BigDecimal percentual) {
        if (percentual.compareTo(new BigDecimal("0.30")) > 0) {
            throw new IllegalArgumentException("Desconto não pode exceder 30%.");
        }
        BigDecimal desconto = valor.multiply(percentual).setScale(2, RoundingMode.HALF_EVEN);
        return new Dinheiro(valor.subtract(desconto), moeda);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Dinheiro)) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return valor.equals(dinheiro.valor) && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public String toString() {
        return moeda + " " + valor;
    }
}
