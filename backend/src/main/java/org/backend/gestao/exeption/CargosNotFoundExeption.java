package org.backend.gestao.exeption;

public class CargosNotFoundExeption extends Exception {
    public CargosNotFoundExeption(){
        super("Nenhum cargo encontrado");
    }
}
