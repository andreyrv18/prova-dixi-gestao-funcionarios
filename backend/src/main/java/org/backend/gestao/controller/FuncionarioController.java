package org.backend.gestao.controller;

import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Funcionarios;
import org.backend.gestao.repository.FuncionariosRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/funcionarios")
public class FuncionarioController {
    FuncionariosRepository funcionariosRepository;

    public FuncionarioController(FuncionariosRepository funcionariosRepository) {
        this.funcionariosRepository = funcionariosRepository;
    }

    @GetMapping()
    public ResponseEntity<List<Funcionarios>> funcionarios() {

        List<Funcionarios> listaFuncionarios = this.funcionariosRepository.findAll();

        if (listaFuncionarios.isEmpty()) {
            throw new NotFoundExeption("Nenhum funcionário encontrado");
        }

        return ResponseEntity.ok().body(listaFuncionarios);
    }
}
