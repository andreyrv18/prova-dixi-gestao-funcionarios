package org.backend.gestao.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/log")
public class LogController {

    private static final Logger logger = LoggerFactory.getLogger(LogController.class);

    @GetMapping()
    public ResponseEntity<String> testarLog() {
        logger.warn("Usuario acessou: rota log");

        return ResponseEntity.ok().body("log gerado com sucesso");
    }
}
