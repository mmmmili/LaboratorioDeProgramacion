package TP1;

public class Main {
    public static void main(String[] args) {
        HamburguesaInterfaz hambur = new PancetaDecorator((new Hamburguesa()));
        hambur.toString();
        //esta verga no anda dios sabra porque
        //link del video del que nos estabamos basando: 
        // https://www.youtube.com/watch?v=j40kRwSm4VE
    }
}
