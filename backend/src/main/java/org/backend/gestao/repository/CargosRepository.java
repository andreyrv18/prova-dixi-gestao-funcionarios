package org.backend.gestao.repository;

import org.backend.gestao.model.Cargos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CargosRepository extends JpaRepository<Cargos, Long> {

    boolean existsByCodigoDoCargo(Integer codigoDoCargo);

    Cargos findByCodigoDoCargo(int codigoDoCargo);
}
