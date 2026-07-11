package org.backend.gestao.controller;

import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Funcionarios;
import org.backend.gestao.service.FuncionariosService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/funcionarios")
public class FuncionarioController {
    FuncionariosService funcionariosService;

    public FuncionarioController(FuncionariosService funcionariosService) {
        this.funcionariosService = funcionariosService;
    }

    @GetMapping()
    public ResponseEntity<List<Funcionarios>> funcionarios() {

        List<Funcionarios> listaFuncionarios = funcionariosService.findAllFuncionarios();

        if (listaFuncionarios.isEmpty()) {
            throw new NotFoundExeption("Nenhum funcionário encontrado");
        }

        return ResponseEntity.ok().body(listaFuncionarios);
    }

    @PostMapping()
    public ResponseEntity<Funcionarios> cadastrarFuncionarios(@RequestBody Funcionarios funcionarios) {

        Funcionarios f = new Funcionarios();
        f.setNome(funcionarios.getNome());
        f.setCpf(funcionarios.getCpf());

        Funcionarios funcionariosCadastrado = funcionariosService.criarFuncionario(f);


        return ResponseEntity.status(HttpStatus.CREATED).body(funcionariosCadastrado);
    }
}
