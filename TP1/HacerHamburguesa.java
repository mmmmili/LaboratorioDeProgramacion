package TP1;
import java.util.Random;
import java.util.concurrent.Callable;

public class HacerHamburguesa implements Callable<Hamburguesa>{
    public Hamburguesa call(){
        Random rand = new Random();
        int num = rand.nextInt(4);
        Hamburguesa hamburguesita = null;
        switch(num){
            case 0: //hamburguesa simple con queso
                hamburguesita = new QuesoDecorator(new HamburguesaBase());
                break;
            case 1: //hamburguesa con jamon y queso
                hamburguesita = new JamonDecorator(new QuesoDecorator(new HamburguesaBase()));
                break;
            case 2: //hamburguesa con queso panceta y huevo
                hamburguesita = new HuevoDecorator(new PancetaDecorator(new QuesoDecorator(new HamburguesaBase())));
                break;
            case 3: //hamburguesa completa
                hamburguesita = new PancetaDecorator(new HuevoDecorator(new JamonDecorator(new QuesoDecorator(new HamburguesaBase()))));
                break;
            default:
                break;
        }
        //num = rand.nextInt(3000)+1000;
        
        try {
            if (Thread.currentThread().getName().equals("pool-1-thread-1")) {
                //System.out.println("El hilo 1 es medio lento...");
                //Thread.yield();
                Thread.sleep(5000);
            }else{
                Thread.sleep(2000); // simulacion de cocina
            }
        } catch (Exception e) {
            // TODO: handle exception
        }
        System.out.println(Thread.currentThread().getName() + " hizo esta hamburguesa");
        return hamburguesita;
    }
}
