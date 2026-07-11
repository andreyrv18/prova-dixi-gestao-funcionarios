package org.backend.gestao.exception;

import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.time.Instant;

@RestControllerAdvice
public class GlobalExceptionAdvice {


    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionAdvice.class);

    @ExceptionHandler(NotFoundExeption.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<DefaultErrorDTO> handleNotFoundExeption(NotFoundExeption exception,HttpServletRequest request) {
        HttpStatus status = HttpStatus.NOT_FOUND;

        DefaultErrorDTO error = new DefaultErrorDTO(
                Instant.now(),
                status.value(),
                "não encontrado",
                exception.getMessage(),
                request.getRequestURI()
        );

        log.warn("Usuário acessou uma rota sem dados");


        return ResponseEntity.status(status).body(error);

    }


    @ExceptionHandler(NoResourceFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<DefaultErrorDTO> handleException(NoResourceFoundException exception, HttpServletRequest request) {
        HttpStatus status = HttpStatus.NOT_FOUND;

        DefaultErrorDTO error = new DefaultErrorDTO(
                Instant.now(),
                status.value(),
                "rota_digitada",
                "Ops! rota não encontrado",
                request.getRequestURI()
        );


        log.warn("Usuário tentou acessar rota inexistente: {}", exception.getResourcePath());

        return ResponseEntity.status(status).body(error);
    }


    @ExceptionHandler(Exception.class)
    public ResponseEntity<DefaultErrorDTO> handleException(Exception exception, HttpServletRequest request) {
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        DefaultErrorDTO error = new DefaultErrorDTO(
                Instant.now(),
                status.value(),
                "Erro interno do servidor",
                "Ocorreu um erro Inesperado",
                request.getRequestURI()
        );

        log.error("Erro interno do Servidor acessando a rota: {}", exception.getMessage(), exception);

        return ResponseEntity.status(status).body(error);
    }


    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<DefaultErrorDTO> handleException(IllegalArgumentException exception, HttpServletRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        DefaultErrorDTO error = new DefaultErrorDTO(
                Instant.now(),
                status.value(),
                "Dados inválidos",
                exception.getMessage(),
                request.getRequestURI()
        );

        log.warn("Usuario enviou dados inválidos na rota {}: {}", request.getRequestURI(), exception.getMessage());

        return ResponseEntity.status(status).body(error);
    }
}
