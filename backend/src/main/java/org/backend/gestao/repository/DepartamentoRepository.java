package org.backend.gestao.repository;

import org.backend.gestao.model.Departamentos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartamentoRepository extends JpaRepository<Departamentos, Long> {
}
