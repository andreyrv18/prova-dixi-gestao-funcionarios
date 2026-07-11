package org.backend.gestao.DTO;

import org.backend.gestao.model.Departamentos;

import java.io.Serializable;

public class DepartamentosDTO implements Serializable {

    private int codigoDepartamento;
    private String descricaoDoDepartamento;

    public DepartamentosDTO() {
    }

    public DepartamentosDTO(Departamentos departamentos) {
        this.codigoDepartamento = departamentos.getCodigoDepartamento();
        this.descricaoDoDepartamento = departamentos.getDescricaoDoDepartamento();
    }

    public int getCodigoDepartamento() {
        return codigoDepartamento;
    }

    public void setCodigoDepartamento(int codigoDepartamento) {
        this.codigoDepartamento = codigoDepartamento;
    }

    public String getDescricaoDoDepartamento() {
        return descricaoDoDepartamento;
    }

    public void setDescricaoDoDepartamento(String descricaoDoDepartamento) {
        this.descricaoDoDepartamento = descricaoDoDepartamento;
    }
}
