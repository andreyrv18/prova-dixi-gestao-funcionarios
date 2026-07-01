package org.backend.gestao.exeption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class CargosNotFoundAdvice {

    @ExceptionHandler(CargosNotFoundExeption.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> cargosNotFoundHandler(CargosNotFoundExeption exception){
       Map<String, String> erroJson = new HashMap<>();
       erroJson.put("erro", exception.getMessage());

       return  erroJson;
    }


    @ExceptionHandler(CargoNotFoundExeption.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String cargoNotFoundHandler(CargoNotFoundExeption exeption){
        return exeption.getMessage();
    }
}
