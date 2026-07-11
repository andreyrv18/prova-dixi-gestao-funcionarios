package org.backend.gestao.DTO;

import org.backend.gestao.model.Cargos;

import java.io.Serializable;

public class CargosDTO   implements Serializable {
    private int codigoDoCargo;
    private String descricaoDoCargo;

    public CargosDTO() {
    }
    public CargosDTO(Cargos  cargos) {
        this.codigoDoCargo = cargos.getCodigoDoCargo();
        this.descricaoDoCargo = cargos.getDescricaoDoCargo();
    }

    public int getCodigoDoCargo() {
        return codigoDoCargo;
    }

    public void setCodigoDoCargo(int codigoDoCargo) {
        this.codigoDoCargo = codigoDoCargo;
    }

    public String getDescricaoDoCargo() {
        return descricaoDoCargo;
    }

    public void setDescricaoDoCargo(String descricaoDoCargo) {
        this.descricaoDoCargo = descricaoDoCargo;
    }
}
