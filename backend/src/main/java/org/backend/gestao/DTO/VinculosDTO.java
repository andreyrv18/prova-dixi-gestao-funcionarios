package org.backend.gestao.DTO;

import org.backend.gestao.model.Vinculo;

import java.io.Serializable;

public class VinculosDTO  implements Serializable {
    private Long id;
    private String funcionario;
    private String cpfFuncionario;
    private String empresa;
    private String matricula;


    private String cargo;
    private Long cargoId;
    private String departamento;
    private Long departamentoId;

    public VinculosDTO(){

    }

    public VinculosDTO(Vinculo vinculo) {
        this.id = vinculo.getId();
        this.empresa = vinculo.getEmpresa();
        this.matricula = vinculo.getMatricula();

        this.cargo = vinculo.getCargo().getDescricaoDoCargo();
        this.cargoId = vinculo.getCargo().getId();

        this.departamento = vinculo.getDepartamento().getDescricaoDoDepartamento();
        this.departamentoId = vinculo.getDepartamento().getId();

        this.funcionario = vinculo.getFuncionario().getNome();
    }
    public String getCpfFuncionario() { return cpfFuncionario; }
    public void setCpfFuncionario(String cpfFuncionario) { this.cpfFuncionario = cpfFuncionario; }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(String funcionario) {
        this.funcionario = funcionario;
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

    public Long getCargoId() {
        return cargoId;
    }

    public void setCargoId(Long cargoId) {
        this.cargoId = cargoId;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public Long getDepartamentoId() {
        return departamentoId;
    }

    public void setDepartamentoId(Long departamentoId) {
        this.departamentoId = departamentoId;
    }
}
