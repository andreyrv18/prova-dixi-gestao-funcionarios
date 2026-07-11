package org.backend.gestao.controller;

import org.backend.gestao.DTO.FuncionariosDTO;
import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Funcionarios;
import org.backend.gestao.service.FuncionariosService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/funcionarios")
@CrossOrigin(origins = "http://localhost:5173")
public class FuncionarioController {
    FuncionariosService funcionariosService;

    public FuncionarioController(FuncionariosService funcionariosService) {
        this.funcionariosService = funcionariosService;
    }

    @GetMapping()
    public ResponseEntity<List<FuncionariosDTO>> funcionarios() {

        List<Funcionarios> listaFuncionarios = funcionariosService.findAllFuncionarios();

        if (listaFuncionarios.isEmpty()) {
            throw new NotFoundExeption("Nenhum funcionário encontrado");
        }

        List<FuncionariosDTO> listDTO = listaFuncionarios.stream().map(FuncionariosDTO::new).toList();

        return ResponseEntity.ok().body(listDTO);
    }

    @PostMapping()
    public ResponseEntity<Void> cadastrarFuncionarios(@RequestBody FuncionariosDTO objDTO) {

        Funcionarios obj = funcionariosService.fromDTO(objDTO);
        obj = funcionariosService.criarFuncionario(obj);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
