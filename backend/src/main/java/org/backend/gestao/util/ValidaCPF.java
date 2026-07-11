package org.backend.gestao.util;

import java.util.InputMismatchException;

public class ValidaCPF {

    public static boolean isCpf(String CPF) {
        // considera-se erro CPF"s" formados por uma sequência de números iguais
        if (CPF.equals("00000000000") ||
                CPF.equals("11111111111") ||
                CPF.equals("22222222222") || CPF.equals("33333333333") ||
                CPF.equals("44444444444") || CPF.equals("55555555555") ||
                CPF.equals("66666666666") || CPF.equals("77777777777") ||
                CPF.equals("88888888888") || CPF.equals("99999999999") ||
                (CPF.length() != 11))
            return(false);

        char dig10, dig11;
        int soma, i, resto, numero, peso;

        // "try" - protege o código para eventuais erros de conversão de tipo (int)
        try {
            // Calculo do 1º. Digito Verificador
            soma = 0;
            peso = 10;
            for (i=0; i<9; i++) {
                // converte o i-ésimo caractere do CPF em um número:
                // por exemplo, transforma o caractere "0" no inteiro 0
                // (48 eh a posição de "0" na tabela ASCII)
                numero = (CPF.charAt(i) - 48);
                soma = soma + (numero * peso);
                peso = peso - 1;
            }

            resto = 11 - (soma % 11);
            if ((resto == 10) || (resto == 11))
                dig10 = '0';
            else dig10 = (char)(resto + 48); // converte no respectivo caractere numérico

            // Calculo do 2º. Digito Verificador
            soma = 0;
            peso = 11;
            for(i=0; i<10; i++) {
                numero = (CPF.charAt(i) - 48);
                soma = soma + (numero * peso);
                peso = peso - 1;
            }

            resto = 11 - (soma % 11);
            if ((resto == 10) || (resto == 11))
                dig11 = '0';
            else dig11 = (char)(resto + 48);

            // Verifica se os dígitos calculados conferem com os dígitos informados.
            if ((dig10 == CPF.charAt(9)) && (dig11 == CPF.charAt(10))){
            return (true);
            }
            return false;

        } catch (InputMismatchException erro) {
            return(false);
        }

    }
    public static String imprimeCPF(String CPF) {
        return (CPF.substring(0, 3) + "." + CPF.substring(3, 6) + "." +
                CPF.substring(6, 9) + "-" + CPF.substring(9, 11));
    }
}
