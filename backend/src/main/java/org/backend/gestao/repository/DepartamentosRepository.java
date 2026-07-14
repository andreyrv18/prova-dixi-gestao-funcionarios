package org.backend.gestao.repository;

import org.backend.gestao.model.Departamentos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartamentosRepository extends JpaRepository<Departamentos, Long> {

    boolean existsByCodigoDepartamento(Integer codigoDepartamento);

    Departamentos findByCodigoDepartamento(int codigoDepartamento);
}
