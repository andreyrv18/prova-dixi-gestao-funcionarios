package org.backend.gestao.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FuncionarioController {

    @GetMapping("/funcionarios")
    public String funcionarios(@RequestParam(value = "name", defaultValue = "dixer")String nome){
        return String.format("Olá %s", nome);
    }
}
