package org.backend.gestao.controller;

import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Departamentos;
import org.backend.gestao.repository.DepartamentoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/departamentos")
public class DepartamentoController {
    private final DepartamentoRepository repository;

    public DepartamentoController(DepartamentoRepository repository) {
        this.repository = repository;
    }


    @GetMapping()
    public ResponseEntity<List<Departamentos>> departamentos() {

        List<Departamentos> listaDepartamentos = this.repository.findAll();

        if (listaDepartamentos.isEmpty()) {
            throw new NotFoundExeption("Nenhum departamento encontrado");
        }

        return ResponseEntity.ok().body(listaDepartamentos);
    }
}
