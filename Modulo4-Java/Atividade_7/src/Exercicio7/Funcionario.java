package Exercicio7;

public class Funcionario implements Identificavel<Integer> {
    private final Integer id;
    private final String nome;
    private final String cargo;

    public Funcionario(Integer id, String nome, String cargo) {
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
    }

    @Override
    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getCargo() {
        return cargo;
    }

    @Override
    public String toString() {
        return "Funcionario{" + "id=" + id + ", nome='" + nome + '\'' + ", cargo='" + cargo + '\'' + '}';
    }
}
