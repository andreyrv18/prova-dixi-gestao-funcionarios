package org.backend.gestao.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

@Entity
@Table(name = "departamentos")
public class Departamentos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  @Nullable Long id;

    @Column(name = "codigo_departamento", nullable = false, unique = true)
    private int codigoDepartamento;

    @Column(name = "descricao_departamento", nullable = false, unique = true)
    private String descricaoDoDepartamento;



    public Departamentos(@Nullable Long id, int codigoDepartamento, String descricaoDoDepartamento) {
        this.id = id;
        this.codigoDepartamento = codigoDepartamento;
        this.descricaoDoDepartamento = descricaoDoDepartamento;
    }

    public Departamentos() {
    }

    @Nullable
    public Long getId() {
        return id;
    }

    public void setId(@Nullable Long id) {
        this.id = id;
    }

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

}
