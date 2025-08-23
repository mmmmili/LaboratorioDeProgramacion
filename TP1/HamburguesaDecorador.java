package TP1;

//clase abstracta decorator principal

public abstract class HamburguesaDecorador implements HamburguesaInterfaz{
    //el elemento que vamos a "decorar"
    protected Hamburguesa hamburguesa;
    
    //constructor
    public HamburguesaDecorador(Hamburguesa h){
        hamburguesa = h;
    }

    public void agregarIngrediente(Hamburguesa h){

    }
    public void setPrecio(double p){

    }
    public void setDescripcion(String d){

    }
    public double getPrecio(){
        return hamburguesa.getPrecio();
    }
    public String getDescripcion(){
        return hamburguesa.getDescripcion();
    }
}
