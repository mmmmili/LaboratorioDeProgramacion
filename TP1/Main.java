package TP1;

import java.util.concurrent.*;

public class Main {
    public static void main(String[] args) {
        //creamos 3 hamburgueseros
        ExecutorService executor = Executors.newFixedThreadPool(3);
        while(true){
            Future<Hamburguesa> futuraHamburguesa = executor.submit(new HacerHamburguesa());
            try {
                System.out.println(futuraHamburguesa.get().toString());
                Thread.sleep(3000);
            } catch (Exception e) {
                System.out.println("Excepcion!");
            }
        }
    }
}
