package org.backend.gestao.exeption;

public class CargoNotFoundExeption extends Exception {
    public CargoNotFoundExeption(Long id){
        super("Cargo não encontrado para id: " + id);
    }
}
