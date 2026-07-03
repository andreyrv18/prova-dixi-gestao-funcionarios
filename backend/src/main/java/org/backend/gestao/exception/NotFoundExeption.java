package org.backend.gestao.exception;

public class NotFoundExeption extends RuntimeException {

    public  NotFoundExeption( String name, String fieldName, Object fieldValue) {
        super(String.format("%s não encontrado com %s: '%s'", name, fieldName, fieldValue));
    }

    public NotFoundExeption(String message) {
        super(message);
    }
}
