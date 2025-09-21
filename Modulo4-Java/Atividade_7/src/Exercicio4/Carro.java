package Exercicio4;

public class Carro implements IMeioTransporte {
    private int velocidade = 0;
    private final int velocidade_maxima = 180;

    @Override
    public void acelerar() {
        if (velocidade + 20 > velocidade_maxima) {
            throw new IllegalStateException("Carro não pode ultrapassar " + velocidade_maxima + " km/h.");
        }
        velocidade += 20;
    }

    @Override
    public void frear() {
        if (velocidade - 20 < 0) {
            throw new IllegalStateException("Carro já está parado.");
        }
        velocidade -= 20;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
