package TP1;

import java.util.ArrayList;
import java.util.concurrent.*;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        //creamos 3 hamburgueseros
        int cantHamburgueseros = 3;
        //Executors es la clase que implementa la interfaz executorService
        ExecutorService executor = Executors.newFixedThreadPool(cantHamburgueseros);
        ThreadPoolExecutor pool = (ThreadPoolExecutor) executor;
        //lista de hamburguesas pedidas
        List <Callable<Hamburguesa>> pedidos = new ArrayList<>();
        //lista de futurasHamburguesas
        List <Future<Hamburguesa>> futurasHamburguesas = new ArrayList<>();

        while(true){
            for (int i = 0; i < cantHamburgueseros; i++) {
                //el hamburguesero n tarda n*1000ms
                HacerHamburguesa pedido = new HacerHamburguesa(1000*(i+1));
                //cuando termina la hamburguesa la añade a la lista de pedidos
                pedidos.add(pedido);
            }
            try {
                //el executor invoca los 3 pedidos realizados (uno para cada hamburguesero)
                futurasHamburguesas = executor.invokeAll(pedidos);
                for (int i = 0; i < cantHamburgueseros; i++) {
                    //imprime los detalles de cada hamburguesa
                    System.out.println(futurasHamburguesas.get(i).get().toString());
                }
                //datos de la hamburgueseria (?
                System.out.print(pool.getPoolSize() + " hamburguesero/s trabajando ----- ");
                System.out.println(pool.getCompletedTaskCount() + " hamburguesa/s hechas");
            } catch (Exception e) {
                System.out.println("Excepcion!");
            }
        }
    }
}
