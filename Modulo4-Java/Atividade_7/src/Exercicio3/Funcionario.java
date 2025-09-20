package Exercicio3;

import java.math.BigDecimal;

public abstract class Funcionario {
    protected String nome;
    protected BigDecimal salario;

    public Funcionario(String nome, BigDecimal salario) {
        if (salario.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Salário deve ser positivo.");
        }
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public abstract BigDecimal calcularBonus();
}


/*
Exercício 3 — Herança (Hierarquia de Funcionários)

Crie a classe base Funcionario com protected String nome e protected BigDecimal salario (com getters). Crie Gerente e Desenvolvedor que sobrescrevem calcularBonus(): 20% do salário para gerente e 10% para desenvolvedor. Garanta que salários sejam positivos. Em um programa, coloque diferentes funcionários em uma coleção do tipo List<Funcionario> e exiba o bônus de cada um.
*/