package TP1;

import java.util.concurrent.*;

public class Main {
    public static void main(String[] args) {
        //creamos 3 hamburgueseros
        ExecutorService executor = Executors.newFixedThreadPool(3);
        ThreadPoolExecutor pool = (ThreadPoolExecutor) executor;
        while(true){
            Future<Hamburguesa> futuraHamburguesa = executor.submit(new HacerHamburguesa());
            try {
                System.out.println(futuraHamburguesa.get().toString());
                System.out.print(pool.getPoolSize() + " hamburguesero/s trabajando ----- ");
                System.out.println(pool.getCompletedTaskCount() + " hamburguesa/s hechas");
            } catch (Exception e) {
                System.out.println("Excepcion!");
            }
        }
    }
}
