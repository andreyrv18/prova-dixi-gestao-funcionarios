package org.backend.gestao.repository;

import org.backend.gestao.model.Funcionarios;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface FuncionariosRepository extends PagingAndSortingRepository<Funcionarios, Long>,JpaRepository<Funcionarios, Long> {

  boolean existsByCpf(String CPF);


    Funcionarios findByCpf(String cpf);

}
