package org.backend.gestao.controller;

import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Cargos;
import org.backend.gestao.service.CargosService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cargos")
public class CargosController {
    private final CargosService cargosService;

    public CargosController(CargosService cargosService) {
        this.cargosService = cargosService;

    }


    @GetMapping()
    public ResponseEntity<List<Cargos>> consultarTodos() {
        List<Cargos> listaCargos = cargosService.findAll();

        if (listaCargos.isEmpty()) {
            throw new NotFoundExeption("Nenhum cargo encontrado");
        }

        return ResponseEntity.ok().body(listaCargos);
    }

//    @GetMapping("/{id}")
//    public Cargos consultarCargo(@PathVariable Long id) {
//
//        return cargosService.findById(id).orElseThrow(() -> new NotFoundExeption("Cargo", "ID", id));
//
//    }

    @PostMapping
    public ResponseEntity<Cargos> salvarCargo(@RequestBody Cargos cargo) {
        Cargos c = new Cargos();
        c.setCodigoDoCargo(cargo.getCodigoDoCargo());
        c.setDescricaoDoCargo(cargo.getDescricaoDoCargo());
        
        Cargos cargosCadastro = cargosService.criarCargos(c);

        return ResponseEntity.status(HttpStatus.CREATED).body(cargosCadastro);
    }
}
