package com.example;

/**
 * Sobrecarga permite duplicar un método siempre y cuando tengan diferente numero/tipo parametros.
 */
public class Sobrecarga {
    public static void main(String[] args) {


    }

    static int suma (int numero1, int numero2){
        return numero1 + numero2;
    }

    static int suma (int numero1, int numero2, int numero3){
        return numero1 + numero2+ numero3;
    }
}
