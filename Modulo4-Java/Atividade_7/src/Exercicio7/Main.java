package Exercicio7;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        IRepository<Produto, String> repoProduto = new InMemoryRepository<>();
        IRepository<Funcionario, Integer> repoFuncionario = new InMemoryRepository<>();

        Produto p1 = new Produto("P001", "Notebook", new BigDecimal("3500.00"));
        Produto p2 = new Produto("P002", "Teclado", new BigDecimal("150.00"));

        repoProduto.salvar(p1);
        repoProduto.salvar(p2);

        System.out.println("Produtos:");
        repoProduto.listarTodos().forEach(System.out::println);

        Funcionario f1 = new Funcionario(1, "Ana", "Gerente");
        Funcionario f2 = new Funcionario(2, "Carlos", "Analista");

        repoFuncionario.salvar(f1);
        repoFuncionario.salvar(f2);

        System.out.println("\nFuncionários:");
        repoFuncionario.listarTodos().forEach(System.out::println);

        try {
            repoProduto.remover("P003"); // ID inexistente
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println("\nErro ao remover produto: " + e.getMessage());
        }
    }
}


/*
Exercício 7 — Generics (Repositório Genérico em Memória)

Defina Identificavel com getId(). Crie IRepository<T extends Identificavel, ID> com salvar, buscarPorId (retorna Optional<T>), listarTodos e remover. Implemente InMemoryRepository com Map<ID, T>, garanta que listarTodos devolva cópia imutável e lance EntidadeNaoEncontradaException ao remover ID inexistente. Use com entidades como Produto e Funcionario.
*/
