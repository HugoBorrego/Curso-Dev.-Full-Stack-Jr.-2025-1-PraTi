package Exercicio4;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<IMeioTransporte> transportes = new ArrayList<>();
        transportes.add(new Carro());
        transportes.add(new Bicicleta());
        transportes.add(new Trem());

        for (IMeioTransporte transporte : transportes) {
            System.out.println("Tipo: " + transporte.getClass().getSimpleName());

            try {
                transporte.acelerar();
                transporte.acelerar();
                transporte.frear();
                System.out.println("Velocidade atual: " + transporte.getVelocidade() + " km/h");
            } catch (IllegalStateException e) {
                System.out.println("Erro: " + e.getMessage());
            }

            System.out.println("---------------------------");
        }
    }
}

/*
Exercício 4 — Polimorfismo com Interface (IMeioTransporte)

Defina a interface IMeioTransporte com acelerar() e frear(). Implemente Carro, Bicicleta e Trem, cada um com lógica própria de variação de velocidade e limites. No metodo principal, crie uma lista de IMeioTransporte, percorra e invoque acelerar()/frear() demonstrando polimorfismo. Trate operações inválidas com exceções apropriadas.
*/