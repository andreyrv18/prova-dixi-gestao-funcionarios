package org.backend.gestao.controller;

import org.backend.gestao.DTO.CargosDTO;
import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Cargos;
import org.backend.gestao.service.CargosService;
import org.backend.gestao.service.DepartamentosService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cargos")
@CrossOrigin(origins = "http://localhost:5173")

public class CargosController {

    private final CargosService cargosService;

    public CargosController(CargosService cargosService) {
        this.cargosService = cargosService;

    }


    @GetMapping()
    public ResponseEntity<List<CargosDTO>> consultarTodos() {
        List<Cargos> listaCargos = cargosService.findAll();

        if (listaCargos.isEmpty()) {
            throw new NotFoundExeption("Nenhum cargo encontrado");
        }

        List<CargosDTO> listDTO = listaCargos.stream().map(CargosDTO::new).toList();

        return ResponseEntity.ok().body(listDTO);
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
