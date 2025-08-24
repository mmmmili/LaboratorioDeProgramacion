package TP1;

//clase abstracta decorator principal

public abstract class HamburguesaDecorator implements Hamburguesa{
    //el elemento que vamos a "decorar"
    protected Hamburguesa hamburguesa;
    
    //constructor
    public HamburguesaDecorator(Hamburguesa h){
        hamburguesa = h;
    }

    
    public double getPrecio(){
        return hamburguesa.getPrecio();
    }
    
    public String getDescripcion(){
        return hamburguesa.getDescripcion();
    }

    public String toString(){
        return hamburguesa.toString();
    }
}
