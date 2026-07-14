package org.backend.gestao.service;

import org.backend.gestao.DTO.VinculosDTO;

import org.backend.gestao.exception.NotFoundExeption;
import org.backend.gestao.model.Cargos;
import org.backend.gestao.model.Departamentos;
import org.backend.gestao.model.Funcionarios;
import org.backend.gestao.model.Vinculo;
import org.backend.gestao.repository.CargosRepository;
import org.backend.gestao.repository.DepartamentosRepository;
import org.backend.gestao.repository.FuncionariosRepository;
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
    private final FuncionariosService funcionariosService;
    private final CargosService cargosService;
    private final DepartamentosService departamentosService;
    public VinculosService(
            VinculoRepository vinculoRepository,
            FuncionariosService funcionariosService,
            CargosService cargosService,
            DepartamentosService departamentosService) {
        this.vinculoRepository = vinculoRepository;
        this.funcionariosService = funcionariosService;
        this.cargosService = cargosService;
        this.departamentosService = departamentosService;
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

    public Vinculo criarVinculo(VinculosDTO dto) {
        Funcionarios funcionario = funcionariosService.findFuncionarioByCpf(dto.getCpfFuncionario());
        if (funcionario == null) throw new NotFoundExeption("Funcionário não encontrado!");

        Cargos cargo = cargosService.findCargoByCodigo(dto.getCargoId().intValue());
        if (cargo == null) throw new NotFoundExeption("Cargo não encontrado!");

        Departamentos departamento = departamentosService.findDepartameByCodigo(dto.getDepartamentoId().intValue());
        if (departamento == null) throw new NotFoundExeption("Departamento não encontrado!");

        Vinculo vinculo = new Vinculo();
        vinculo.setEmpresa(dto.getEmpresa());
        vinculo.setMatricula(dto.getMatricula());
        vinculo.setFuncionario(funcionario);
        vinculo.setCargo(cargo);
        vinculo.setDepartamento(departamento);

        log.info("Criando novo vínculo para o funcionário CPF: {}", dto.getCpfFuncionario());

        return vinculoRepository.save(vinculo);
    }

    public Vinculo atualizarVinculo(Long idVinculo, VinculosDTO dto) {
        return vinculoRepository.findById(idVinculo).map(vinculoExistente -> {

            vinculoExistente.setEmpresa(dto.getEmpresa());
            vinculoExistente.setMatricula(dto.getMatricula());

            if (dto.getCargoId() != null) {
                Cargos cargo = cargosService.findCargoByCodigo(dto.getCargoId().intValue());
                if (cargo == null) throw new NotFoundExeption("Cargo não encontrado!");
                vinculoExistente.setCargo(cargo);
            }

            if (dto.getDepartamentoId() != null) {
                Departamentos departamento = departamentosService.findDepartameByCodigo(dto.getDepartamentoId().intValue());
                if (departamento == null) throw new NotFoundExeption("Departamento não encontrado!");
                vinculoExistente.setDepartamento(departamento);
            }

            log.info("Atualizando vínculo ID: {}", idVinculo);
            return vinculoRepository.save(vinculoExistente);

        }).orElseThrow(() -> new NotFoundExeption("Vínculo não encontrado com o ID: " + idVinculo));
    }


    public Vinculo fromDTO(VinculosDTO objDTO) {
        Vinculo vinculo = new Vinculo();
        vinculo.setEmpresa(objDTO.getEmpresa());
        vinculo.setMatricula(objDTO.getMatricula());

        return vinculo;
    }
}
