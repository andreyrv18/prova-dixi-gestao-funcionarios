package org.backend.gestao.service;

import org.backend.gestao.DTO.FuncionariosDTO;
import org.backend.gestao.model.Funcionarios;
import org.backend.gestao.model.Vinculo;
import org.backend.gestao.repository.FuncionariosRepository;
import org.backend.gestao.repository.VinculoRepository;
import org.backend.gestao.util.ValidaCPF;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionariosService {
    private static final Logger log = LoggerFactory.getLogger(FuncionariosService.class);
    private final FuncionariosRepository funcionariosRepository;

    public FuncionariosService(FuncionariosRepository funcionariosRepository ) {
        this.funcionariosRepository = funcionariosRepository;
    }

    public List<Funcionarios> findAllFuncionarios() {

        return funcionariosRepository.findAll();
    }


    public Page<Funcionarios> findAllFuncionariosPage(Pageable pageable) {

        return funcionariosRepository.findAll(pageable);
    }

    public Funcionarios findFuncionarioByCpf(String cpf) {
      return  funcionariosRepository.findByCpf(cpf);
    }


    public Funcionarios criarFuncionario(Funcionarios funcionarios) {
        boolean cpfExiste = funcionariosRepository.existsByCpf(funcionarios.getCpf());
        if (cpfExiste) {
            log.warn("Usuário tentou cadastrar um funcionário com CPF existente {}", funcionarios.getCpf());
            throw new IllegalArgumentException("CPF do funcionário deve ser único");
        }

        if (funcionarios.getCpf().length() != 11) {

            throw new IllegalArgumentException("Cpf deve conter 11 dígitos");

        }

        if (funcionarios.getNome().length() < 3) {
            throw new IllegalArgumentException("Nome deve ter mais de 3 dígitos");
        }


        if (!ValidaCPF.isCpf(funcionarios.getCpf())) {
            throw new IllegalArgumentException("CPF inválido");
        }



        return funcionariosRepository.save(funcionarios);

    }



    public Funcionarios fromDTO(FuncionariosDTO objDTO) {
        return new Funcionarios(null, objDTO.getNome(), objDTO.getCpf());
    }


}
