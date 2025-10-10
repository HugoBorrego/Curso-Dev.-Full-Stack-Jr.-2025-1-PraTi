package org.example;

import jakarta.persistence.*;

@Entity
public class Matricula {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long matricula_id;

    @ManyToOne
    @JoinColumn(name = "aluno_id")
    private Aluno aluno;

    @ManyToOne
    @JoinColumn(name = "turma_id")
    private Turma turma;

    private double nota_1;
    private double nota_2;
    private double nota_3;
    private double nota_final;
    private int nr_faltas;

    public Long getMatricula_id() {
        return matricula_id;
    }

    public void setMatricula_id(Long matricula_id) {
        this.matricula_id = matricula_id;
    }

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }

    public Turma getTurma() {
        return turma;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }

    public double getNota_1() {
        return nota_1;
    }

    public void setNota_1(double nota_1) {
        this.nota_1 = nota_1;
    }

    public double getNota_2() {
        return nota_2;
    }

    public void setNota_2(double nota_2) {
        this.nota_2 = nota_2;
    }

    public double getNota_3() {
        return nota_3;
    }

    public void setNota_3(double nota_3) {
        this.nota_3 = nota_3;
    }

    public double getNota_final() {
        return nota_final;
    }

    public void setNota_final(double nota_final) {
        this.nota_final = nota_final;
    }

    public int getNr_faltas() {
        return nr_faltas;
    }

    public void setNr_faltas(int nr_faltas) {
        this.nr_faltas = nr_faltas;
    }
}
