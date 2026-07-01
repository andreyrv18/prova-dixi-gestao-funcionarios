package org.backend.gestao.repository;

import org.backend.gestao.model.Funcionarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionariosRepository extends JpaRepository<Funcionarios, Long> {
}
