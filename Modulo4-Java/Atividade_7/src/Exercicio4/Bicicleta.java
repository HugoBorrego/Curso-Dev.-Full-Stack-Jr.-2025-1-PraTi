package Exercicio4;

public class Bicicleta implements IMeioTransporte {
    private int velocidade = 0;
    private final int velocidade_maxima = 40;

    @Override
    public void acelerar() {
        if (velocidade + 5 > velocidade_maxima) {
            throw new IllegalStateException("Bicicleta não pode ultrapassar " + velocidade_maxima + " km/h.");
        }
        velocidade += 5;
    }

    @Override
    public void frear() {
        if (velocidade - 5 < 0) {
            throw new IllegalStateException("Bicicleta já está parada.");
        }
        velocidade -= 5;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
