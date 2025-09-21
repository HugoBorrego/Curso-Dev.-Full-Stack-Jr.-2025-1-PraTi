package Exercicio4;

public class Trem implements IMeioTransporte {
    private int velocidade = 0;
    private final int velocidade_maxima = 300;

    @Override
    public void acelerar() {
        if (velocidade + 50 > velocidade_maxima) {
            throw new IllegalStateException("Trem não pode ultrapassar " + velocidade_maxima + " km/h.");
        }
        velocidade += 50;
    }

    @Override
    public void frear() {
        if (velocidade - 50 < 0) {
            throw new IllegalStateException("Trem já está parado.");
        }
        velocidade -= 50;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
