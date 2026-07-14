package org.backend.gestao.controller;

import org.backend.gestao.DTO.CargosDTO;
import org.backend.gestao.DTO.FuncionariosDTO;
import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Cargos;
import org.backend.gestao.model.Funcionarios;
import org.backend.gestao.service.FuncionariosService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/funcionarios")
@CrossOrigin(origins = "http://localhost:5173")
public class FuncionarioController {
    FuncionariosService funcionariosService;

    public FuncionarioController(FuncionariosService funcionariosService) {
        this.funcionariosService = funcionariosService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<FuncionariosDTO>> funcionariosList() {

        List<Funcionarios> listaFuncionarios = funcionariosService.findAllFuncionarios();

        if (listaFuncionarios.isEmpty()) {
            throw new NotFoundExeption("Nenhum funcionário encontrado");
        }


        List<FuncionariosDTO> listDTO = listaFuncionarios.stream().map(FuncionariosDTO::new).toList();

        return ResponseEntity.ok().body(listDTO);
    }


    @GetMapping()
    public ResponseEntity<Page<FuncionariosDTO>> funcionariosPage(Pageable pageable) {

        Page<Funcionarios> pageFuncionarios = funcionariosService.findAllFuncionariosPage(pageable);

        if (pageFuncionarios.isEmpty()) {
            throw new NotFoundExeption("Nenhum funcionário encontrado");
        }


        Page<FuncionariosDTO> pageDTO = pageFuncionarios.map(FuncionariosDTO::new);

        return ResponseEntity.ok().body(pageDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Funcionarios> findFuncionario(@PathVariable String id) {

        Funcionarios find = funcionariosService.findFuncionarioByCpf(id);
        if (find == null) {
            throw new NotFoundExeption("Cpf não encontrado");
        }


        return ResponseEntity.ok().body(find);

    }

    @PutMapping("/{cpf}")
    public ResponseEntity<FuncionariosDTO> atualizar(@PathVariable String cpf, @RequestBody FuncionariosDTO funcionarioDTO) {
        Funcionarios funcionario = funcionariosService.fromDTO(funcionarioDTO);
        funcionario = funcionariosService.atualizarFuncionarioByCpf(funcionario, cpf);
        FuncionariosDTO dtoResposta = new FuncionariosDTO(funcionario);
        return ResponseEntity.status(HttpStatus.OK).body(dtoResposta);
    }


    @PostMapping()
    public ResponseEntity<Void> cadastrarFuncionarios(@RequestBody FuncionariosDTO funcionarioDTO) {

        Funcionarios funcionario = funcionariosService.fromDTO(funcionarioDTO);
        funcionario = funcionariosService.criarFuncionario(funcionario);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }



}
