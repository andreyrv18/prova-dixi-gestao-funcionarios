package org.backend.gestao.DTO;

import org.backend.gestao.model.Funcionarios;

import java.io.Serializable;

public class FuncionariosDTO implements Serializable {

    private String nome;
    private String cpf;

    public FuncionariosDTO() {

    }

    public FuncionariosDTO(Funcionarios funcionarios) {
        this.nome = funcionarios.getNome();
        this.cpf = funcionarios.getCpf();

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
