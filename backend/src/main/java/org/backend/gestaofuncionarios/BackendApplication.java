package org.backend.gestaofuncionarios;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {
    Controller controller;
    public BackendApplication(Controller controller) {
        this.controller = controller;
    }
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

}
