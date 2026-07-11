package org.backend.gestao.repository;

import org.backend.gestao.model.Funcionarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface FuncionariosRepository extends PagingAndSortingRepository<Funcionarios, Long>,JpaRepository<Funcionarios, Long> {

  boolean existsByCpf(String CPF);


}
