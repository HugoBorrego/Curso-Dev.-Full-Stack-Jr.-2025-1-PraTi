package Exercicio3;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Funcionario> funcionarios = new ArrayList<>();

        funcionarios.add(new Gerente("Alice", new BigDecimal("10000")));
        funcionarios.add(new Desenvolvedor("Bob", new BigDecimal("8000")));
        funcionarios.add(new Gerente("Carlos", new BigDecimal("12000")));
        funcionarios.add(new Desenvolvedor("Diana", new BigDecimal("7000")));

        for (Funcionario f : funcionarios) {
            System.out.println("Funcionário: " + f.getNome());
            System.out.println("Salário: R$" + f.getSalario());
            System.out.println("Bônus: R$" + f.calcularBonus());
            System.out.println("---------------------------");
        }
    }
}
