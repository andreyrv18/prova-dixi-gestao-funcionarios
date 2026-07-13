package org.backend.gestao.repository;

import org.backend.gestao.model.Vinculo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VinculoRepository extends JpaRepository<Vinculo, Long> {

    List<Vinculo> findByFuncionarioCpf(String cpf);
}
