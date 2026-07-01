package org.backend.gestao.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DepartamentoController {
    @GetMapping("/departamentos")
    public String departamentos() {
        return "departamentos";
    }
}
