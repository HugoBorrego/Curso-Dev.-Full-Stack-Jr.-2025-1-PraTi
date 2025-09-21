package Exercicio8;

import java.math.BigDecimal;

public class Pedido {
    private final BigDecimal valorTotal;
    private final Endereco endereco;
    private CalculadoraFrete estrategiaFrete;

    public Pedido(BigDecimal valorTotal, Endereco endereco, CalculadoraFrete estrategiaFrete) {
        this.valorTotal = valorTotal;
        this.endereco = endereco;
        this.estrategiaFrete = estrategiaFrete;
    }

    public BigDecimal calcularFrete() throws CepInvalidoException {
        return estrategiaFrete.calcular(this);
    }

    public void trocarEstrategia(CalculadoraFrete novaEstrategia) {
        this.estrategiaFrete = novaEstrategia;
    }

    public BigDecimal getValorTotal() {
        return valorTotal;
    }

    public Endereco getEndereco() {
        return endereco;
    }
}
