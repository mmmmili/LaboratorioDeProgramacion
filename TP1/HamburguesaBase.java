package TP1;

public class HamburguesaBase implements Hamburguesa{
    private double precio;
    private String descripcion;

    public HamburguesaBase(){
        precio = 100;
        descripcion= "2 panes, 1 carne";
    }

    public void aumentarPrecio(double p){
        precio += p;
    }

    public void setDescripcion(String d){
        descripcion += d;
    }

    public double getPrecio(){
        return precio;
    }

    public String getDescripcion(){
        return descripcion;
    }

    public String toString(){
        return "Precio: "+ precio +"\nDescripcion: "+ descripcion;
    }
}
