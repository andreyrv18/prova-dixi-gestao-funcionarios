package org.backend.gestao.controller;

import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Departamentos;
import org.backend.gestao.service.DepartamentosService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departamentos")
public class DepartamentoController {
    private final DepartamentosService departamentosService;

    public DepartamentoController(DepartamentosService departamentosService) {
        this.departamentosService = departamentosService;
    }


    @GetMapping()
    public ResponseEntity<List<Departamentos>> departamentos() {

        List<Departamentos> listaDepartamentos = departamentosService.findAllDepartamentos();

        if (listaDepartamentos.isEmpty()) {
            throw new NotFoundExeption("Nenhum departamento encontrado");
        }

        return ResponseEntity.ok().body(listaDepartamentos);
    }

    @PostMapping()
    public ResponseEntity<Departamentos> createDepartamento(@RequestBody Departamentos departamentos) {
        Departamentos d = new Departamentos();
        d.setDescricaoDoDepartamento(departamentos.getDescricaoDoDepartamento());
        d.setCodigoDepartamento(departamentos.getCodigoDepartamento());

        Departamentos departamentoCadastro = departamentosService.criarDepartamento(d);

        return ResponseEntity.status(HttpStatus.CREATED).body(departamentoCadastro);
    }

}
