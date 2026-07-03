package org.backend.gestao.controller;

import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Cargos;
import org.backend.gestao.repository.CargosRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cargos")
public class CargosController {
    private final CargosRepository repository;

    CargosController(CargosRepository repository) {
        this.repository = repository;
    }

    @GetMapping()
    public ResponseEntity<List<Cargos>> consultarTodos() {
        List<Cargos> listaCargos = repository.findAll();

        if (listaCargos.isEmpty()) {
            throw new NotFoundExeption("Nenhum cargo encontrado");
        }

        return ResponseEntity.ok().body(listaCargos);
    }

    @GetMapping("/{id}")
    public Cargos consultarCargo(@PathVariable Long id) {

        return repository.findById(id).orElseThrow(() -> new NotFoundExeption("Cargo", "ID", id));

    }
}
