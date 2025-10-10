package org.example;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.math.BigDecimal;

@Entity
public class Turma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long turma_id;
    private String nometurma;
    private int sala;
    private BigDecimal horario;

    public Long getTurma_id() {
        return turma_id;
    }

    public void setTurma_id(Long turma_id) {
        this.turma_id = turma_id;
    }

    public String getNometurma() {
        return nometurma;
    }

    public void setNometurma(String nometurma) {
        this.nometurma = nometurma;
    }

    public int getSala() {
        return sala;
    }

    public void setSala(int sala) {
        this.sala = sala;
    }

    public BigDecimal getHorario() {
        return horario;
    }

    public void setHorario(BigDecimal horario) {
        this.horario = horario;
    }
}
