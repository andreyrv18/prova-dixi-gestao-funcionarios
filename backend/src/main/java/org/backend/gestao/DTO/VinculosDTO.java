package org.backend.gestao.DTO;

import org.backend.gestao.model.Cargos;
import org.backend.gestao.model.Vinculo;

import java.io.Serializable;

public class VinculosDTO  implements Serializable {
    private String empresa;
    private String matricula;


    private String cargo;
    private String departamento;
    private String funcionario;

    public VinculosDTO(){

    }

    public VinculosDTO(Vinculo vinculo) {
        this.empresa = vinculo.getEmpresa();
        this.matricula = vinculo.getMatricula();

        this.cargo = vinculo.getCargo().getDescricaoDoCargo();
        this.departamento = vinculo.getDepartamento().getDescricaoDoDepartamento();
        this.funcionario = vinculo.getFuncionario().getNome();
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }


    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(String funcionario) {
        this.funcionario = funcionario;
    }
}
