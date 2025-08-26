package TP1;
import java.util.Random;
import java.util.concurrent.Callable;

public class HacerHamburguesa implements Callable<Hamburguesa>{
    private int tiempo;

    public HacerHamburguesa(int t){
        tiempo = t;
    }

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
        try {
            Thread.sleep(tiempo);
        } catch (Exception e) {
            // TODO: handle exception
        }
        
        System.out.println(Thread.currentThread().getName() + " hizo esta hamburguesa:");
        //System.out.println(hamburguesita.toString());
        return hamburguesita;
    }
}
