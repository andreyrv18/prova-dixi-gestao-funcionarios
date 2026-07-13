package org.backend.gestao.service;

import org.backend.gestao.DTO.CargosDTO;
import org.backend.gestao.model.Cargos;
import org.backend.gestao.repository.CargosRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CargosService {
    private static final Logger log = LoggerFactory.getLogger(CargosService.class);

    private final CargosRepository cargosRepository;

    public CargosService(CargosRepository cargosRepository) {
        this.cargosRepository = cargosRepository;
    }

    public List<Cargos> findAllCargos() {
        return cargosRepository.findAll();
    }
    public Page<Cargos> findAllCargosPage(Pageable pageable) {
        return cargosRepository.findAll(pageable);
    }

    public Cargos criarCargos(Cargos cargos) {
        boolean cargoExist = cargosRepository.existsByCodigoDoCargo(cargos.getCodigoDoCargo());
        if (cargoExist) {
            log.warn("Usuario tentou cadastrar um cargo com código duplicado {}",  cargos.getCodigoDoCargo());
            throw new IllegalArgumentException("Cógido do cargo dever ser unico");
        }

        log.info("Novo cargo criado com código: {}",  cargos.getCodigoDoCargo());
        return cargosRepository.save(cargos);
    }

    public Cargos fromDTO(CargosDTO objDTO) {
        return new Cargos(null, objDTO.getCodigoDoCargo(), objDTO.getDescricaoDoCargo());
    }
}
