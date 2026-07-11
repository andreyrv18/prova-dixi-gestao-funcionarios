package org.backend.gestao.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

@Entity
@Table(name = "funcionarios")
public class Funcionarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private @Nullable Long id;

    @Column(name ="nome", nullable=false )
    private String nome;

    @Column(name ="cpf", nullable=false, unique=true )
    private String cpf;

    public  Funcionarios() {
    }

    @Nullable
    public Long getId() {
        return id;
    }

    public void setId(@Nullable Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
