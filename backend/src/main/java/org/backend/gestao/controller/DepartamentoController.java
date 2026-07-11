package org.backend.gestao.controller;

import org.backend.gestao.DTO.DepartamentosDTO;
import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Departamentos;
import org.backend.gestao.service.DepartamentosService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departamentos")
@CrossOrigin(origins = "http://localhost:5173")

public class DepartamentoController {
    private final DepartamentosService departamentosService;

    public DepartamentoController(DepartamentosService departamentosService) {
        this.departamentosService = departamentosService;
    }


    @GetMapping()
    public ResponseEntity<List<DepartamentosDTO>> departamentos() {

        List<Departamentos> listaDepartamentos = departamentosService.findAllDepartamentos();

        if (listaDepartamentos.isEmpty()) {
            throw new NotFoundExeption("Nenhum departamento encontrado");
        }

        List<DepartamentosDTO> listDTO = listaDepartamentos.stream().map(DepartamentosDTO::new).toList();

        return ResponseEntity.ok().body(listDTO);
    }

    @PostMapping()
    public ResponseEntity<Void> cadastrarDepartamento(@RequestBody DepartamentosDTO objDTO) {
        Departamentos obj = departamentosService.fromDTO(objDTO);
        obj = departamentosService.criarDepartamento(obj);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
