package org.backend.gestao.controller;

import org.backend.gestao.DTO.CargosDTO;
import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Cargos;
import org.backend.gestao.model.Departamentos;
import org.backend.gestao.service.CargosService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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


    @GetMapping("/list")
    public ResponseEntity<List<CargosDTO>> cargosList() {
        List<Cargos> listaCargos = cargosService.findAllCargos();

        if (listaCargos.isEmpty()) {
            throw new NotFoundExeption("Nenhum cargo encontrado");
        }

        List<CargosDTO> listDTO = listaCargos.stream().map(CargosDTO::new).toList();

        return ResponseEntity.ok().body(listDTO);
    }

    @GetMapping()
    public ResponseEntity<Page<CargosDTO>> cargosPage(Pageable pageable) {
        Page<Cargos> pageCargos = cargosService.findAllCargosPage(pageable);

        if (pageCargos.isEmpty()) {
            throw new NotFoundExeption("Nenhum cargo encontrado");
        }

        Page<CargosDTO> pageDTO = pageCargos.map(CargosDTO::new);

        return ResponseEntity.ok().body(pageDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cargos> findCargo(@PathVariable String id) {

        Cargos find = cargosService.findCargoByCodigo(Integer.parseInt(id));
        if (find == null) {
            throw new NotFoundExeption("Cpf não encontrado");
        }

        return ResponseEntity.ok().body(find);

    }
    @PutMapping("/{codigo}")
    public ResponseEntity<CargosDTO> atualizar(@PathVariable int codigo, @RequestBody CargosDTO objDTO) {
        Cargos obj = cargosService.fromDTO(objDTO);
        obj = cargosService.atualizarCargoByCodigo(obj, codigo);
        CargosDTO dtoResposta = new CargosDTO(obj);
        return ResponseEntity.status(HttpStatus.OK).body(dtoResposta);
    }


    @PostMapping
    public ResponseEntity<Cargos> salvarCargo(@RequestBody Cargos cargo) {
        Cargos c = new Cargos();
        c.setCodigoDoCargo(cargo.getCodigoDoCargo());
        c.setDescricaoDoCargo(cargo.getDescricaoDoCargo());
        
        Cargos cargosCadastro = cargosService.criarCargos(c);

        return ResponseEntity.status(HttpStatus.CREATED).body(cargosCadastro);
    }
}
