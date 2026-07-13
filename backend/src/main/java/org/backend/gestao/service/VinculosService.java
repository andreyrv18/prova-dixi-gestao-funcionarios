package org.backend.gestao.service;

import org.backend.gestao.DTO.VinculosDTO;

import org.backend.gestao.model.Vinculo;
import org.backend.gestao.repository.VinculoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VinculosService {
    private static final Logger log = LoggerFactory.getLogger(VinculosService.class);
    private final VinculoRepository vinculoRepository;


    public VinculosService(VinculoRepository vinculoRepository) {

        this.vinculoRepository = vinculoRepository;

    }

    public List<Vinculo> findAllVinculos(){
        return vinculoRepository.findAll();
    }


    public Page<Vinculo> findAllVinculosPage(Pageable pageable) {
        return vinculoRepository.findAll(pageable);
    }

    public List<Vinculo> findVinculoByCpf(String cpf){
        return vinculoRepository.findByFuncionarioCpf(cpf);
    }


    public Vinculo fromDTO(VinculosDTO objDTO) {
        Vinculo vinculo = new Vinculo();
        vinculo.setEmpresa(objDTO.getEmpresa());
        vinculo.setMatricula(objDTO.getMatricula());


        return vinculo;
    }
}
