package org.backend.gestao.controller;

import org.backend.gestao.exeption.CargoNotFoundExeption;
import org.backend.gestao.exeption.CargosNotFoundExeption;
import org.backend.gestao.model.Cargos;
import org.backend.gestao.repository.CargosRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cargos")
public class CargosController {
    private final CargosRepository repository;

    CargosController(CargosRepository repository){
        this.repository = repository;
    }

    @GetMapping("/todos")
    public List<Cargos> consultarTodos() throws CargosNotFoundExeption {
        List<Cargos> listaCargos = repository.findAll();

        if (listaCargos.isEmpty()) {
            throw new CargosNotFoundExeption();
        }

        return listaCargos;
    }

    @GetMapping("/consultar/{id}")
    public Cargos consultarCargo(@PathVariable Long id) throws CargoNotFoundExeption {
      return repository.findById(id).orElseThrow(()-> new CargoNotFoundExeption(id));

    }
}
