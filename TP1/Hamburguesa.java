package TP1;

public class Hamburguesa implements HamburguesaInterfaz{
    private double precio;
    private String descripcion;

    public Hamburguesa(){
        precio = 100;
        descripcion= "2 panes y 1 carne";
    }

    public void setPrecio(double p){
        precio +=p;
    }

    public void setDescripcion(String d){
        descripcion+=d;
    }

    public double getPrecio(){
        return precio;
    }

    public String getDescripcion(){
        return descripcion;
    }

    public void agregarIngrediente(Hamburguesa h){
        
    }
    public String toString(){
        return "Precio: "+ precio +"\nDescripcion: "+ descripcion;
    }
}
