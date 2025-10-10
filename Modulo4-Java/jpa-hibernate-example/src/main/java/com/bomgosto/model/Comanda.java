package com.bomgosto.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Comanda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_coamnda;
    private String nome_cliente;
    private Date data;
    private int nr_mesa;

    public long getId_coamnda() {
        return id_coamnda;
    }

    public void setId_coamnda(long id_coamnda) {
        this.id_coamnda = id_coamnda;
    }

    public String getNome_cliente() {
        return nome_cliente;
    }

    public void setNome_cliente(String nome_cliente) {
        this.nome_cliente = nome_cliente;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public int getNr_mesa() {
        return nr_mesa;
    }

    public void setNr_mesa(int nr_mesa) {
        this.nr_mesa = nr_mesa;
    }
}
