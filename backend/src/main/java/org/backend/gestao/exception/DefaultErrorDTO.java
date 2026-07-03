package org.backend.gestao.exception;

import java.time.Instant;

public record DefaultErrorDTO(Instant timestamp,
                              Integer status,
                              String error,
                              String message,
                              String path) {

}
