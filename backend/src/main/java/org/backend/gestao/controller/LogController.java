package org.backend.gestao.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogController {

    private static final Logger logger = LoggerFactory.getLogger(LogController.class);

    @GetMapping("/teste-log")
    public String testarLog() {
        logger.warn("Usuario acessou: rota log");

        return "log gerado com sucesso";
    }
}
