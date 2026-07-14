package org.backend.gestao.controller;

import org.backend.gestao.DTO.VinculosDTO;
import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Vinculo;
import org.backend.gestao.service.CargosService;
import org.backend.gestao.service.VinculosService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vinculos")
@CrossOrigin(origins = "http://localhost:5173")

public class VinculosController {

 VinculosService vinculosService;
    private static final Logger log = LoggerFactory.getLogger(VinculosController.class);

    public VinculosController(VinculosService vinculosService) {
        this.vinculosService = vinculosService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<VinculosDTO>> vinculos(){

        List<Vinculo> listVinculos = vinculosService.findAllVinculos();

        if (listVinculos.isEmpty()) {
            throw new NotFoundExeption("Vinculos não encontrados");
        }

        List<VinculosDTO> listDTO = listVinculos.stream().map(VinculosDTO::new).toList();
        return ResponseEntity.status(HttpStatus.OK).body(listDTO);

    }

    @GetMapping()
    public ResponseEntity<Page<VinculosDTO>> vinculos(Pageable pageable) {

        Page<Vinculo> pageVinculos = vinculosService.findAllVinculosPage(pageable);

        if (pageVinculos.isEmpty()) {
            throw new NotFoundExeption("Vinculos não encontrados");
        }

        Page<VinculosDTO> pageDTO = pageVinculos.map(VinculosDTO::new);
        return ResponseEntity.status(HttpStatus.OK).body(pageDTO);

    }


    @GetMapping("/{id}")
    public ResponseEntity<List<VinculosDTO>> findFuncionario(@PathVariable String id) {

        List<Vinculo> find = vinculosService.findVinculoByCpf(id);
        if (find == null) {
            throw new NotFoundExeption("Cpf não encontrado");
        }

        List<VinculosDTO> listDTO = find.stream().map(VinculosDTO::new).toList();
        return ResponseEntity.status(HttpStatus.OK).body(listDTO);


    }

    @PostMapping()
    public ResponseEntity<VinculosDTO> cadastrarVinculo(@RequestBody VinculosDTO objDTO) {
        Vinculo vinculoSalvo = vinculosService.criarVinculo(objDTO);

        VinculosDTO dtoResposta = new VinculosDTO(vinculoSalvo);

        return ResponseEntity.status(HttpStatus.CREATED).body(dtoResposta);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VinculosDTO> atualizarVinculo(@PathVariable Long id, @RequestBody VinculosDTO objDTO) {
        log.info("Recebendo PUT para ID: {} com DTO: {}", id, objDTO);
        Vinculo vinculoAtualizado = vinculosService.atualizarVinculo(id, objDTO);

        VinculosDTO dtoResposta = new VinculosDTO(vinculoAtualizado);

        return ResponseEntity.status(HttpStatus.OK).body(dtoResposta);
    }
}
