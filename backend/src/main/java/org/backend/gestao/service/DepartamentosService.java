package org.backend.gestao.service;

import org.backend.gestao.DTO.DepartamentosDTO;
import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Departamentos;
import org.backend.gestao.model.Funcionarios;
import org.backend.gestao.repository.DepartamentosRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartamentosService {
    private static final Logger log = LoggerFactory.getLogger(DepartamentosService.class);
    private final DepartamentosRepository departamentoRepository;

    public DepartamentosService(DepartamentosRepository departamentosRepository) {
        this.departamentoRepository = departamentosRepository;
    }

    public List<Departamentos> findAllDepartamentos() {

        return departamentoRepository.findAll();
    }

    public Page<Departamentos> findAllDepartamentosPage(Pageable pageable) {

        return departamentoRepository.findAll(pageable);
    }

    public Departamentos findDepartameByCodigo(int codigo) {
        return departamentoRepository.findByCodigoDepartamento(codigo);
    }


    public Departamentos criarDepartamento(Departamentos departamento) {

        boolean codigoExiste = departamentoRepository.existsByCodigoDepartamento(departamento.getCodigoDepartamento());

        if (codigoExiste) {
            log.warn("Usuario tentou cadastrar um departamento com código existente {}", departamento.getCodigoDepartamento());
            throw new IllegalArgumentException("Código do departamento deve ser unico");

        }

        log.info("Novo departamento criado com código: {}", departamento.getCodigoDepartamento());

        return departamentoRepository.save(departamento);


    }


    public Departamentos atualizarDepartamento(Departamentos departamento, int codigo) {
        Departamentos departamentoExistente = departamentoRepository.findByCodigoDepartamento(codigo);

        if (departamentoExistente == null) {
            throw new NotFoundExeption("Departamento não encontrado com o código: " + codigo);
        }
        departamentoExistente.setCodigoDepartamento(departamento.getCodigoDepartamento());
        departamentoExistente.setDescricaoDoDepartamento(departamento.getDescricaoDoDepartamento());

        return departamentoRepository.save(departamentoExistente);
    }

    public Departamentos fromDTO(DepartamentosDTO objDTO) {
        return new Departamentos(null, objDTO.getCodigoDepartamento(), objDTO.getDescricaoDoDepartamento());
    }
}
