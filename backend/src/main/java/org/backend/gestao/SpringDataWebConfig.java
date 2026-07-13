package org.backend.gestao;


import org.springframework.context.annotation.Configuration;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

import static org.springframework.data.web.config.EnableSpringDataWebSupport.PageSerializationMode.VIA_DTO;

/**
 * Configuração global do Spring Data para padronizar a paginação da API.
 *
 * Transforma automaticamente os retornos do tipo Page<T> em PagedModel (VIA_DTO),
 * garantindo uma estrutura JSON estável e removendo avisos de serialização do PageImpl.
 */
@Configuration
@EnableSpringDataWebSupport(pageSerializationMode = VIA_DTO)
public class SpringDataWebConfig {
    // A anotação acima ativa globalmente o comportamento do PagedModel.
    // Nenhum código ou bean adicional é necessário aqui.
}
