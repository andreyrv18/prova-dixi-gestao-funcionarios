package org.backend.gestao.model;

import jakarta.persistence.*;

@Entity
@Table(name = "departamentos")
public class Departamentos {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name ="codigo_departamento", nullable=false, unique=true )
    private int codigoDepartamento;

    @Column(name = "descricao_departamento", nullable=false, unique=true )
    private String descricaoDoDepartamento;

    public Departamentos() {}

    public String getDescricaoDoDepartamento() {
        return descricaoDoDepartamento;
    }

    public void setDescricaoDoDepartamento(String descricaoDoDepartamento) {
        this.descricaoDoDepartamento = descricaoDoDepartamento;
    }

    public int getCodigoDepartamento() {
        return codigoDepartamento;
    }

    public void setCodigoDepartamento(int codigoDepartamento) {
        this.codigoDepartamento = codigoDepartamento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}


